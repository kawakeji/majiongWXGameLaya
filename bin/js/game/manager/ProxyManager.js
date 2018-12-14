/**
* name
*/
var MjGame;
(function (MjGame) {
    var ProxyManager = /** @class */ (function () {
        function ProxyManager() {
            this.initProxy();
        }
        ProxyManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new ProxyManager();
            }
            return this.instance;
        };
        ProxyManager.prototype.initProxy = function () {
            this.hallProxy = new MjGame.HallProxy();
            this.roomProxy = new MjGame.RoomProxy();
            this.gameProxy = new MjGame.GameProxy();
        };
        return ProxyManager;
    }());
    MjGame.ProxyManager = ProxyManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=ProxyManager.js.map