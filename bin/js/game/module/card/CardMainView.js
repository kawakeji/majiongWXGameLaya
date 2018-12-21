var MjGame;
(function (MjGame) {
    var CardMainView = /** @class */ (function () {
        function CardMainView(deskScene) {
            this.deskScene = deskScene;
            this.handCardCmArr = [];
            this.outCardCmArr = [];
            this.handCardParentViewArr = [this.deskScene.downView, this.deskScene.rightView, this.deskScene.upView, this.deskScene.leftView];
            this.outCardParentViewArr = [this.deskScene.outDownView, this.deskScene.outRightView, this.deskScene.outUpView, this.deskScene.outLeftView];
            this.playerViewArr = [this.deskScene.downPlayerView, this.deskScene.rightPlayerView, this.deskScene.upPlayerView, this.deskScene.leftPlayerView];
            this.initView();
            this.addEvent();
        }
        CardMainView.prototype.initView = function () {
            this.lastFlagAnim = new MjGame.CMJAnim(this.deskScene, "game/anim/pointer.ani");
            this.anim = new MjGame.CMJAnim(this.deskScene, "game/anim/CMJ.ani");
            this.anim.pos(MjGame.GlobalConfig.DESK_WIDHT * 0.5, MjGame.GlobalConfig.DESK_HEIGHT * 0.5);
            this.updatePlayerView();
            this.updateCardViews();
            this.playOperationEffect(MjGame.Constants.O_TYPE_NULL, this.myHandCardCm);
        };
        CardMainView.prototype.addEvent = function () {
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.UPDATE_CUR_PLAYER, this, this.onUpdateCurPlayer);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.HU_PAI, this, this.onHuPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.ADD_PAI, this, this.onAddPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.DEL_PAI, this, this.onDelPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.CHI_PAI, this, this.onChiPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.PENG_PAI, this, this.onPengPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.GANG_PAI, this, this.onGangPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.UPDATE_CUR_OUT_PAI, this, this.onUpdateCurPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.OPERATION, this, this.onOperation);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.STATUS_CHANGE, this, this.onStatusChange);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.HUANG_ZHUANG, this, this.onHuangZhuang);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.TIME_OUT, this, this.onTimeOut);
        };
        CardMainView.prototype.removeEvent = function () {
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.UPDATE_CUR_PLAYER, this, this.onUpdateCurPlayer);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.HU_PAI, this, this.onHuPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.ADD_PAI, this, this.onAddPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.DEL_PAI, this, this.onDelPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.CHI_PAI, this, this.onChiPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.PENG_PAI, this, this.onPengPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.GANG_PAI, this, this.onGangPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.UPDATE_CUR_OUT_PAI, this, this.onUpdateCurPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.OPERATION, this, this.onOperation);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.STATUS_CHANGE, this, this.onStatusChange);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.HUANG_ZHUANG, this, this.onHuangZhuang);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.TIME_OUT, this, this.onTimeOut);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OPERATION_HU, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OPERATION_GANG, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OPERATION_PENG, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OPERATION_CHI, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            Laya.timer.clearAll(this.deskScene);
        };
        CardMainView.prototype.onUpdateCurPlayer = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            this.curOperationPlayer = player;
            this.deskScene.updateCurPlayer(player, data.endTime);
        };
        CardMainView.prototype.onAddPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stPai = data.stPai;
            MjGame.Log.print("add Pai------玩家的位置：" + player.position);
            var handCardCm = this.getPlayerViewByVO(player);
            if (handCardCm) {
                handCardCm.addPai(stPai);
            }
        };
        CardMainView.prototype.onDelPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stPai = data.stPai;
            MjGame.Log.print("del Pai-----玩家的位置：" + player.position);
            var handCardCm = this.getPlayerViewByVO(player);
            if (handCardCm) {
                handCardCm.delPai(stPai);
                var outCard = handCardCm.getLastOutCard();
                if (outCard) {
                    var pos = outCard.localToGlobal(new Laya.Point(outCard.width / 2, 0));
                    this.onUpdateLastFlagAnimPos(pos.x, pos.y);
                }
            }
        };
        CardMainView.prototype.onChiPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stChi = data.stChi;
            var handCardCm = this.getPlayerViewByVO(player);
            if (handCardCm) {
                handCardCm.doChiPaiServer(stChi);
                this.playOperationEffect(MjGame.Constants.O_TYPE_CHI, handCardCm);
            }
        };
        CardMainView.prototype.onPengPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stPeng = data.stPeng;
            var handCardCm = this.getPlayerViewByVO(player);
            if (handCardCm) {
                handCardCm.doPengPaiServer(stPeng);
                this.playOperationEffect(MjGame.Constants.O_TYPE_PENG, handCardCm);
            }
        };
        CardMainView.prototype.onGangPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stGang = data.stGang;
            var handCardCm = this.getPlayerViewByVO(player);
            if (handCardCm) {
                handCardCm.doGangPaiServer(stGang);
                this.playOperationEffect(MjGame.Constants.O_TYPE_GANG, handCardCm);
            }
        };
        CardMainView.prototype.onHuPai = function (data) {
            var self = this;
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var goodInfos = data.goodInfos;
            var stPai = data.stPai;
            var handCardCm = this.getPlayerViewByVO(player);
            if (stPai) {
                this.playOperationEffect(MjGame.Constants.O_TYPE_HU, handCardCm, function () {
                    if (self) {
                        self.showAccoutView(player, goodInfos, stPai);
                    }
                });
            }
            else {
                this.playOperationEffect(MjGame.Constants.O_TYPE_ZIMO, handCardCm, function () {
                    if (self) {
                        self.showAccoutView(player, goodInfos, stPai);
                    }
                });
            }
            // 10s 后自动退出到房间内
            Laya.timer.once(10000, this, this.onHuAccountTimeOut);
            this.lastFlagAnim.visible = false;
        };
        CardMainView.prototype.onHuAccountTimeOut = function () {
            MjGame.ProxyManager.getInstance().gameProxy.sendReadyToServer(MjGame.PlayerManager.getInstance().selfPlayerVO);
        };
        CardMainView.prototype.onStatusChange = function (data) {
            if (data) {
                var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
                if (player) {
                    player.status = data.status;
                    if (data.playerId == MjGame.PlayerManager.getInstance().selfPlayerVO.playerId) {
                        var roomScene = new MjGame.RoomScene();
                        Laya.stage.addChild(roomScene);
                        this.removeEvent();
                        this.deskScene.removeSelf();
                    }
                }
            }
        };
        CardMainView.prototype.getPlayerViewByVO = function (playerVO) {
            var handCardCm;
            for (var i = 0; i < MjGame.GlobalConfig.MAX_MEMBER_NUM; i++) {
                // handCardCm = this.handCardCms[i];
                handCardCm = this.handCardCmArr[i];
                if (handCardCm && handCardCm.player.playerId == playerVO.playerId) {
                    return handCardCm;
                }
            }
            return null;
        };
        CardMainView.prototype.onUpdateLastFlagAnimPos = function (posX, posY) {
            this.lastFlagAnim.play("pointer", null, true);
            this.lastFlagAnim.pos(posX, posY);
            // this.lastFlagAnim.visible=true;
        };
        CardMainView.prototype.onUpdateCurPai = function (data) {
            var curOutPai = data.curOutPai;
            var curInPai = data.curOutPai;
            MjGame.CMJManager.getInstance().curOutPai = curOutPai;
            MjGame.CMJManager.getInstance().curInPai = curInPai;
        };
        CardMainView.prototype.onOperation = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            this.curOperationPlayer = player;
            if (player.playerId == MjGame.PlayerManager.getInstance().selfPlayerVO.playerId) {
                var isSelfHand = data.isSelfHand;
                var operations = data.operations;
                this.myHandCardCm.showOpertaionView(operations);
                this.waitOperation();
            }
        };
        CardMainView.prototype.waitOperation = function () {
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OPERATION_HU, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OPERATION_GANG, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OPERATION_PENG, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OPERATION_CHI, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
        };
        CardMainView.prototype.onWaitMyOperation = function (type, data) {
            console.log("my operation:" + type);
            MjGame.EventManager.getInstance().off(type, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            switch (type) {
                case MjGame.ClientHandEvent.WAITING_OPERATION_CHI:
                    {
                        // this.myHandCardCm.doChiPai(Number(data), CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_CHI, this.myHandCardCm);
                        // ProxyManager.getInstance().gameProxy.sendChiToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getChiPai());
                        MjGame.ProxyManager.getInstance().gameProxy.sendChiToServer(this.myHandCardCm.player, Number(data));
                        this.waitDa();
                        break;
                    }
                case MjGame.ClientHandEvent.WAITING_OPERATION_PENG:
                    {
                        // this.myHandCardCm.doPengPai(CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_PENG, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendPengToServer(this.myHandCardCm.player);
                        this.waitDa();
                        break;
                    }
                case MjGame.ClientHandEvent.WAITING_OPERATION_GANG:
                    {
                        // this.myHandCardCm.doGangPai(CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_GANG, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendGangToServer(this.myHandCardCm.player);
                        this.waitDa();
                        break;
                    }
                case MjGame.ClientHandEvent.WAITING_OPERATION_HU:
                    {
                        MjGame.EventManager.getInstance().event(MjGame.BaseEvent.HU);
                        // this.playOperationEffect(Constants.O_TYPE_HU, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendHuToServer(this.myHandCardCm.player);
                        break;
                    }
                case MjGame.ClientHandEvent.QUIT_OPERATION:
                    {
                        MjGame.MjSoundManager.getInstance().playCommonSound(MjGame.SoundType.PASS);
                        MjGame.ProxyManager.getInstance().gameProxy.sendQuitOperation(this.myHandCardCm.player, Number(data));
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            // CMJManager.getInstance().curOutPai = null;
        };
        CardMainView.prototype.waitDa = function () {
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.SHOW_OUT_BTN);
        };
        CardMainView.prototype.onWaitMyOutMJ = function (stPai) {
            console.log("del MY Pai");
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            MjGame.ProxyManager.getInstance().gameProxy.sendDelPai(this.myHandCardCm.player, stPai);
        };
        CardMainView.prototype.playOperationEffect = function (oType, playerView, cb) {
            if (!cb) {
                cb = function () { };
            }
            var movieLabel;
            if (oType == MjGame.Constants.O_TYPE_CHI) {
                movieLabel = "chi";
                MjGame.MjSoundManager.getInstance().playCommonSound(MjGame.SoundType.START_GAME);
                return;
            }
            else if (oType == MjGame.Constants.O_TYPE_PENG) {
                movieLabel = "peng";
            }
            else if (oType == MjGame.Constants.O_TYPE_GANG) {
                movieLabel = "gang";
            }
            else if (oType == MjGame.Constants.O_TYPE_HU) {
                movieLabel = "hu";
            }
            else if (oType == MjGame.Constants.O_TYPE_NULL) {
                movieLabel = "open";
            }
            else if (oType == MjGame.Constants.O_TYPE_ZIMO) {
                this.anim.play("hu", cb);
                MjGame.MjSoundManager.getInstance().playOperationSound("zimo");
                return;
            }
            this.anim.play(movieLabel, cb);
            MjGame.MjSoundManager.getInstance().playOperationSound(movieLabel);
        };
        CardMainView.prototype.showAccoutView = function (playerVO, goodInfos, stPai) {
            if (!this.accoutView) {
                this.accoutView = new MjGame.AccoutView();
            }
            this.accoutView.setData(playerVO, goodInfos, stPai);
            this.accoutView.show();
        };
        CardMainView.prototype.onHuangZhuang = function () {
            if (!this.accoutView) {
                this.accoutView = new MjGame.AccoutView();
            }
            this.accoutView.setData(null, null, null);
            this.accoutView.show();
        };
        CardMainView.prototype.onTimeOut = function () {
            if (this.curOperationPlayer && this.curOperationPlayer.playerId == this.myHandCardCm.player.playerId) {
                this.myHandCardCm.timeOut();
            }
        };
        CardMainView.prototype.updateCardViews = function () {
            var playerVOs = MjGame.RoomManager.getInstance().playerVOs;
            var selfPlayer = MjGame.PlayerManager.getInstance().selfPlayerVO;
            for (var i = 0; i < playerVOs.length; i++) {
                var player = playerVOs[i];
                var clientPos = MjGame.util.getClientRefPos(player.position, selfPlayer.position);
                var outCardCm = new MjGame.OutCardCm(this.outCardParentViewArr[clientPos], player, clientPos);
                var handCardcm = new MjGame.HandCardCm(this.handCardParentViewArr[clientPos], outCardCm, player, clientPos);
                handCardcm.updateHandCard(player.cmj, false);
                if (player.username == MjGame.PlayerManager.getInstance().selfUsername) {
                    this.myHandCardCm = handCardcm;
                }
                this.handCardCmArr.push(handCardcm);
            }
        };
        CardMainView.prototype.updatePlayerView = function () {
            var playerVOs = MjGame.RoomManager.getInstance().playerVOs;
            var selfPlayer = MjGame.PlayerManager.getInstance().selfPlayerVO;
            var playerView;
            var player;
            var clientPos;
            var maxPos = clientPos;
            for (var i = 0; i < playerVOs.length; i++) {
                player = playerVOs[i];
                clientPos = MjGame.util.getClientRefPos(player.position, selfPlayer.position);
                playerView = this.playerViewArr[clientPos];
                playerView.isReady.visible = false;
                playerView.headIcon.visible = true;
                playerView.playerName.text = player.username;
                playerView.dealerImg.visible = player.isDealer;
                playerView.visible = true;
                if (maxPos < clientPos) {
                    maxPos = clientPos;
                }
            }
            for (var index = (maxPos + 1); index < 4; index++) {
                playerView = this.playerViewArr[index];
                playerView.visible = false;
            }
        };
        return CardMainView;
    }());
    MjGame.CardMainView = CardMainView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CardMainView.js.map