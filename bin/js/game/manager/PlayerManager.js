/**
* name
*/
var MjGame;
(function (MjGame) {
    var PlayerManager = /** @class */ (function () {
        function PlayerManager() {
        }
        PlayerManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new PlayerManager();
            }
            return this.instance;
        };
        Object.defineProperty(PlayerManager.prototype, "selfUsername", {
            get: function () {
                return this._selfUsername;
            },
            set: function (username) {
                this._selfUsername = username;
            },
            enumerable: true,
            configurable: true
        });
        return PlayerManager;
    }());
    MjGame.PlayerManager = PlayerManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=PlayerManager.js.map