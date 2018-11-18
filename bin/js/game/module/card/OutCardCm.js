/**
* name
*/
var MjGame;
(function (MjGame) {
    var OutCardCm = /** @class */ (function () {
        function OutCardCm(parentView, cardPos) {
            this.parentView = parentView;
            this.cardPos = cardPos;
        }
        OutCardCm.prototype.createOutCard = function (cmj) {
            var startX = 0; //this.addChiPengGangPai(cmj);
            var startY = 0;
            var card;
            var stPai;
            for (var i = 0; i < cmj.m_OutPAIVec.length; i++) {
                stPai = cmj.m_OutPAIVec[i];
                card = new MjGame.OutCard();
                card.cardPos = this.cardPos;
                this.parentView.addChildAt(card, i);
                card.setData(stPai, startX, startY, i);
            }
        };
        return OutCardCm;
    }());
    MjGame.OutCardCm = OutCardCm;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=OutCardCm.js.map