/**
* name
*/
var MjGame;
(function (MjGame) {
    var RoomManager = /** @class */ (function () {
        function RoomManager() {
            this.playerVOs = new Array();
        }
        RoomManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new RoomManager();
            }
            return this.instance;
        };
        RoomManager.prototype.addPlayer = function (player) {
            this.removePlayer(player.playerId);
            this.playerVOs.push(player);
        };
        RoomManager.prototype.isPlayerInRoom = function (playerId) {
            for (var index = 0; index < this.playerVOs.length; index++) {
                var player = this.playerVOs[index];
                if (player.playerId !== MjGame.Constants.ROOM_PLAYER_ID_NONE && player.playerId === playerId) {
                    return true;
                }
            }
            return false;
        };
        RoomManager.prototype.removePlayer = function (playerId) {
            for (var index = 0; index < this.playerVOs.length; index++) {
                var player = this.playerVOs[index];
                if (player.playerId === playerId) {
                    this.playerVOs.splice(index, 1);
                }
            }
        };
        RoomManager.prototype.getPlayer = function (playerId) {
            for (var index = 0; index < this.playerVOs.length; index++) {
                var player = this.playerVOs[index];
                if (player.playerId === playerId) {
                    return player;
                }
            }
        };
        RoomManager.prototype.getPlayerByPos = function (pos) {
            for (var index = 0; index < this.playerVOs.length; index++) {
                var player = this.playerVOs[index];
                if (player.position === pos) {
                    return player;
                }
            }
        };
        Object.defineProperty(RoomManager.prototype, "roomId", {
            get: function () {
                if (this.roomOwnerPlayer) {
                    return this.roomOwnerPlayer.roomId;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        return RoomManager;
    }());
    MjGame.RoomManager = RoomManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=RoomManager.js.map