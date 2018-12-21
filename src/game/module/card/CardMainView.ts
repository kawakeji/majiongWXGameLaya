module MjGame
{
    export class CardMainView
    {
        deskScene: DeskScene;
        handCardCmArr: Array<HandCardCm>;
        outCardCmArr: Array<OutCardCm>;
        handCardParentViewArr: Array<View>;
        outCardParentViewArr: Array<View>;
        playerViewArr: Array<ui.game.view.PlayerViewUI>;
        myHandCardCm: HandCardCm;
        accoutView: AccoutView;
        anim: CMJAnim;
        lastFlagAnim: CMJAnim;
        curOperationPlayer: PlayerVO;
        constructor(deskScene: DeskScene)
        {
            this.deskScene = deskScene;
            this.handCardCmArr = [];
            this.outCardCmArr = []
            this.handCardParentViewArr = [this.deskScene.downView, this.deskScene.rightView, this.deskScene.upView, this.deskScene.leftView];
            this.outCardParentViewArr = [this.deskScene.outDownView, this.deskScene.outRightView, this.deskScene.outUpView, this.deskScene.outLeftView];
            this.playerViewArr = [this.deskScene.downPlayerView, this.deskScene.rightPlayerView, this.deskScene.upPlayerView, this.deskScene.leftPlayerView];
            this.initView();
            this.addEvent();
        }

        initView()
        {
            this.lastFlagAnim = new CMJAnim(this.deskScene, "game/anim/pointer.ani");
            this.anim = new CMJAnim(this.deskScene, "game/anim/CMJ.ani");
            this.anim.pos(GlobalConfig.DESK_WIDHT * 0.5, GlobalConfig.DESK_HEIGHT * 0.5);
            this.updatePlayerView();
            this.updateCardViews();
            this.playOperationEffect(Constants.O_TYPE_NULL,this.myHandCardCm);
        }

        addEvent()
        {
            EventManager.getInstance().on(ServerHandEvent.UPDATE_CUR_PLAYER, this, this.onUpdateCurPlayer);
            EventManager.getInstance().on(ServerHandEvent.HU_PAI, this, this.onHuPai);
            EventManager.getInstance().on(ServerHandEvent.ADD_PAI, this, this.onAddPai);
            EventManager.getInstance().on(ServerHandEvent.DEL_PAI, this, this.onDelPai);
            EventManager.getInstance().on(ServerHandEvent.CHI_PAI, this, this.onChiPai);
            EventManager.getInstance().on(ServerHandEvent.PENG_PAI, this, this.onPengPai);
            EventManager.getInstance().on(ServerHandEvent.GANG_PAI, this, this.onGangPai);
            EventManager.getInstance().on(ServerHandEvent.UPDATE_CUR_OUT_PAI, this, this.onUpdateCurPai);
            EventManager.getInstance().on(ServerHandEvent.OPERATION, this, this.onOperation);
            EventManager.getInstance().on(ServerHandEvent.STATUS_CHANGE, this, this.onStatusChange);
            EventManager.getInstance().on(ServerHandEvent.HUANG_ZHUANG, this, this.onHuangZhuang);
            EventManager.getInstance().on(ServerHandEvent.TIME_OUT, this, this.onTimeOut);
        }

        removeEvent()
        {
            EventManager.getInstance().off(ServerHandEvent.UPDATE_CUR_PLAYER, this, this.onUpdateCurPlayer);
            EventManager.getInstance().off(ServerHandEvent.HU_PAI, this, this.onHuPai);
            EventManager.getInstance().off(ServerHandEvent.ADD_PAI, this, this.onAddPai);
            EventManager.getInstance().off(ServerHandEvent.DEL_PAI, this, this.onDelPai);
            EventManager.getInstance().off(ServerHandEvent.CHI_PAI, this, this.onChiPai);
            EventManager.getInstance().off(ServerHandEvent.PENG_PAI, this, this.onPengPai);
            EventManager.getInstance().off(ServerHandEvent.GANG_PAI, this, this.onGangPai);
            EventManager.getInstance().off(ServerHandEvent.UPDATE_CUR_OUT_PAI, this, this.onUpdateCurPai);
            EventManager.getInstance().off(ServerHandEvent.OPERATION, this, this.onOperation);
            EventManager.getInstance().off(ServerHandEvent.STATUS_CHANGE, this, this.onStatusChange);
            EventManager.getInstance().off(ServerHandEvent.HUANG_ZHUANG, this, this.onHuangZhuang);
            EventManager.getInstance().off(ServerHandEvent.TIME_OUT, this, this.onTimeOut);
            EventManager.getInstance().off(ClientHandEvent.WAITING_OPERATION_HU, this, this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.WAITING_OPERATION_GANG, this, this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.WAITING_OPERATION_PENG, this, this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.WAITING_OPERATION_CHI, this, this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            EventManager.getInstance().off(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            Laya.timer.clearAll(this.deskScene);
        }

        onUpdateCurPlayer(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            this.curOperationPlayer = player;
            this.deskScene.updateCurPlayer(player, data.endTime);
        }

        onAddPai(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stPai: StPAI = data.stPai;
            Log.print("add Pai------玩家的位置：" + player.position);
            var handCardCm: HandCardCm = this.getPlayerViewByVO(player);
            if (handCardCm)
            {
                handCardCm.addPai(stPai);
            }
        }

        onDelPai(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stPai: StPAI = data.stPai;
            Log.print("del Pai-----玩家的位置：" + player.position);
            var handCardCm: HandCardCm = this.getPlayerViewByVO(player);
            if (handCardCm)
            {
                handCardCm.delPai(stPai);
                var outCard:Laya.Image = handCardCm.getLastOutCard();
                if (outCard)
                {
                    var pos:Laya.Point = outCard.localToGlobal(new Laya.Point(outCard.width/2,0))
                    this.onUpdateLastFlagAnimPos(pos.x,pos.y);
                }
            }
        }

        onChiPai(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stChi: StCHI = data.stChi;
            var handCardCm: HandCardCm = this.getPlayerViewByVO(player);
            if (handCardCm)
            {
                handCardCm.doChiPaiServer(stChi);
                this.playOperationEffect(Constants.O_TYPE_CHI, handCardCm);
            }
        }

        onPengPai(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stPeng: StPeng = data.stPeng;
            var handCardCm: HandCardCm = this.getPlayerViewByVO(player);
            if (handCardCm)
            {
                handCardCm.doPengPaiServer(stPeng);
                this.playOperationEffect(Constants.O_TYPE_PENG, handCardCm);
            }
        }

        onGangPai(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stGang: StGang = data.stGang;
            var handCardCm: HandCardCm = this.getPlayerViewByVO(player);
            if (handCardCm)
            {
                handCardCm.doGangPaiServer(stGang);
                this.playOperationEffect(Constants.O_TYPE_GANG, handCardCm);
            }
        }

        onHuPai(data: any): void
        {
            var self = this;
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let goodInfos: Array<number> = data.goodInfos;
            let stPai: StPAI = data.stPai;
            var handCardCm: HandCardCm = this.getPlayerViewByVO(player);
            if (stPai)
            {
                this.playOperationEffect(Constants.O_TYPE_HU, handCardCm, function (){
                    if(self)
                    {
                        self.showAccoutView(player, goodInfos, stPai);
                    }
                });
            }
            else
            {
                this.playOperationEffect(Constants.O_TYPE_ZIMO, handCardCm, function (){
                    if(self)
                    {
                        self.showAccoutView(player, goodInfos, stPai);
                    }
                });
            }

            // 10s 后自动退出到房间内
            Laya.timer.once(10000,this,this.onHuAccountTimeOut);
            this.lastFlagAnim.visible = false;
        }

        onHuAccountTimeOut()
        {
            ProxyManager.getInstance().gameProxy.sendReadyToServer(PlayerManager.getInstance().selfPlayerVO);
        }

        onStatusChange(data: any)
        {
            if (data)
            {
                var player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
                if(player)
                {
                    player.status = data.status;
                    if (data.playerId == PlayerManager.getInstance().selfPlayerVO.playerId)
                    {
                        var roomScene: RoomScene = new RoomScene();
                        Laya.stage.addChild(roomScene);
                        this.removeEvent();
                        this.deskScene.removeSelf();
                    }
                }
            }
        }

        getPlayerViewByVO(playerVO: PlayerVO): HandCardCm
        {
            var handCardCm: HandCardCm;
            for (var i: number = 0; i < GlobalConfig.MAX_MEMBER_NUM; i++)
            {
                // handCardCm = this.handCardCms[i];
                handCardCm = this.handCardCmArr[i];
                if (handCardCm && handCardCm.player.playerId == playerVO.playerId)
                {
                    return handCardCm;
                }
            }
            return null;
        }

        onUpdateLastFlagAnimPos(posX:number,posY:number): void
        {
            this.lastFlagAnim.play("pointer",null,true);
            this.lastFlagAnim.pos(posX,posY);
            // this.lastFlagAnim.visible=true;
        }

        onUpdateCurPai(data: any): void
        {
            var curOutPai:StPAI = data.curOutPai;
            var curInPai:StPAI = data.curOutPai;
            CMJManager.getInstance().curOutPai = curOutPai;
            CMJManager.getInstance().curInPai = curInPai;
        }

        onOperation(data: any): void
        {
            let player: PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            this.curOperationPlayer = player;
            if (player.playerId == PlayerManager.getInstance().selfPlayerVO.playerId)
            {
                let isSelfHand: boolean = data.isSelfHand;
                let operations: any = data.operations;
                this.myHandCardCm.showOpertaionView(operations);
                this.waitOperation();
            }
        }

        waitOperation(): void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_HU, this, this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_GANG, this, this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_PENG, this, this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_CHI, this, this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
        }

        onWaitMyOperation(type, data): void
        {
            console.log("my operation:" + type);
            EventManager.getInstance().off(type, this, this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            switch (type)
            {
                case ClientHandEvent.WAITING_OPERATION_CHI:
                    {
                        // this.myHandCardCm.doChiPai(Number(data), CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(Constants.O_TYPE_CHI, this.myHandCardCm);
                        // ProxyManager.getInstance().gameProxy.sendChiToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getChiPai());
                        ProxyManager.getInstance().gameProxy.sendChiToServer(this.myHandCardCm.player, Number(data));
                        this.waitDa();
                        break;
                    }
                case ClientHandEvent.WAITING_OPERATION_PENG:
                    {
                        // this.myHandCardCm.doPengPai(CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(Constants.O_TYPE_PENG, this.myHandCardCm);
                        ProxyManager.getInstance().gameProxy.sendPengToServer(this.myHandCardCm.player);
                        this.waitDa();
                        break;
                    }
                case ClientHandEvent.WAITING_OPERATION_GANG:
                    {
                        // this.myHandCardCm.doGangPai(CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(Constants.O_TYPE_GANG, this.myHandCardCm);
                        ProxyManager.getInstance().gameProxy.sendGangToServer(this.myHandCardCm.player);
                        this.waitDa();
                        break;
                    }
                case ClientHandEvent.WAITING_OPERATION_HU:
                    {
                        EventManager.getInstance().event(BaseEvent.HU);
                        // this.playOperationEffect(Constants.O_TYPE_HU, this.myHandCardCm);
                        ProxyManager.getInstance().gameProxy.sendHuToServer(this.myHandCardCm.player);
                        break;
                    }
                case ClientHandEvent.QUIT_OPERATION:
                    {
                        MjSoundManager.getInstance().playCommonSound(SoundType.PASS);
                        ProxyManager.getInstance().gameProxy.sendQuitOperation(this.myHandCardCm.player, Number(data));
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            // CMJManager.getInstance().curOutPai = null;
        }

        waitDa()
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            EventManager.getInstance().event(ClientHandEvent.SHOW_OUT_BTN);
        }

        onWaitMyOutMJ(stPai: StPAI): void
        {
            console.log("del MY Pai");
            EventManager.getInstance().off(ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            ProxyManager.getInstance().gameProxy.sendDelPai(this.myHandCardCm.player, stPai);
        }

        playOperationEffect(oType: number, playerView: HandCardCm, cb?: Function): void
        {
            if (!cb)
            {
                cb = function (){};
            }
            var movieLabel: string;
            if (oType == Constants.O_TYPE_CHI)
            {
                movieLabel = "chi";
                MjSoundManager.getInstance().playCommonSound(SoundType.START_GAME);
                return;
            }
            else if (oType == Constants.O_TYPE_PENG)
            {
                movieLabel = "peng";
            }
            else if (oType == Constants.O_TYPE_GANG)
            {
                movieLabel = "gang";
            }
            else if (oType == Constants.O_TYPE_HU)
            {
                movieLabel = "hu";
            }
            else if (oType == Constants.O_TYPE_NULL)
            {
                movieLabel = "open";
            }
            else if (oType == Constants.O_TYPE_ZIMO)
            {
                this.anim.play("hu", cb);
                MjSoundManager.getInstance().playOperationSound("zimo");
                return;
            }
            this.anim.play(movieLabel, cb);
            MjSoundManager.getInstance().playOperationSound(movieLabel);
        }

        showAccoutView(playerVO: PlayerVO, goodInfos: Array<number>, stPai: StPAI): void
        {
            if (!this.accoutView)
            {
                this.accoutView = new AccoutView();
            }
            this.accoutView.setData(playerVO, goodInfos, stPai);
            this.accoutView.show();
        }

        onHuangZhuang(): void
        {
            if (!this.accoutView)
            {
                this.accoutView = new AccoutView();
            }
            this.accoutView.setData(null, null, null);
            this.accoutView.show();
        }

        onTimeOut(): void
        {
            if (this.curOperationPlayer && this.curOperationPlayer.playerId == this.myHandCardCm.player.playerId)
            {
                this.myHandCardCm.timeOut();
            }
        }

        updateCardViews()
        {
            var playerVOs: Array<PlayerVO> = RoomManager.getInstance().playerVOs;
            let selfPlayer: PlayerVO = PlayerManager.getInstance().selfPlayerVO;
            for (var i = 0; i < playerVOs.length; i++) 
            {
                var player = playerVOs[i];
                var clientPos: number = util.getClientRefPos(player.position, selfPlayer.position);
                var outCardCm = new OutCardCm(this.outCardParentViewArr[clientPos], player, clientPos);
                var handCardcm = new HandCardCm(this.handCardParentViewArr[clientPos], outCardCm, player, clientPos);
                handCardcm.updateHandCard(player.cmj, false);
                if (player.username == PlayerManager.getInstance().selfUsername)
                {
                    this.myHandCardCm = handCardcm;
                }
                this.handCardCmArr.push(handCardcm);
            }
        }

        updatePlayerView()
        {
            var playerVOs: Array<PlayerVO> = RoomManager.getInstance().playerVOs;
            let selfPlayer: PlayerVO = PlayerManager.getInstance().selfPlayerVO;
            var playerView: ui.game.view.PlayerViewUI;
            var player: PlayerVO;
            var clientPos: number;
            var maxPos: number = clientPos;

            for (var i = 0; i < playerVOs.length; i++) 
            {
                player = playerVOs[i];
                clientPos = util.getClientRefPos(player.position, selfPlayer.position);
                playerView = this.playerViewArr[clientPos];
                playerView.isReady.visible = false;
                playerView.headIcon.visible = true;
                playerView.playerName.text = player.username;
                playerView.dealerImg.visible = player.isDealer;
                playerView.visible = true;
                if (maxPos < clientPos)
                {
                    maxPos = clientPos;
                }
            }

            for (var index = (maxPos + 1); index < 4; index++)
            {
                playerView = this.playerViewArr[index];
                playerView.visible = false;
            }
        }
    }
}