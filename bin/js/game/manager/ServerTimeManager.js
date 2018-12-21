/**
* name
*/
var MjGame;
(function (MjGame) {
    var ServerTimeManager = /** @class */ (function () {
        function ServerTimeManager() {
            this.curServerTime = 0;
            this.dateDiff = 0;
        }
        ServerTimeManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new ServerTimeManager();
            }
            return this.instance;
        };
        ServerTimeManager.prototype.syncServerTime = function () {
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.CMJ_TIMESYNC, this.onServerTime);
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_TIMESYNC);
        };
        ServerTimeManager.prototype.onServerTime = function (data) {
            this.curServerTime = data.curServerTime;
            this.dateDiff = new Date().getTime() - this.curServerTime;
        };
        ServerTimeManager.prototype.getCountDown = function (endTime) {
            return endTime - new Date().getTime() + this.dateDiff;
        };
        return ServerTimeManager;
    }());
    MjGame.ServerTimeManager = ServerTimeManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=ServerTimeManager.js.map