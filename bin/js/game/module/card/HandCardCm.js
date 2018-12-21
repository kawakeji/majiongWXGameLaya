/**
* name
*/
var MjGame;
(function (MjGame) {
    var HandCardCm = /** @class */ (function () {
        function HandCardCm(parentView, outCardCm, player, cardPos) {
            this.parentView = parentView;
            this.outCardCm = outCardCm;
            this.player = player;
            this.cardPos = cardPos;
            if (this.cardPos == MjGame.GlobalConfig.DOWN_POS) {
                this.operationView = new MjGame.OperationView();
                this.operationView.pos(300, 420);
                parentView.parent.addChild(this.operationView);
                this.operationView.setHandCardCm(this);
                MjGame.EventManager.getInstance().on(MjGame.ClientHandEvent.SHOW_OUT_BTN, this, this.showOutBtn);
            }
        }
        HandCardCm.prototype.showOutBtn = function () {
            this.operationView.showOutBtn();
        };
        HandCardCm.prototype.clearCurCard = function () {
            if (this.curClickCard) {
                this.curClickCard.pos(this.curClickCard.x, this.curClickCard.cardOldPosY);
            }
            this.curClickCard = null;
        };
        HandCardCm.prototype.addPai = function (pai) {
            this.cmj.addPai(pai);
            this.updateHandCard(this.cmj);
        };
        HandCardCm.prototype.delPai = function (pai) {
            this.cmj.delPai(pai);
            MjGame.MjSoundManager.getInstance().playOutCardSound(pai);
            this.updateHandCard(this.cmj, false);
        };
        HandCardCm.prototype.cleanUp = function () {
            // this.cmj.cleanUp();
        };
        HandCardCm.prototype.showOpertaionView = function (operations) {
            this.operationView.showView(operations);
        };
        HandCardCm.prototype.doChiPaiServer = function (stChi) {
            this.cmj.doChiPaiServer(stChi);
            this.updateHandCard(this.cmj);
            return true;
        };
        HandCardCm.prototype.doPengPaiServer = function (stPeng) {
            this.cmj.doPengPaiServer(stPeng);
            this.updateHandCard(this.cmj);
            return true;
        };
        HandCardCm.prototype.doGangPaiServer = function (stGang) {
            this.cmj.doGangPaiServer(stGang);
            this.updateHandCard(this.cmj);
            return true;
        };
        HandCardCm.prototype.timeOut = function () {
            if (this.operationView.isCanDrag) {
                var firstPai = this.cmj.getPaiByPos(1);
                MjGame.MjSoundManager.getInstance().playCommonSound(MjGame.SoundType.OUT_CARD);
                MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OUT_MJ, [firstPai]);
            }
            else {
                this.operationView.sendQuitOperation();
            }
        };
        HandCardCm.prototype.updateHandCard = function (cmj, isShowLast) {
            if (isShowLast === void 0) { isShowLast = true; }
            this.cmj = cmj;
            this.parentView.removeChildren();
            var index = 0;
            var ret = this.addChiPengGangPai(cmj);
            var startX = ret.startX;
            var startY = ret.startY;
            var card;
            var arr;
            var tempStPai;
            var lastStPai;
            for (var j = 0; j < MjGame.GlobalConfig.CARD_TYPE_NUM; j++) {
                arr = cmj.m_MyPAIVec[j];
                if (arr[0] > 0) {
                    for (var i = 1; i < MjGame.GlobalConfig.CARD_VALUE_NUM; i++) {
                        for (var k = 0; k < arr[i]; k++) {
                            tempStPai = new MjGame.StPAI(j, i);
                            if (isShowLast && this.cardPos == MjGame.GlobalConfig.DOWN_POS && cmj.m_LastPAI &&
                                cmj.m_LastPAI.m_Type == tempStPai.m_Type && cmj.m_LastPAI.m_Value == tempStPai.m_Value) {
                                lastStPai = cmj.m_LastPAI;
                                isShowLast = false;
                                continue;
                            }
                            card = new MjGame.HandCard();
                            card.cardPos = this.cardPos;
                            this.parentView.addChild(card);
                            card.setData(tempStPai, startX, startY, index);
                            if (this.cardPos == MjGame.GlobalConfig.DOWN_POS) {
                                // card.addClickHandler(this,this.on)
                                card.addClickHandler(this, this.onCardClick);
                                // card.on(Laya.Event.CLICK, this, this.onBtnClick); 
                            }
                            index++;
                        }
                    }
                }
            }
            if (lastStPai) {
                this.addLastPai(lastStPai, startX, startY, index);
            }
            this.updateOutCard(cmj);
            this.clearCurCard();
        };
        HandCardCm.prototype.addLastPai = function (lastStPai, startX, startY, index) {
            var card = new MjGame.HandCard();
            card.cardPos = this.cardPos;
            this.parentView.addChild(card);
            card.setData(lastStPai, startX + 10, startY, index);
            card.addClickHandler(this, this.onCardClick);
        };
        HandCardCm.prototype.updateOutCard = function (cmj) {
            this.outCardCm.updateOutCard(cmj);
        };
        HandCardCm.prototype.onCardClick = function (card) {
            this.operationView.isCanDrag = false;
            MjGame.MjSoundManager.getInstance().playCommonSound(MjGame.SoundType.OUT_CARD);
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OUT_MJ, [card.stPai]);
        };
        HandCardCm.prototype.getLastOutCard = function () {
            return this.outCardCm.getLastOutCard();
        };
        HandCardCm.prototype.addChiPengGangPai = function (t_MyPlayer) {
            var card;
            var tempPai;
            var startX = 0;
            var startY = 0;
            var outPaiArr = new Array();
            for (var i = 0; i < t_MyPlayer.m_ChiPAIVec.length; i++) {
                var stChi = t_MyPlayer.m_ChiPAIVec[i];
                if (stChi) {
                    for (var i2 = 0; i2 < 3; i2++) {
                        tempPai = MjGame.util.getByChiPai(stChi, i2 + 1);
                        if (tempPai) {
                            outPaiArr.push(tempPai);
                        }
                    }
                }
            }
            for (var j = 0; j < t_MyPlayer.m_PengPAIVec.length; j++) {
                tempPai = t_MyPlayer.m_PengPAIVec[j].m_stPai;
                if (tempPai) {
                    for (var i3 = 0; i3 < 3; i3++) {
                        outPaiArr.push(tempPai);
                    }
                }
            }
            for (var k = 0; k < t_MyPlayer.m_GangPAIVec.length; k++) {
                tempPai = t_MyPlayer.m_GangPAIVec[k].m_stPai;
                if (tempPai) {
                    for (var i4 = 0; i4 < 4; i4++) {
                        outPaiArr.push(tempPai);
                    }
                }
            }
            for (var index = 0; index < outPaiArr.length; index++) {
                tempPai = outPaiArr[index];
                card = new MjGame.OutCard(1);
                card.cardPos = this.cardPos;
                this.parentView.addChild(card);
                card.setData(tempPai, startX, startY, index);
            }
            if (card) {
                startX = card.startX;
                startY = card.startY;
            }
            var offX = 0;
            var offY = 0;
            if (this.cardPos == MjGame.GlobalConfig.DOWN_POS) {
                offX = 30;
            }
            else if (this.cardPos == MjGame.GlobalConfig.RIGHT_POS) {
                offY = -30;
            }
            else if (this.cardPos == MjGame.GlobalConfig.UP_POS) {
                offX = -30;
            }
            else {
                offY = 30;
            }
            return { startX: startX + offX, startY: startY + offY };
        };
        return HandCardCm;
    }());
    MjGame.HandCardCm = HandCardCm;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=HandCardCm.js.map