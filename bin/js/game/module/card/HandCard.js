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
* 手牌
*/
var MjGame;
(function (MjGame) {
    var HandCard = /** @class */ (function (_super) {
        __extends(HandCard, _super);
        function HandCard() {
            var _this = _super.call(this) || this;
            _this.downResBasePath = 'game/handCard/';
            _this.rightResBasePath = "game/bgCard/right_card.png";
            _this.leftResBasePath = "game/bgCard/left_card.png";
            _this.upResBasePath = "game/bgCard/top_card.png";
            _this.cardPos = 0;
            return _this;
        }
        HandCard.prototype.setData = function (stPai, startX, index) {
            var resUrl = "";
            var offW = 0;
            if (this.cardPos == MjGame.GlobalConfig.DOWN_POS) {
                offW = 50;
                resUrl = this.downResBasePath + MjGame.GlobalConfig.GetPaiPrefixByType(stPai.m_Type) + stPai.m_Value + ".png";
            }
            else if (this.cardPos == MjGame.GlobalConfig.RIGHT_POS) {
                offW = 50;
                resUrl = this.rightResBasePath;
            }
            else if (this.cardPos == MjGame.GlobalConfig.UP_POS) {
                offW = 50;
                resUrl = this.upResBasePath;
            }
            else {
                offW = 50;
                resUrl = this.leftResBasePath;
            }
            this.card.loadImage(resUrl);
            this.card.pos(startX + offW * index, 50);
        };
        return HandCard;
    }(ui.game.view.HandCardUI));
    MjGame.HandCard = HandCard;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=HandCard.js.map