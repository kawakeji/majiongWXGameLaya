var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
    var CHICards = /** @class */ (function (_super) {
        __extends(CHICards, _super);
        function CHICards() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            return _this;
        }
        CHICards.prototype.setData = function (stChi) {
            this.stChi = stChi;
            if (this.stChi) {
                this.addTempChiPaiView(this.stChi);
            }
        };
        CHICards.prototype.addTempChiPaiView = function (tempStChi) {
            var tempCard;
            var tempPai;
            var nWidth = 0;
            var nHeight = 0;
            for (var j = 1; j <= 3; j++) {
                tempPai = tempStChi.getPai(j);
                tempCard = new MjGame.OutCard();
                tempCard.cardPos = MjGame.GlobalConfig.DOWN_POS;
                this.addChild(tempCard);
                tempCard.setData(tempPai, 0, 0, j);
                nWidth = nWidth + tempCard.width;
                nHeight = tempCard.height;
                // tempCard.x = (j -1) * (tempCard.width - 5);               
            }
            console.log("addTempChiPaiView", nWidth, nHeight);
            this.width = nWidth;
            this.height = nHeight;
        };
        CHICards.prototype.getStChi = function () {
            return this.stChi;
        };
        return CHICards;
    }(Laya.Box));
    MjGame.CHICards = CHICards;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CHICards.js.map