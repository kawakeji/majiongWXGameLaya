/**
* name
*/
var MjGame;
(function (MjGame) {
    var AlertManager = /** @class */ (function () {
        function AlertManager() {
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        AlertManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new AlertManager();
            }
            return this.instance;
        };
        AlertManager.prototype.showAlert = function (msg, closeCb) {
            var alert = new MjGame.AlertDialog(msg, closeCb);
            alert.show();
        };
        return AlertManager;
    }());
    MjGame.AlertManager = AlertManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=AlertManager.js.map