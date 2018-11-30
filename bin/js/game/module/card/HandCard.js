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
            _this.TOGGLE_DIST = 80;
            _this.downResBasePath = 'game/handCard/';
            _this.rightResBasePath = "game/bgCard/right_card.png";
            _this.leftResBasePath = "game/bgCard/left_card.png";
            _this.upResBasePath = "game/bgCard/top_card.png";
            _this.cardPos = 0;
            _this.cardOldPosY = 0;
            _this.endPositionY = -200;
            _this.index = 0;
            return _this;
        }
        HandCard.prototype.addClickHandler = function (handObj, callBack) {
            this.handObj = handObj;
            this.clickCallBack = callBack;
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        /**按下事件处理*/
        HandCard.prototype.onMouseDown = function (e) {
            //添加鼠标移到侦听
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
        };
        /**移到事件处理*/
        HandCard.prototype.onMouseMove = function (e) {
            this.y = Math.max(Math.min(this.mouseY, this.cardOldPosY), this.endPositionY);
            // this.y = Math.max(Math.min(Laya.stage.mouseY, this.endPosition), this.beginPosition);
        };
        /**抬起事件处理*/
        HandCard.prototype.onMouseUp = function (e) {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            // 滑动到目的地
            var dist = Math.abs(this.mouseY - this.cardOldPosY);
            var targetY = this.cardOldPosY;
            if (dist > this.TOGGLE_DIST && this.handObj.operationView.isCanDrag) {
                this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                this.clickCallBack.apply(this.handObj, [this]);
            }
            else {
                Laya.Tween.to(this, { y: targetY }, 100);
            }
        };
        HandCard.prototype.setData = function (stPai, startX, startY, index) {
            this.stPai = stPai;
            var resUrl = "";
            var offW = 0;
            var offH = 0;
            if (this.cardPos == MjGame.GlobalConfig.DOWN_POS) {
                offW = 55;
                offH = 0;
                resUrl = this.downResBasePath + MjGame.GlobalConfig.GetPaiPrefixByType(stPai.m_Type) + stPai.m_Value + ".png";
            }
            else if (this.cardPos == MjGame.GlobalConfig.RIGHT_POS) {
                offW = 0;
                offH = 27;
                resUrl = this.rightResBasePath;
            }
            else if (this.cardPos == MjGame.GlobalConfig.UP_POS) {
                offW = 37;
                offH = 0;
                resUrl = this.upResBasePath;
            }
            else {
                offW = 0;
                offH = 27;
                resUrl = this.leftResBasePath;
            }
            this.card.skin = resUrl;
            this.pos(startX + offW * index, startY + offH * index);
            this.cardOldPosY = this.card.y;
            this.index = index;
        };
        return HandCard;
    }(ui.game.view.HandCardUI));
    MjGame.HandCard = HandCard;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=HandCard.js.map