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
var MjGame;
(function (MjGame) {
    var CardMainView = /** @class */ (function () {
        function CardMainView(deskScene) {
            this.deskScene = deskScene;
            this.handCardCmArr = [];
            this.outCardCmArr = [];
            this.handCardParentViewArr = [this.deskScene.downView, this.deskScene.rightView, this.deskScene.upView, this.deskScene.leftView];
            this.outCardParentViewArr = [this.deskScene.outDownView, this.deskScene.outRightView, this.deskScene.outUpView, this.deskScene.outLeftView];
            this.initView();
            this.addEvent();
        }
        CardMainView.prototype.initView = function () {
            this.anim = new MjGame.CMJAnim(this.deskScene, "game/anim/CMJ.ani");
            this.anim.pos(MjGame.GlobalConfig.DESK_WIDHT * 0.5, MjGame.GlobalConfig.DESK_HEIGHT * 0.5);
            this.updateCardViews();
        };
        CardMainView.prototype.addEvent = function () {
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.UPDATE_CUR_PLAYER, this, this.onUpdateCurPlayer);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.HU_PAI, this, this.onHuPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.ADD_PAI, this, this.onAddPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.DEL_PAI, this, this.onDelPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.CHI_PAI, this, this.onChiPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.PENG_PAI, this, this.onPengPai);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.GANG_PAI, this, this.onGangPai);
            // EventManager.getInstance().on(ClientHandEvent.UPDATE_DEL_PAI_FLAG_IMG_POS,onUpdateDelPaiFlagImgPos);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.OPERATION, this, this.onOperation);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.READY, this, this.onReady);
            MjGame.EventManager.getInstance().on(MjGame.ServerHandEvent.HUANG_ZHUANG, this, this.onHuangZhuang);
        };
        CardMainView.prototype.removeEvent = function () {
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.UPDATE_CUR_PLAYER, this, this.onUpdateCurPlayer);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.HU_PAI, this, this.onHuPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.ADD_PAI, this, this.onAddPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.DEL_PAI, this, this.onDelPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.CHI_PAI, this, this.onChiPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.PENG_PAI, this, this.onPengPai);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.GANG_PAI, this, this.onGangPai);
            // EventManager.getInstance().on(ClientHandEvent.UPDATE_DEL_PAI_FLAG_IMG_POS,onUpdateDelPaiFlagImgPos);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.OPERATION, this, this.onOperation);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.READY, this, this.onReady);
            MjGame.EventManager.getInstance().off(MjGame.ServerHandEvent.HUANG_ZHUANG, this, this.onHuangZhuang);
            Laya.timer.clearAll(this.deskScene);
        };
        CardMainView.prototype.onUpdateCurPlayer = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var pos = this.getClientPos(player);
            this.deskScene.updateCurPlayer(pos);
        };
        CardMainView.prototype.onAddPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stPai = data.stPai;
            MjGame.Log.print("add Pai------玩家的位置：" + player.position);
            if (this.myHandCardCm && player.playerId == this.myHandCardCm.player.playerId) {
                MjGame.CMJManager.getInstance().curOutPai = stPai;
                this.myHandCardCm.addPai(stPai);
            }
            else {
                var otherHandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm) {
                    otherHandCardCm.addPai(stPai);
                }
            }
        };
        CardMainView.prototype.onDelPai = function (data) {
            if (data.playerId != MjGame.PlayerManager.getInstance().selfPlayerVO.playerId) {
                var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
                var stPai = data.stPai;
                MjGame.Log.print("del Pai-----玩家的位置：" + player.position);
                MjGame.CMJManager.getInstance().curOutPai = stPai;
                var otherHandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm) {
                    otherHandCardCm.delPai(stPai);
                }
            }
        };
        CardMainView.prototype.onChiPai = function (data) {
            if (data.playerId != MjGame.PlayerManager.getInstance().selfPlayerVO.playerId) {
                var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
                var stChi = data.stChi;
                var otherHandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm) {
                    otherHandCardCm.doChiPaiServer(stChi);
                    this.playOperationEffect(MjGame.Constants.O_TYPE_CHI, otherHandCardCm);
                }
            }
        };
        CardMainView.prototype.onPengPai = function (data) {
            if (data.playerId != MjGame.PlayerManager.getInstance().selfPlayerVO.playerId) {
                var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
                var stPai = data.stPai;
                var otherHandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm) {
                    otherHandCardCm.doPengPai(stPai);
                    this.playOperationEffect(MjGame.Constants.O_TYPE_PENG, otherHandCardCm);
                }
            }
        };
        CardMainView.prototype.onGangPai = function (data) {
            if (data.playerId != MjGame.PlayerManager.getInstance().selfPlayerVO.playerId) {
                var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
                var stPai = data.stPai;
                var otherHandCardCm = this.getPlayerViewByVO(player);
                if (otherHandCardCm) {
                    otherHandCardCm.doGangPai(stPai);
                    this.playOperationEffect(MjGame.Constants.O_TYPE_GANG, otherHandCardCm);
                }
            }
        };
        CardMainView.prototype.onHuPai = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stGoodInfos = data.stGoodInfos;
            var stPai = data.stPai;
            var otherHandCardCm = this.getPlayerViewByVO(player);
            if (otherHandCardCm) {
                var self = this;
                // otherHandCardCm.doHuPai(stPai);
                this.playOperationEffect(MjGame.Constants.O_TYPE_HU, otherHandCardCm, function () {
                    if (self) {
                        var roomScene = new MjGame.RoomScene();
                        Laya.stage.addChild(roomScene);
                        self.removeEvent();
                        self.deskScene.removeSelf();
                        self.showAccoutView(player, stGoodInfos, stPai);
                    }
                });
            }
            this.showAccoutView(player, stGoodInfos, stPai);
            // _lastPaiFlagImg.visible = false;
        };
        CardMainView.prototype.onReady = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var otherHandCardCm = this.getPlayerViewByVO(player);
            if (otherHandCardCm) {
            }
        };
        CardMainView.prototype.getPlayerViewByVO = function (playerVO) {
            var otherHandCardCm;
            for (var i = 0; i < (MjGame.GlobalConfig.MAX_MEMBER_NUM - 1); i++) {
                otherHandCardCm = this.otherHandCardCms[i];
                if (otherHandCardCm.player.playerId == playerVO.playerId) {
                    return otherHandCardCm;
                }
            }
            return null;
        };
        CardMainView.prototype.onUpdateDelPaiFlagImgPos = function (gp) {
            // _lastPaiFlagImg.x=gp.x;
            // _lastPaiFlagImg.y=gp.y;
            // _lastPaiFlagImg.visible=true;
        };
        CardMainView.prototype.onOperation = function (data) {
            var player = MjGame.RoomManager.getInstance().getPlayer(data.playerId);
            var stPai = data.stPai;
            var isSelfHand = data.isSelfHand;
            // let oType:number = data.operations;
            var operations = data.operations;
            MjGame.CMJManager.getInstance().curOperationPai = stPai;
            this.myHandCardCm.showOpertaionView(operations);
            this.waitOperation();
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
                        this.myHandCardCm.doChiPai(Number(data), MjGame.CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_CHI, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendChiToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getChiPai());
                        this.waitDa();
                        break;
                    }
                case MjGame.ClientHandEvent.WAITING_OPERATION_PENG:
                    {
                        this.myHandCardCm.doPengPai(MjGame.CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_PENG, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendPengToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getPengPai());
                        this.waitDa();
                        break;
                    }
                case MjGame.ClientHandEvent.WAITING_OPERATION_GANG:
                    {
                        this.myHandCardCm.doGangPai(MjGame.CMJManager.getInstance().curOutPai);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_GANG, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendGangToServer(this.myHandCardCm.player, this.myHandCardCm.player.cmj.getGangPai());
                        this.waitDa();
                        break;
                    }
                case MjGame.ClientHandEvent.WAITING_OPERATION_HU:
                    {
                        MjGame.EventManager.getInstance().event(MjGame.BaseEvent.HU);
                        this.playOperationEffect(MjGame.Constants.O_TYPE_HU, this.myHandCardCm);
                        MjGame.ProxyManager.getInstance().gameProxy.sendHuToServer(this.myHandCardCm.player, this.curOperationPai);
                        break;
                    }
                case MjGame.ClientHandEvent.QUIT_OPERATION:
                    {
                        MjGame.ProxyManager.getInstance().gameProxy.sendQuitOperation(this.myHandCardCm.player, Number(data));
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            MjGame.CMJManager.getInstance().curOutPai = null;
        };
        CardMainView.prototype.waitDa = function () {
            MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.SHOW_OUT_BTN);
        };
        CardMainView.prototype.onWaitMyOutMJ = function (stPai) {
            console.log("del MY Pai");
            MjGame.EventManager.getInstance().off(MjGame.ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            this.myHandCardCm.delPai(stPai);
            MjGame.CMJManager.getInstance().curOutPai = stPai;
            MjGame.ProxyManager.getInstance().gameProxy.sendDelPai(this.myHandCardCm.player, stPai);
            // this.dealerPos = 1;
            // this.resume();
        };
        CardMainView.prototype.playOperationEffect = function (oType, playerView, cb) {
            var movieLabel;
            if (oType == MjGame.Constants.O_TYPE_HU) {
                movieLabel = "hu";
            }
            else if (oType == MjGame.Constants.O_TYPE_GANG) {
                movieLabel = "gang";
            }
            else if (oType == MjGame.Constants.O_TYPE_PENG) {
                movieLabel = "peng";
            }
            else if (oType == MjGame.Constants.O_TYPE_CHI) {
                movieLabel = "chi";
            }
            this.anim.play(movieLabel, this.onAnimComplete);
        };
        CardMainView.prototype.onAnimComplete = function () {
            // _oTypeImg.remove();
        };
        CardMainView.prototype.showAccoutView = function (playerVO, stGoodInfos, stPai) {
            if (!this.accoutView) {
                this.accoutView = new MjGame.AccoutView();
            }
            this.accoutView.setData(playerVO, stGoodInfos, stPai);
            this.accoutView.show();
        };
        CardMainView.prototype.onHuangZhuang = function () {
            if (!this.accoutView) {
                this.accoutView = new MjGame.AccoutView();
            }
            this.accoutView.setData(null, null, null);
            this.accoutView.show();
        };
        CardMainView.prototype.updateCardViews = function () {
            var playerVOs = MjGame.RoomManager.getInstance().playerVOs;
            this.otherHandCardCms = [];
            for (var i = 0; i < playerVOs.length; i++) {
                var player = playerVOs[i];
                var clientPos = this.getClientPos(player);
                var outCardCm = new MjGame.OutCardCm(this.outCardParentViewArr[clientPos], player, clientPos);
                var handCardcm = new MjGame.HandCardCm(this.handCardParentViewArr[clientPos], outCardCm, player, clientPos);
                handCardcm.updateHandCard(player.cmj, false);
                if (player.username == MjGame.PlayerManager.getInstance().selfUsername) {
                    this.myHandCardCm = handCardcm;
                }
                else {
                    this.otherHandCardCms.push(handCardcm);
                }
                this.handCardCmArr.push(handCardcm);
            }
            // SinglePlayManager.getInstance().startGame(myPlayer,otherPlayers)
        };
        CardMainView.prototype.getClientPos = function (player) {
            var selfPlayer = MjGame.PlayerManager.getInstance().selfPlayerVO;
            return MjGame.util.getClientRefPos(player.position, selfPlayer.position);
        };
        return CardMainView;
    }());
    MjGame.CardMainView = CardMainView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CardMainView.js.map