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
/**
* name
*/
var MjGame;
(function (MjGame) {
    var PlayerProxy = /** @class */ (function (_super) {
        __extends(PlayerProxy, _super);
        function PlayerProxy() {
            var _this = _super.call(this) || this;
            _this.addProtos();
            return _this;
        }
        PlayerProxy.prototype.addProtos = function () {
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_ALL_PLAYER_CMJ, function (data) {
                if (data) {
                    for (var playerId in data) {
                        if (data.hasOwnProperty(playerId)) {
                            var player = MjGame.RoomManager.getInstance().getPlayer(Number(playerId));
                            if (player) {
                                player.cmj.m_MyPAIVec = data[playerId];
                            }
                        }
                    }
                    MjGame.EventManager.getInstance().event(MjGame.BaseEvent.START_GAME);
                }
            });
        };
        PlayerProxy.prototype.removeProtos = function () {
        };
        return PlayerProxy;
    }(MjGame.BaseProxy));
    MjGame.PlayerProxy = PlayerProxy;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=PlayerProxy.js.map