var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var MjGame;
(function (MjGame) {
    var AccoutView = /** @class */ (function (_super) {
        __extends(AccoutView, _super);
        function AccoutView() {
            var _this = _super.call(this) || this;
            _this.closeBtn.on(Laya.Event.CLICK, _this, _this.onClose);
            _this.continueBtn.on(Laya.Event.CLICK, _this, _this.onContinue);
            return _this;
        }
        AccoutView.prototype.onClose = function () {
            this.removeSelf();
        };
        AccoutView.prototype.onContinue = function () {
            this.onClose();
            MjGame.ProxyManager.getInstance().gameProxy.sendReadyToServer(MjGame.PlayerManager.getInstance().selfPlayerVO);
        };
        AccoutView.prototype.setData = function (player, stGoodInfos, stPai) {
            if (player) {
                var str = "";
                var count = 0;
                for (var i = 0; i < stGoodInfos.length; i++) {
                    var goodInfo = stGoodInfos[i];
                    str = str + goodInfo.m_GoodName;
                    count = count + goodInfo.m_GoodValue;
                    if (i < stGoodInfos.length - 1) {
                        str = str + "+";
                    }
                }
                str = str + ":" + count + "番";
                this.descLabel.text = player.username + "           " + str;
                this.updateHandCard(player.cmj, true);
            }
            else {
                this.descLabel.text = "黄庄了！！";
                this.contentView.removeChildren();
            }
        };
        AccoutView.prototype.updateHandCard = function (cmj, isShowLast) {
            if (isShowLast === void 0) { isShowLast = true; }
            this.contentView.removeChildren();
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
                            if (isShowLast && cmj.m_LastPAI.m_Type == tempStPai.m_Type && cmj.m_LastPAI.m_Value == tempStPai.m_Value) {
                                lastStPai = cmj.m_LastPAI;
                                isShowLast = false;
                                continue;
                            }
                            card = new MjGame.HandCard();
                            card.cardPos = MjGame.GlobalConfig.DOWN_POS;
                            this.contentView.addChild(card);
                            card.setData(tempStPai, startX, startY, index);
                            index++;
                        }
                    }
                }
            }
            if (lastStPai) {
                this.addLastPai(lastStPai, startX, startY, index);
            }
        };
        AccoutView.prototype.addLastPai = function (lastStPai, startX, startY, index) {
            var card = new MjGame.HandCard();
            card.cardPos = MjGame.GlobalConfig.DOWN_POS;
            this.contentView.addChild(card);
            card.setData(lastStPai, startX + 10, startY, index);
        };
        AccoutView.prototype.addChiPengGangPai = function (t_MyPlayer) {
            var card;
            var tempPai;
            var startX = 0;
            var startY = 0;
            var outPaiArr = new Array();
            for (var i = 0; i < t_MyPlayer.m_ChiPAIVec.length; i++) {
                var stChi = t_MyPlayer.m_ChiPAIVec[i];
                for (var i2 = 0; i2 < 3; i2++) {
                    tempPai = MjGame.util.getByChiPai(stChi, i2 + 1);
                    outPaiArr.push(tempPai);
                }
            }
            for (var j = 0; j < t_MyPlayer.m_PengPAIVec.length; j++) {
                tempPai = t_MyPlayer.m_PengPAIVec[j];
                for (var i3 = 0; i3 < 3; i3++) {
                    outPaiArr.push(tempPai);
                }
            }
            for (var k = 0; k < t_MyPlayer.m_GangPAIVec.length; k++) {
                tempPai = t_MyPlayer.m_PengPAIVec[j];
                for (var i4 = 0; i4 < 4; i4++) {
                    outPaiArr.push(tempPai);
                }
            }
            for (var index = 0; index < outPaiArr.length; index++) {
                tempPai = outPaiArr[index];
                card = new MjGame.OutCard(1);
                card.cardPos = MjGame.GlobalConfig.DOWN_POS;
                this.contentView.addChild(card);
                card.setData(tempPai, startX, startY, index);
            }
            if (card) {
                startX = card.startX;
                startY = card.startY;
            }
            var offX = 0;
            var offY = 0;
            offX = 30;
            return { startX: startX + offX, startY: startY + offY };
        };
        return AccoutView;
    }(ui.game.dialog.AccountDialogUI));
    MjGame.AccoutView = AccoutView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=AccoutView.js.map