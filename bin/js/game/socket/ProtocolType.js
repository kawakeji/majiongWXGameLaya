/**
* 协议号 定义类
*/
var MjGame;
(function (MjGame) {
    var ProtocolType = /** @class */ (function () {
        function ProtocolType() {
        }
        //=========================== client request type ==========================//
        ProtocolType.CONNECT_RESULT = 'connect_result';
        ProtocolType.CONNECT_ENTER = 'connector.entryHandler.enter';
        ProtocolType.GATE_QUERYENTRY = 'gate.gateHandler.queryEntry';
        ProtocolType.CHAT_SEND = 'chat.chatHandler.send';
        ProtocolType.ROOM_CREATEROOM = 'area.roomHandler.createRoom';
        ProtocolType.ROOM_JOINROOM = 'area.roomHandler.joinRoom';
        ProtocolType.ROOM_STARTGAME = 'area.roomHandler.startGame';
        ProtocolType.CMJ_DELPAI = 'area.cmjHandler.delPai';
        ProtocolType.CMJ_QUITOPERATIONI = 'area.cmjHandler.quitOperation';
        ProtocolType.CMJ_HU = 'area.cmjHandler.huPai';
        ProtocolType.CMJ_CHIPAI = 'area.cmjHandler.chiPai';
        ProtocolType.CMJ_PENGPAI = 'area.cmjHandler.pengPai';
        ProtocolType.CMJ_GANGPAI = 'area.cmjHandler.gangPai';
        ProtocolType.CMJ_READY = 'area.cmjHandler.ready';
        //======================== on server listen type============================//
        ProtocolType.ON_ADD_Room = 'onAddRoom';
        ProtocolType.ON_LEAVE_ROOM = 'onLeaveRoom';
        ProtocolType.ON_UPDATE_ROOM = 'onUpdateRoom';
        ProtocolType.ON_DISBAND_ROOM = 'onDisbandRoom';
        ProtocolType.ON_ROOMMATE_LEAVE_ROOM = 'onRoommateLeaveRoom';
        ProtocolType.ON_START_GAME = 'onStartGame';
        ProtocolType.ON_CHAT = 'onChat';
        //========================= 操作类型 ======================================//
        ProtocolType.ON_UPDATE_CUR_PLAYER = "onUpdateCurPlayer";
        ProtocolType.ON_ADD_PAI = "onAddPai";
        ProtocolType.ON_DEL_PAI = "onDelPai";
        ProtocolType.ON_CHI_PAI = "onChiPai";
        ProtocolType.ON_PENG_PAI = "onPengPai";
        ProtocolType.ON_GANG_PAI = "onGangPai";
        ProtocolType.ON_HU_PAI = "onHuPai";
        ProtocolType.ON_OPERATION = "onOperation";
        ProtocolType.ON_READY = "onReady";
        ProtocolType.ON_HUANG_ZHUANG = "onHuangZhuang";
        return ProtocolType;
    }());
    MjGame.ProtocolType = ProtocolType;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=ProtocolType.js.map