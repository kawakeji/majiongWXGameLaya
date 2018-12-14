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
/*
* 游戏桌面场景;
*/
var MjGame;
(function (MjGame) {
    var DeskScene = /** @class */ (function (_super) {
        __extends(DeskScene, _super);
        function DeskScene() {
            var _this = _super.call(this) || this;
            _this.ROUND_TIME = 30;
            _this.leftTime = 30;
            _this.selectedDirectionArr = [_this.clockUI.downSelected, _this.clockUI.rightSelected, _this.clockUI.upSelected, _this.clockUI.leftSelected];
            _this.initView();
            _this.createCardMainView();
            _this.clockUI.timeLabel;
            _this.scale(0.3, 0.3);
            return _this;
        }
        DeskScene.prototype.initView = function () {
            for (var index = 0; index < this.selectedDirectionArr.length; index++) {
                var img = this.selectedDirectionArr[index];
                img.visible = false;
            }
        };
        DeskScene.prototype.createCardMainView = function () {
            this.cardMainView = new MjGame.CardMainView(this);
            var hunP = MjGame.CMJManager.getInstance().getHunPai();
            if (hunP) {
                this.hunPai.text = MjGame.Log.traceSinglePai(hunP.m_Type, hunP.m_Value);
            }
        };
        DeskScene.prototype.updateCurPlayer = function (pos) {
            this.leftTime = this.ROUND_TIME;
            if (this.lastSelected) {
                this.lastSelected.visible = false;
            }
            this.selectedDirectionArr[pos].visible = true;
            this.lastSelected = this.selectedDirectionArr[pos];
            Laya.timer.loop(1000, this, this.updateClock);
        };
        DeskScene.prototype.updateClock = function () {
            this.leftTime = this.leftTime - 1;
            if (this.leftTime <= 0) {
                this.leftTime = 0;
            }
            this.clockUI.timeLabel.value = this.leftTime + "";
        };
        return DeskScene;
    }(ui.game.scene.DeskSceneUI));
    MjGame.DeskScene = DeskScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=DeskScene.js.map