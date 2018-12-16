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
    var AlertDialog = /** @class */ (function (_super) {
        __extends(AlertDialog, _super);
        function AlertDialog(content, closeCb) {
            var _this = _super.call(this) || this;
            _this.closeCb = closeCb;
            _this.initView(content);
            _this.closeBtn.on(Laya.Event.CLICK, _this, _this.onClose);
            return _this;
        }
        AlertDialog.prototype.initView = function (content) {
            this.contentLabel.text = content;
        };
        AlertDialog.prototype.onClose = function () {
            if (this.closeCb) {
                this.closeCb.call(null, []);
            }
            this.removeSelf();
        };
        return AlertDialog;
    }(ui.game.dialog.AlertDialogUI));
    MjGame.AlertDialog = AlertDialog;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=AlertDialog.js.map