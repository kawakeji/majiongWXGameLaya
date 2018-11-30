/**
* name
*/
var MjGame;
(function (MjGame) {
    var ClientHandEvent = /** @class */ (function () {
        function ClientHandEvent() {
        }
        /**
         * 等待出牌
         */
        ClientHandEvent.WAITING_OUT_MJ = "waiting_out_mj";
        /**
         * 等待吃操作
         */
        ClientHandEvent.WAITING_OPERATION_CHI = "waiting_operation_chi";
        /**
         * 等待碰操作
         */
        ClientHandEvent.WAITING_OPERATION_PENG = "waiting_operation_peng";
        /**
         * 等待杠操作
         */
        ClientHandEvent.WAITING_OPERATION_GANG = "waiting_operation_gang";
        /**
         * 等待胡操作
         */
        ClientHandEvent.WAITING_OPERATION_HU = "waiting_operation_hu";
        /**
         * 取消操作
         */
        ClientHandEvent.QUIT_OPERATION = "quit_operation";
        /**
         * 显示出牌按钮
         */
        ClientHandEvent.SHOW_OUT_BTN = "show_out_btn";
        return ClientHandEvent;
    }());
    MjGame.ClientHandEvent = ClientHandEvent;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=ClientHandEvent.js.map