/**
   //          var cmj = new CMJ();
   //          var testPaiArr = [[1,1],[1,1],[1,1],[1,2],[1,2],[1,2],[1,3],[1,3],[1,3],[1,4],[1,4],[1,4],[2,1]];

   //          for (var index = 0; index < testPaiArr.length; index++) 
   //          {
   //              var element = testPaiArr[index];
   //              var stPai = new StPAI(element[0],element[1]);
   //              cmj.addPai(stPai);
			// 	// cmj.m_OutPAIVec.push(stPai);
   //              // cmj.m_OutPAIVec.push(stPai);
   //              // cmj.m_OutPAIVec.push(stPai);
   //          }

            
   //          // for (var index = 0; index < 13; index++) {
   //          //     var stPaiEx = CMJManager.getInstance().getAPai();
   //          //     console.log(stPaiEx.m_NewPai);
   //          //     console.log(stPaiEx.m_NewPai.m_Type);
   //          //     console.log(stPaiEx.m_NewPai.m_Value);
   //          //     cmj.addPai(stPaiEx.m_NewPai);

   //          // }

   //          var stPai14 = new StPAI(2,1);
			// cmj.m_OutPAIVec.push(stPai14);
   //          console.log('当前手牌：' + CMJManager.getInstance().Log.printAllPai(cmj.m_MyPAIVec));
   //          console.log('当前手牌数：' + cmj.getCurPaiNum());
   //          console.log('是否胡牌：',cmj.checkHU(stPai14,true));
   //          console.log('胡牌结果：',cmj.Log.printGoodInfo());
   //          this.createHandCardViews(cmj);
			// this.createOutCardViews(cmj);
*/
module MjGame{
	export class CardMainView{
		deskScene:DeskScene;
		handCardCmArr:Array<HandCardCm>;
		outCardCmArr:Array<OutCardCm>;
        handCardParentViewArr:Array<View>;
        outCardParentViewArr:Array<View>;
        myHandCardCm:HandCardCm;
        otherHandCardCms:Array<HandCardCm>;
        curOperationPai:StPAI;
        accoutView:AccoutView;
        anim:CMJAnim;
        constructor(deskScene:DeskScene)
        {
            this.deskScene = deskScene;
            this.handCardCmArr = [];
            this.outCardCmArr = []
            this.handCardParentViewArr = [this.deskScene.downView,this.deskScene.rightView,this.deskScene.upView,this.deskScene.leftView];
            this.outCardParentViewArr = [this.deskScene.outDownView,this.deskScene.outRightView,this.deskScene.outUpView,this.deskScene.outLeftView];
            this.initView();
            this.addEvent();
        }

        initView()
        {        
            this.anim = new CMJAnim(this.deskScene,"game/anim/CMJ.ani");
            this.anim.pos(GlobalConfig.DESK_WIDHT*0.5,GlobalConfig.DESK_HEIGHT*0.5);
            this.updateCardViews();
        }

        addEvent()
        {
			EventManager.getInstance().on(ServerHandEvent.UPDATE_CUR_PLAYER,this,this.onUpdateCurPlayer);
			EventManager.getInstance().on(ServerHandEvent.HU_PAI,this,this.onHuPai);
			EventManager.getInstance().on(ServerHandEvent.ADD_PAI,this,this.onAddPai);
			EventManager.getInstance().on(ServerHandEvent.DEL_PAI,this,this.onDelPai);
			EventManager.getInstance().on(ServerHandEvent.CHI_PAI,this,this.onChiPai);
			EventManager.getInstance().on(ServerHandEvent.PENG_PAI,this,this.onPengPai);
			EventManager.getInstance().on(ServerHandEvent.GANG_PAI,this,this.onGangPai);
			// EventManager.getInstance().on(ClientHandEvent.UPDATE_DEL_PAI_FLAG_IMG_POS,onUpdateDelPaiFlagImgPos);
			EventManager.getInstance().on(ServerHandEvent.OPERATION,this,this.onOperation);
			EventManager.getInstance().on(ServerHandEvent.READY,this,this.onReady);
			EventManager.getInstance().on(ServerHandEvent.HUANG_ZHUANG,this,this.onHuangZhuang);
        }

        removeEvent()
        {
            EventManager.getInstance().off(ServerHandEvent.UPDATE_CUR_PLAYER,this,this.onUpdateCurPlayer);
			EventManager.getInstance().off(ServerHandEvent.HU_PAI,this,this.onHuPai);
			EventManager.getInstance().off(ServerHandEvent.ADD_PAI,this,this.onAddPai);
			EventManager.getInstance().off(ServerHandEvent.DEL_PAI,this,this.onDelPai);
			EventManager.getInstance().off(ServerHandEvent.CHI_PAI,this,this.onChiPai);
			EventManager.getInstance().off(ServerHandEvent.PENG_PAI,this,this.onPengPai);
			EventManager.getInstance().off(ServerHandEvent.GANG_PAI,this,this.onGangPai);
			// EventManager.getInstance().on(ClientHandEvent.UPDATE_DEL_PAI_FLAG_IMG_POS,onUpdateDelPaiFlagImgPos);
			EventManager.getInstance().off(ServerHandEvent.OPERATION,this,this.onOperation);
			EventManager.getInstance().off(ServerHandEvent.READY,this,this.onReady);
			EventManager.getInstance().off(ServerHandEvent.HUANG_ZHUANG,this,this.onHuangZhuang);
            Laya.timer.clearAll(this.deskScene);
        }

        onUpdateCurPlayer(data:any):void
		{
            let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
			var pos:number = this.getClientPos(player);
			this.deskScene.updateCurPlayer(pos);
		}

        onAddPai(data:any):void
		{
            let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stPai:StPAI = data.stPai;
			Log.print("add Pai------玩家的位置：" + player.position);
			if (this.myHandCardCm && player.playerId == this.myHandCardCm.player.playerId)
			{
                CMJManager.getInstance().curOutPai = stPai;
				this.myHandCardCm.addPai(stPai);
			}
			else
			{
				var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
				if (otherHandCardCm)
				{
					otherHandCardCm.addPai(stPai);
				}
			}
		}

		onDelPai(data:any):void
		{
            if (data.playerId != PlayerManager.getInstance().selfPlayerVO.playerId)
            {
                let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
                let stPai:StPAI = data.stPai;
                Log.print("del Pai-----玩家的位置：" + player.position);
                CMJManager.getInstance().curOutPai = stPai;
                var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm)
                {
                    otherHandCardCm.delPai(stPai);
                }
            }
		}

		onChiPai(data:any):void
		{
            if (data.playerId != PlayerManager.getInstance().selfPlayerVO.playerId)
            {
                let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
                let stChi:StCHI = data.stChi;
                var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm)
                {
                    otherHandCardCm.doChiPaiServer(stChi);
                    this.playOperationEffect(Constants.O_TYPE_CHI,otherHandCardCm);
                }
            }
		}

		onPengPai(data:any):void
		{
            if (data.playerId != PlayerManager.getInstance().selfPlayerVO.playerId)
            {
                let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
                let stPai:StPAI = data.stPai;
                var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm)
                {
                    otherHandCardCm.doPengPai(stPai);
                    this.playOperationEffect(Constants.O_TYPE_PENG,otherHandCardCm);
                }
            }
		}

		onGangPai(data:any):void
		{
            if (data.playerId != PlayerManager.getInstance().selfPlayerVO.playerId)
            {
                let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
                let stPai:StPAI = data.stPai;
                var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm)
                {
                    otherHandCardCm.doGangPai(stPai);
                    this.playOperationEffect(Constants.O_TYPE_GANG,otherHandCardCm);
                }
            }
		}
		
		onHuPai(data:any):void
		{
            let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stGoodInfos:Array<StGoodInfo> = data.stGoodInfos;
            let stPai:StPAI = data.stPai;
			var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
			if(otherHandCardCm)
			{
                var self = this;
				// otherHandCardCm.doHuPai(stPai);
				this.playOperationEffect(Constants.O_TYPE_HU,otherHandCardCm,function()
                {
                    if (self)
                    {
                        var roomScene:RoomScene = new RoomScene();
                        Laya.stage.addChild(roomScene);
                        self.removeEvent();
                        self.deskScene.removeSelf();
                        self.showAccoutView(player,stGoodInfos,stPai);
                    }
                });
			}
            this.showAccoutView(player,stGoodInfos,stPai);
			// _lastPaiFlagImg.visible = false;
		}

        onReady(data:any)
        {
            let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            var otherHandCardCm:HandCardCm = this.getPlayerViewByVO(player);
            if(otherHandCardCm)
			{
			}
        }

        getPlayerViewByVO(playerVO:PlayerVO):HandCardCm
		{
			var otherHandCardCm:HandCardCm;
			for (var i:number=0; i < (GlobalConfig.MAX_MEMBER_NUM - 1); i++)
			{
				otherHandCardCm= this.otherHandCardCms[i];
				if (otherHandCardCm.player.playerId == playerVO.playerId)
				{
					return otherHandCardCm;
				}
			}
			return null;
		}

		onUpdateDelPaiFlagImgPos(gp:number):void
		{
			// _lastPaiFlagImg.x=gp.x;
			// _lastPaiFlagImg.y=gp.y;
			// _lastPaiFlagImg.visible=true;
		}

		onOperation(data:any):void
		{
            let player:PlayerVO = RoomManager.getInstance().getPlayer(data.playerId);
            let stPai:StPAI = data.stPai;
            let isSelfHand:boolean = data.isSelfHand;
            // let oType:number = data.operations;
            let operations:any = data.operations;
			CMJManager.getInstance().curOperationPai = stPai;
            this.myHandCardCm.showOpertaionView(operations);
            this.waitOperation();
		}

        waitOperation():void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_HU,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_GANG,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_PENG,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_CHI,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.WAITING_OUT_MJ,this,this.onWaitMyOutMJ);
            EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
        }

        onWaitMyOperation(type,data):void
        {
            console.log("my operation:" + type);
            EventManager.getInstance().off(type,this,this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
            switch(type)
            {
                case ClientHandEvent.WAITING_OPERATION_CHI:
                {
                    this.myHandCardCm.doChiPai(Number(data),CMJManager.getInstance().curOutPai);
                    this.playOperationEffect(Constants.O_TYPE_CHI,this.myHandCardCm);
                    ProxyManager.getInstance().gameProxy.sendChiToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getChiPai());
                    this.waitDa();
                    break;
                }
                case ClientHandEvent.WAITING_OPERATION_PENG:
                {
                    this.myHandCardCm.doPengPai(CMJManager.getInstance().curOutPai);
                    this.playOperationEffect(Constants.O_TYPE_PENG,this.myHandCardCm);
					ProxyManager.getInstance().gameProxy.sendPengToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getPengPai());
                    this.waitDa();
                    break;
                }
                case ClientHandEvent.WAITING_OPERATION_GANG:
                {
                    this.myHandCardCm.doGangPai(CMJManager.getInstance().curOutPai);
                    this.playOperationEffect(Constants.O_TYPE_GANG,this.myHandCardCm);
					ProxyManager.getInstance().gameProxy.sendGangToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getGangPai());
                    this.waitDa();
                    break;
                }
                case ClientHandEvent.WAITING_OPERATION_HU:
                {
                    EventManager.getInstance().event(BaseEvent.HU);
                    this.playOperationEffect(Constants.O_TYPE_HU,this.myHandCardCm);
					ProxyManager.getInstance().gameProxy.sendHuToServer(this.myHandCardCm.player, this.curOperationPai);
                    break;
                }
                case ClientHandEvent.QUIT_OPERATION:
                {
                    ProxyManager.getInstance().gameProxy.sendQuitOperation(this.myHandCardCm.player,Number(data));
                    break;
                }
                default:
                {
                    break;
                }
            }
            CMJManager.getInstance().curOutPai = null;
        }

        waitDa()
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OUT_MJ,this,this.onWaitMyOutMJ);
            EventManager.getInstance().event(ClientHandEvent.SHOW_OUT_BTN);
        }
        
        onWaitMyOutMJ(stPai:StPAI):void
        {
            console.log("del MY Pai");
            EventManager.getInstance().off(ClientHandEvent.WAITING_OUT_MJ,this,this.onWaitMyOutMJ);
            this.myHandCardCm.delPai(stPai);
            CMJManager.getInstance().curOutPai = stPai;
            ProxyManager.getInstance().gameProxy.sendDelPai(this.myHandCardCm.player,stPai);
            // this.dealerPos = 1;
            // this.resume();
        }
		
		playOperationEffect(oType:number,playerView:HandCardCm,cb?:Function):void
		{
            var movieLabel:string;
			if (oType == Constants.O_TYPE_HU)
			{
				movieLabel = "hu";
			}
			else if (oType == Constants.O_TYPE_GANG)
			{
				movieLabel = "gang";
			}
			else if (oType == Constants.O_TYPE_PENG)
			{
				movieLabel = "peng";
			}
			else if (oType == Constants.O_TYPE_CHI)
			{
				movieLabel = "chi";
			}
			this.anim.play(movieLabel,this.onAnimComplete);
		}
		
		onAnimComplete():void
		{
			// _oTypeImg.remove();
		}
		
		showAccoutView(playerVO:PlayerVO,stGoodInfos:Array<StGoodInfo>,stPai:StPAI):void
		{
			if(!this.accoutView)
			{
				this.accoutView = new AccoutView();
			}
			this.accoutView.setData(playerVO,stGoodInfos,stPai);
            this.accoutView.show();
		}
		
		onHuangZhuang():void
		{
            if(!this.accoutView)
			{
				this.accoutView = new AccoutView();
			}
			this.accoutView.setData(null,null,null);
            this.accoutView.show();
		}

        updateCardViews()
        {
            var playerVOs:Array<PlayerVO> = RoomManager.getInstance().playerVOs;
            this.otherHandCardCms = [];
            for (var i = 0; i < playerVOs.length; i++) 
            {
                var player = playerVOs[i];
                var clientPos = this.getClientPos(player);
                var outCardCm = new OutCardCm(this.outCardParentViewArr[clientPos],player,clientPos);
                var handCardcm = new HandCardCm(this.handCardParentViewArr[clientPos],outCardCm,player,clientPos);
                handCardcm.updateHandCard(player.cmj,false);
                if (player.username == PlayerManager.getInstance().selfUsername)
                {
                    this.myHandCardCm = handCardcm;
                }
                else
                {
                    this.otherHandCardCms.push(handCardcm)
                }
                this.handCardCmArr.push(handCardcm);
            }
            // SinglePlayManager.getInstance().startGame(myPlayer,otherPlayers)
        }

        getClientPos(player:PlayerVO)
        {
            let selfPlayer:PlayerVO = PlayerManager.getInstance().selfPlayerVO;
            return util.getClientRefPos(player.position,selfPlayer.position);
        }

        // updateCardViews()
        // {
        //     var playerVOs:Array<PlayerVO> = SinglePlayManager.getInstance().createPlayers();
        //     var myPlayer:HandCardCm;
        //     var otherPlayers:Array<HandCardCm> = [];
        //     for (var i = 0; i < playerVOs.length; i++) 
        //     {
        //         var playerVO = playerVOs[i];
        //         var outCardCm = new OutCardCm(this.outCardParentViewArr[playerVO.position],playerVO.position);
        //         var handCardcm = new HandCardCm(this.handCardParentViewArr[playerVO.position],outCardCm,playerVO.position);
        //         handCardcm.updateHandCard(playerVO.cmj,false);
        //         if (playerVO.position == Constants.DOWN_POS)
        //         {
        //             myPlayer = handCardcm
        //         }
        //         else
        //         {
        //             otherPlayers.push(handCardcm)
        //         }
        //         this.handCardCmArr.push(handCardcm);
        //     }
        //     SinglePlayManager.getInstance().startGame(myPlayer,otherPlayers)
        // }
	}
}