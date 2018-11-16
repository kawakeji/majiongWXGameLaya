var MjGame;
(function (MjGame) {
    var CommandMsgType = /** @class */ (function () {
        function CommandMsgType() {
        }
        //==================服务器到客户端协议=============================
        CommandMsgType.LOGIN_S = 1001;
        CommandMsgType.LOGOUT_S = 1003;
        CommandMsgType.PLAYER_LEAVE_S = 1005;
        CommandMsgType.OTHER_PLAYER_ENTER_ROOM_S = 1007;
        CommandMsgType.OTHER_PLAYER_LEAVE_ROOM_S = 1009;
        CommandMsgType.START_GAME_S = 1011;
        CommandMsgType.ADD_PAI_S = 1013;
        CommandMsgType.DEL_PAI_S = 1015;
        CommandMsgType.CHI_PAI_S = 1017;
        CommandMsgType.PENG_PAI_S = 1019;
        CommandMsgType.GANG_PAI_S = 1021;
        CommandMsgType.HU_PAI_S = 1023;
        CommandMsgType.UPDATE_CUR_PLAYER_S = 1025;
        //准备吃，碰，杠，胡
        CommandMsgType.READY_OPERATION_S = 1027;
        //重新开始
        CommandMsgType.RE_READY_S = 1029;
        //黄庄了
        CommandMsgType.HUANG_ZHUANG_S = 1031;
        //===================客户端请求服务器协议=========================
        CommandMsgType.LOGIN_C = 1002;
        CommandMsgType.LOGOUT_C = 1004;
        CommandMsgType.PLAYER_LEAVE_C = 1006;
        CommandMsgType.DEL_PAI_C = 1008;
        CommandMsgType.CHI_PAI_C = 1010;
        CommandMsgType.PENG_PAI_C = 1012;
        CommandMsgType.GANG_PAI_C = 1014;
        CommandMsgType.HU_PAI_C = 1016;
        //放弃吃，碰，杠，胡
        CommandMsgType.QUIT_OPERATION_C = 1020;
        //重新开始
        CommandMsgType.RE_READY_C = 1022;
        return CommandMsgType;
    }());
    MjGame.CommandMsgType = CommandMsgType;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CommandMsgType.js.map