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
    var OperationView = /** @class */ (function (_super) {
        __extends(OperationView, _super);
        function OperationView() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        OperationView.prototype.init = function () {
            this.viewArr = [this.chiBtn, this.pengBtn, this.gangBtn, this.huBtn, this.quitBtn];
        };
        OperationView.prototype.refreshPos = function () {
            var btn;
            var oX;
            for (var i = 0; i < this.viewArr.length; i++) {
                btn = this.viewArr[i];
                if (btn.visible == true) {
                    btn.x = oX;
                    oX += btn.width + 5;
                }
            }
        };
        return OperationView;
    }(ui.game.view.OperationUI));
    MjGame.OperationView = OperationView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=OperationView.js.map