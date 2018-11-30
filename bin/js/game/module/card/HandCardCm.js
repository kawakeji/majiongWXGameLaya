/**
* name
*/
var MjGame;
(function (MjGame) {
    var HandCardCm = /** @class */ (function () {
        function HandCardCm(parentView, outCardCm, cardPos) {
            this.parentView = parentView;
            this.outCardCm = outCardCm;
            this.cardPos = cardPos;
            if (cardPos == MjGame.GlobalConfig.DOWN_POS) {
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
            this.updateHandCard(this.cmj, false);
        };
        HandCardCm.prototype.cleanUp = function () {
            // this.cmj.cleanUp();
        };
        HandCardCm.prototype.checkHU = function (pai) {
            var returnVal = this.cmj.checkHU(pai);
            this.operationView.showHuBtn(returnVal);
            return returnVal;
        };
        HandCardCm.prototype.checkChiPai = function (pai) {
            var returnVal = this.cmj.checkChiPai(pai);
            this.operationView.showChiBtn(returnVal);
            return returnVal;
        };
        HandCardCm.prototype.checkPengPai = function (pai) {
            var returnVal = this.cmj.checkPengPai(pai);
            this.operationView.showPengBtn(returnVal);
            return returnVal;
        };
        HandCardCm.prototype.checkGangPai = function (pai, isSelfHad) {
            if (isSelfHad === void 0) { isSelfHad = true; }
            var returnVal = this.cmj.checkGangPai(pai, isSelfHad);
            this.operationView.showGangBtn(returnVal);
            return returnVal;
        };
        HandCardCm.prototype.doChiPai = function (idx, curOutPai) {
            var flag = this.cmj.doChiPai(idx, curOutPai);
            this.updateHandCard(this.cmj);
            return flag;
        };
        HandCardCm.prototype.doGangPai = function (curOutPai) {
            var flag = this.cmj.doGangPai(curOutPai);
            this.updateHandCard(this.cmj);
            return flag;
        };
        HandCardCm.prototype.doPengPai = function (curOutPai) {
            var flag = this.cmj.doPengPai(curOutPai);
            this.updateHandCard(this.cmj);
            return flag;
        };
        HandCardCm.prototype.updateHandCard = function (cmj, isShowLast) {
            if (isShowLast === void 0) { isShowLast = true; }
            this.cmj = cmj;
            this.parentView.removeChildren();
            var index = 0;
            var startX = 0; //this.addChiPengGangPai(cmj);
            var startY = 0;
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
                            if (isShowLast && this.cardPos == MjGame.GlobalConfig.DOWN_POS && cmj.m_LastPAI.m_Type == tempStPai.m_Type && cmj.m_LastPAI.m_Value == tempStPai.m_Value) {
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
                                card.addClickHandler(this, this.onBtnClick);
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
            card.addClickHandler(this, this.onBtnClick);
            // card.on(Laya.Event.CLICK, this, this.onBtnClick); 
        };
        HandCardCm.prototype.updateOutCard = function (cmj) {
            this.outCardCm.updateOutCard(cmj);
        };
        HandCardCm.prototype.onBtnClick = function (card) {
            console.log("onBtnclick");
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OUT_MJ, [card.stPai]);
            // var card = <HandCard><any>e.currentTarget;
            // if (this.curClickCard != card && this.curClickCard)
            // {
            //     this.curClickCard.pos(this.curClickCard.x,this.curClickCard.cardOldPosY);
            // }
            // console.log("onBtnclick",card.index);
            // //手动控制组件属性
            // if (card.y == card.cardOldPosY)
            // {
            //     card.pos(card.x,card.cardOldPosY-20);
            //     this.curClickCard = card;
            // }
            // else
            // {
            //     card.pos(card.x,card.cardOldPosY);
            //     this.curClickCard = null;
            // }
        };
        HandCardCm.prototype.onBtnClick2 = function (e) {
            console.log("onBtnclick", e);
            var card = e.currentTarget;
            if (this.curClickCard != card && this.curClickCard) {
                this.curClickCard.pos(this.curClickCard.x, this.curClickCard.cardOldPosY);
            }
            console.log("onBtnclick", card.index);
            //手动控制组件属性
            if (card.y == card.cardOldPosY) {
                card.pos(card.x, card.cardOldPosY - 20);
                this.curClickCard = card;
            }
            else {
                card.pos(card.x, card.cardOldPosY);
                this.curClickCard = null;
            }
        };
        HandCardCm.prototype.addChiPengGangPai = function (t_MyPlayer) {
            var card;
            var index;
            for (var i = 0; i < t_MyPlayer.m_ChiPAIVec.length; i++) {
                var stChi = t_MyPlayer.m_ChiPAIVec[i];
                for (var i2 = 1; i2 <= 3; i2++) {
                    card = new MjGame.OutCard();
                    // setOutCardPos(card,index);
                    // card.dataSource = stChi.getPai(i2);
                    // _box.addChild(card);
                    index++;
                }
            }
            for (var j = 0; j < t_MyPlayer.m_PengPAIVec.length; j++) {
                for (var i3 = 0; i3 < 3; i3++) {
                    card = new MjGame.OutCard();
                    // setOutCardPos(card,index);
                    // card.dataSource = t_MyPlayer.m_PengPAIVec[j];
                    // _box.addChild(card);
                    index++;
                }
            }
            for (var k = 0; k < t_MyPlayer.m_GangPAIVec.length; k++) {
                for (var i4 = 0; i4 < 4; i4++) {
                    card = new MjGame.OutCard();
                    // card.dataSource = t_MyPlayer.m_GangPAIVec[k];
                    // setOutCardPos(card,index);
                    // _box.addChild(card);
                    index++;
                }
            }
            if (t_MyPlayer.m_HuPAIVec.length > 0) {
                index++;
            }
            for (k = 0; k < t_MyPlayer.m_HuPAIVec.length; k++) {
                card = new MjGame.OutCard();
                // card.dataSource = t_MyPlayer.m_HuPAIVec[k];
                // setOutCardPos(card,index);
                // _box.addChild(card);
                index++;
            }
            return index * (card ? card.width : 0);
        };
        return HandCardCm;
    }());
    MjGame.HandCardCm = HandCardCm;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=HandCardCm.js.map