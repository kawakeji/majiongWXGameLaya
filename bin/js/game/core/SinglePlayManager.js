/**
* name
*/
var MjGame;
(function (MjGame) {
    var CMJ = MjGame.CMJ;
    var ClientHandEvent = MjGame.ClientHandEvent;
    var SinglePlayManager = /** @class */ (function () {
        function SinglePlayManager() {
            this.dealerPos = 0;
            this.otherPlayers = [];
            this.dealerPos = 0;
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        SinglePlayManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new SinglePlayManager();
            }
            return this.instance;
        };
        SinglePlayManager.prototype.createPlayers = function () {
            var playerVOs = [];
            for (var index = 0; index < MjGame.GlobalConfig.MAX_MEMBER_NUM; index++) {
                var cmj = new CMJ();
                var playerVO = new MjGame.PlayerVO();
                playerVO.cmj = cmj;
                playerVO.username = 'pos' + index;
                playerVO.position = index;
                playerVO.roomId = 10001;
                this.distributeCard(cmj);
                playerVOs[index] = playerVO;
            }
            return playerVOs;
        };
        SinglePlayManager.prototype.distributeCard = function (cmj) {
            for (var i = 0; i < MjGame.GlobalConfig.HAND_CARD_NUM; i++) {
                cmj.addPai(MjGame.CMJManager.getInstance().getAPai().m_NewPai);
            }
        };
        SinglePlayManager.prototype.startGame = function (myPlayer, otherPlayers) {
            this.myPlayer = myPlayer;
            this.otherPlayers = otherPlayers;
            Laya.timer.loop(200, this, this.onLoop);
        };
        SinglePlayManager.prototype.onLoop = function () {
            //打牌循环  
            var t_Ting = false;
            var t_Score = 0;
            //其它玩家起牌出牌  
            var aPai = MjGame.CMJManager.getInstance().getAPai();
            if (aPai.m_NewPai == null) {
                console.log("黄庄了 ");
                this.pause();
                return;
            }
            var curPlayer = this.getNextPlayer();
            console.log("当前玩家位置：" + curPlayer.cardPos);
            if (curPlayer.cardPos == this.myPlayer.cardPos) {
                console.log("add MY Pai");
                curPlayer.addPai(aPai.m_NewPai);
                if (curPlayer.cmj.checkHU(null)) {
                    this.waitHu();
                }
                else {
                    if (this.myPlayer.cmj.checkGangPai(aPai.m_NewPai)) {
                        this.waitGang();
                    }
                    else {
                        this.waitDa();
                    }
                }
            }
            else {
                console.log("add Other Pai" + curPlayer.cardPos);
                curPlayer.addPai(aPai.m_NewPai);
                console.log("del Other Pai" + curPlayer.cardPos);
                var outPai = curPlayer.cmj.getPaiByPos(1);
                curPlayer.delPai(outPai);
                MjGame.CMJManager.getInstance().curOutPai = outPai;
                if (this.myPlayer.checkHU(outPai)) {
                    this.waitHu();
                }
                if (curPlayer.cardPos == MjGame.GlobalConfig.LEFT_POS) {
                    //检查吃牌  
                    if (this.myPlayer.checkChiPai(outPai)) {
                        this.waitChi();
                    }
                }
                //检查碰牌  
                if (this.myPlayer.checkPengPai(outPai)) {
                    this.waitPeng();
                }
                //检查杠牌  
                if (this.myPlayer.checkGangPai(outPai, false)) {
                    this.waitGang();
                }
            }
        };
        SinglePlayManager.prototype.waitDa = function () {
            MjGame.EventManager.getInstance().on(ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            MjGame.EventManager.getInstance().event(ClientHandEvent.SHOW_OUT_BTN);
            this.pause();
        };
        SinglePlayManager.prototype.waitHu = function () {
            MjGame.EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_HU, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            this.pause();
        };
        SinglePlayManager.prototype.waitChi = function () {
            MjGame.EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_CHI, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            this.pause();
        };
        SinglePlayManager.prototype.waitPeng = function () {
            MjGame.EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_PENG, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            this.pause();
        };
        SinglePlayManager.prototype.waitGang = function () {
            MjGame.EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_GANG, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            this.pause();
        };
        SinglePlayManager.prototype.resume = function () {
            Laya.timer.loop(200, this, this.onLoop);
        };
        SinglePlayManager.prototype.pause = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        SinglePlayManager.prototype.onWaitMyOperation = function (type, data) {
            console.log("my operation:" + type);
            MjGame.EventManager.getInstance().off(type, this, this.onWaitMyOperation);
            MjGame.EventManager.getInstance().off(ClientHandEvent.QUIT_OPERATION, this, this.onWaitMyOperation);
            switch (type) {
                case ClientHandEvent.WAITING_OPERATION_CHI:
                    {
                        this.myPlayer.doChiPai(data, MjGame.CMJManager.getInstance().curOutPai);
                        this.waitDa();
                        break;
                    }
                case ClientHandEvent.WAITING_OPERATION_PENG:
                    {
                        this.myPlayer.doPengPai(MjGame.CMJManager.getInstance().curOutPai);
                        this.waitDa();
                        break;
                    }
                case ClientHandEvent.WAITING_OPERATION_GANG:
                    {
                        this.myPlayer.doGangPai(MjGame.CMJManager.getInstance().curOutPai);
                        this.waitDa();
                        break;
                    }
                case ClientHandEvent.WAITING_OPERATION_HU:
                    {
                        MjGame.EventManager.getInstance().event(MjGame.BaseEvent.HU);
                        break;
                    }
                case ClientHandEvent.QUIT_OPERATION:
                    {
                        this.resume();
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            MjGame.CMJManager.getInstance().curOutPai = null;
        };
        SinglePlayManager.prototype.onWaitMyOutMJ = function (data) {
            console.log("del MY Pai");
            MjGame.EventManager.getInstance().off(ClientHandEvent.WAITING_OUT_MJ, this, this.onWaitMyOutMJ);
            this.myPlayer.delPai(data);
            MjGame.CMJManager.getInstance().curOutPai = data;
            this.dealerPos = 1;
            this.resume();
        };
        SinglePlayManager.prototype.getNextPlayer = function () {
            var pos = this.dealerPos % 4;
            this.dealerPos++;
            if (pos == 0) {
                return this.myPlayer;
            }
            else {
                return this.otherPlayers[pos - 1];
            }
        };
        return SinglePlayManager;
    }());
    MjGame.SinglePlayManager = SinglePlayManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=SinglePlayManager.js.map