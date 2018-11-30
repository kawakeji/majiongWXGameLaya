/**
* name
*/
var MjGame;
(function (MjGame) {
    var BaseEvent = /** @class */ (function () {
        function BaseEvent() {
        }
        /**
         * 胡牌了
         */
        BaseEvent.HU = "hu";
        /**
         * 开始游戏
         */
        BaseEvent.START_GAME = "start_game";
        /**
         * 玩家加入房间
         */
        BaseEvent.PLAYER_ENTER_ROOM = "player_enter_room";
        /**
         * 玩家离开房间
         */
        BaseEvent.PLAYER_LEAVE_ROOM = "player_leave_room";
        /**
         * 玩家自己进入房间
         */
        BaseEvent.SELF_ENTER_ROOM = "self_enter_room";
        /**
         * 登录失败
         */
        BaseEvent.LOGIN_FAIL = "login_fail";
        return BaseEvent;
    }());
    MjGame.BaseEvent = BaseEvent;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=BaseEvent.js.map