/**
* name
*/
var MjGame;
(function (MjGame) {
    var HandCardCm = /** @class */ (function () {
        function HandCardCm() {
        }
        HandCardCm.prototype.createHandCard = function (cmj, parentView) {
            var index = 0;
            var startX = 10; //this.addChiPengGangPai(cmj);
            var card;
            var arr;
            for (var j = 0; j < MjGame.GlobalConfig.CARD_TYPE_NUM; j++) {
                arr = cmj.m_MyPAIVec[j];
                if (arr[0] > 0) {
                    for (var i = 1; i < MjGame.GlobalConfig.CARD_VALUE_NUM; i++) {
                        if (arr[i] > 0) {
                            for (var k = 0; k < arr[i]; k++) {
                                card = new MjGame.HandCard();
                                card.cardPos = MjGame.GlobalConfig.DOWN_POS;
                                card.setData(new MjGame.StPAI(j, i), startX, index);
                                parentView.addChild(card);
                                index++;
                            }
                        }
                    }
                }
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