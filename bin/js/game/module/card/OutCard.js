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
/*
* 打出去牌视图
*/
var MjGame;
(function (MjGame) {
    var OutCard = /** @class */ (function (_super) {
        __extends(OutCard, _super);
        function OutCard() {
            var _this = _super.call(this) || this;
            _this.downResBasePath = 'game/outCard/buttom_top/';
            _this.rightResBasePath = "game/outCard/right/";
            _this.upResBasePath = "game/outCard/buttom_top/";
            _this.leftResBasePath = "game/outCard/left/";
            _this.resBasePathArr = [];
            _this.cardPos = 0;
            _this.resBasePathArr = [_this.downResBasePath, _this.rightResBasePath, _this.upResBasePath, _this.leftResBasePath];
            return _this;
        }
        OutCard.prototype.setData = function (stPai, startX, startY, index) {
            var resUrl = this.resBasePathArr[this.cardPos];
            resUrl = resUrl + MjGame.GlobalConfig.GetPaiPrefixByType(stPai.m_Type) + stPai.m_Value + ".png";
            this.card.loadImage(resUrl);
            this.setCardPos(startX, startY, index);
        };
        OutCard.prototype.setCardPos = function (startX, startY, index) {
            var offW = 0;
            var offH = 0;
            var rowInx = 0;
            if (this.cardPos == MjGame.GlobalConfig.DOWN_POS) {
                rowInx = Math.floor(index / 15);
                index = Math.floor(index % 15);
                offW = 55;
                offH = 0;
                this.scale(0.65, 0.65);
                if (rowInx >= 1) {
                    startY = startY - 61 * rowInx;
                }
                startX = startX + offW * index;
                this.parent.setChildIndex(this, index);
            }
            else if (this.cardPos == MjGame.GlobalConfig.RIGHT_POS) {
                rowInx = Math.floor(index / 9);
                index = Math.floor(index % 9);
                offW = 0;
                offH = -27;
                if (rowInx >= 1) {
                    startX = startX - 43 * rowInx;
                }
                startY = startY + offH * index;
                var childNum = this.parent.numChildren;
                this.parent.setChildIndex(this, childNum - index - 1);
            }
            else if (this.cardPos == MjGame.GlobalConfig.UP_POS) {
                rowInx = Math.floor(index / 15);
                index = Math.floor(index % 15);
                offW = -55;
                offH = 0;
                this.scale(0.65, 0.65);
                if (rowInx >= 1) {
                    startY = startY + 61 * rowInx;
                }
                startX = startX + offW * index;
            }
            else {
                rowInx = Math.floor(index / 9);
                index = Math.floor(index % 9);
                offW = 0;
                offH = 27;
                if (rowInx >= 1) {
                    startX = startX + 43 * rowInx;
                }
                startY = startY + offH * index;
            }
            this.card.pos(startX, startY);
        };
        return OutCard;
    }(ui.game.view.OutCardUI));
    MjGame.OutCard = OutCard;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=OutCard.js.map