var MjGame;
(function (MjGame) {
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.ROOM_OK = 1;
        Constants.ROOM_FAILED = 0;
        // yes / no
        Constants.ROOM_YES = 1;
        Constants.ROOM_NO = 0;
        Constants.ROOM_ID_NONE = 0; // player without ROOM(not in any ROOM)
        Constants.ROOM_PLAYER_ID_NONE = 0; // none player id in a ROOM(placeholder)
        Constants.ROOM_AREA_ID_NONE = 0; // none area id (placeholder)
        Constants.ROOM_USER_ID_NONE = 0; // none user id (placeholder)
        Constants.ROOM_SERVER_ID_NONE = 0; // none server id (placeholder)
        Constants.ROOM_PLAYER_INFO_NONE = ''; // none player info	(placeholder)
        Constants.JOIN_ROOM_RET_CODE_OK = 1; // join ok
        Constants.JOIN_ROOM_RET_CODE_NO_POSITION = -1; // there is no position
        Constants.JOIN_ROOM_RET_CODE_ALREADY_IN_ROOM = -2; // already in the ROOM
        Constants.JOIN_ROOM_RET_CODE_IN_OTHER_TEA = -3; // already in other ROOM
        Constants.JOIN_ROOM_RET_CODE_SYS_ERROR = -4; // system error
        // 服务器推送过来的操作类型
        Constants.O_TYPE_NULL = 0;
        Constants.O_TYPE_HU = 1;
        Constants.O_TYPE_GANG = 2;
        Constants.O_TYPE_PENG = 3;
        Constants.O_TYPE_CHI = 4;
        Constants.O_TYPE_DA = 5;
        Constants.O_TYPE_ZIMO = 6;
        Constants.PLAYER_STATE_NONE = 0; // 玩家初始化
        Constants.PLAYER_STATE_NOT_READY = 1; // 房间内未准备状态
        Constants.PLAYER_STATE_READY = 2; // 房间内准备状态
        Constants.PLAYER_STATE_DISCONNECT = 3; // 断开连接状态
        Constants.PLAYER_STATE_GAME = 4; // 正在游戏中
        Constants.PLAYER_STATE_EXIT = 5; // 玩家退出
        return Constants;
    }());
    MjGame.Constants = Constants;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=constants.js.map