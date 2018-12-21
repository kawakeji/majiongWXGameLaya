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
    var RoomProxy = /** @class */ (function (_super) {
        __extends(RoomProxy, _super);
        function RoomProxy() {
            var _this = _super.call(this) || this;
            _this.addProtos();
            return _this;
        }
        RoomProxy.prototype.addProtos = function () {
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_ADD_Room, function (data) {
            });
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_LEAVE_ROOM, function (data) {
            });
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ROOM_JOINROOM, function (data) {
                if (data.error) {
                    MjGame.AlertManager.getInstance().showAlert(data.error);
                }
            });
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_ROOMMATE_LEAVE_ROOM, function (data) {
                if (data.playerId) {
                    MjGame.RoomManager.getInstance().removePlayer(data.playerId);
                    MjGame.EventManager.getInstance().event(MjGame.BaseEvent.PLAYER_LEAVE_ROOM, data.playerId);
                }
            });
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_DISBAND_ROOM, function (data) {
                MjGame.EventManager.getInstance().event(MjGame.BaseEvent.DISBAND_ROOM);
            });
            this.addUpdateRoomListener();
            this.addStartGameListener();
        };
        RoomProxy.prototype.addUpdateRoomListener = function () {
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_UPDATE_ROOM, function (data) {
                if (data.playerVOs) {
                    for (var index = 0; index < data.playerVOs.length; index++) {
                        var element = data.playerVOs[index];
                        var player = new MjGame.PlayerVO();
                        player.playerId = element.playerId;
                        player.username = element.username;
                        player.roomId = element.roomId;
                        player.position = element.position;
                        player.isRoomOwner = element.isRoomOwner;
                        player.isDealer = element.isDealer;
                        player.status = element.status;
                        MjGame.Log.print("ON_UPDATE_ROOM ==> player:", MjGame.util.toString(player));
                        if (player.username == MjGame.PlayerManager.getInstance().selfUsername) {
                            MjGame.PlayerManager.getInstance().selfPlayerVO = player;
                        }
                        MjGame.RoomManager.getInstance().addPlayer(player);
                    }
                    MjGame.EventManager.getInstance().event(MjGame.BaseEvent.PLAYER_ENTER_ROOM);
                }
            });
        };
        RoomProxy.prototype.addStartGameListener = function () {
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_START_GAME, function (data) {
                var players = data.players;
                var roomVO = data.roomVO;
                MjGame.RoomManager.getInstance().roomVO = roomVO;
                if (players) {
                    for (var index = 0; index < players.length; index++) {
                        var cmjMsg = players[index];
                        var playerId = cmjMsg.playerId;
                        var player = MjGame.RoomManager.getInstance().getPlayer(Number(playerId));
                        if (player) {
                            player.cmj = new MjGame.CMJ();
                            player.cmj.m_MyPAIVec = cmjMsg.m_MyPAIVec;
                            player.cmj.m_OutPAIVec = cmjMsg.m_OutPAIVec;
                            player.cmj.m_ChiPAIVec = cmjMsg.m_ChiPAIVec;
                            player.cmj.m_PengPAIVec = cmjMsg.m_PengPAIVec;
                            player.cmj.m_GangPAIVec = cmjMsg.m_GangPAIVec;
                            if (roomVO && roomVO.roomHunPai) {
                                player.cmj.setHunPai(roomVO.roomHunPai);
                            }
                        }
                    }
                    MjGame.EventManager.getInstance().event(MjGame.BaseEvent.START_GAME);
                }
            });
        };
        RoomProxy.prototype.removeProtos = function () {
        };
        return RoomProxy;
    }(MjGame.BaseProxy));
    MjGame.RoomProxy = RoomProxy;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=RoomProxy.js.map