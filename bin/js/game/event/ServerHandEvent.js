/**
* name
*/
var MjGame;
(function (MjGame) {
    var ServerHandEvent = /** @class */ (function () {
        function ServerHandEvent() {
        }
        /**
         * 玩家加入房间
         */
        ServerHandEvent.PLAYER_ENTER_ROOM = "player_enter_room";
        /**
         * 玩家离开房间
         */
        ServerHandEvent.PLAYER_LEAVE_ROOM = "player_leave_room";
        /**
         * 玩家自己进入房间
         */
        ServerHandEvent.SELF_ENTER_ROOM = "self_enter_room";
        /**
         * 登录失败
         */
        ServerHandEvent.LOGIN_FAIL = "login_fail";
        /**
         * 开始游戏
         */
        ServerHandEvent.START_GAME = "start_game";
        /**
         * 更新正在操作的玩家
         */
        ServerHandEvent.UPDATE_CUR_PLAYER = "update_cur_player";
        /**
         * 发一张牌
         */
        ServerHandEvent.ADD_PAI = "add_pai";
        /**
         * 打一张牌
         */
        ServerHandEvent.DEL_PAI = "del_pai";
        ServerHandEvent.CHI_PAI = "chi_pai";
        ServerHandEvent.PENG_PAI = "peng_pai";
        ServerHandEvent.GANG_PAI = "gang_pai";
        ServerHandEvent.HU_PAI = "hu_pai";
        ServerHandEvent.OPERATION = "operation";
        /**
         * 有玩家准备了
         */
        ServerHandEvent.READY = "ServerHandEvent.ready";
        /**
         * 黄庄了
         */
        ServerHandEvent.HUANG_ZHUANG = "huang_zhuang";
        /**
         * 倒计时
         */
        ServerHandEvent.TIME_OUT = "time_out";
        return ServerHandEvent;
    }());
    MjGame.ServerHandEvent = ServerHandEvent;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=ServerHandEvent.js.map