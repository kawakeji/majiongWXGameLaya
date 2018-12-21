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
    var GameProxy = /** @class */ (function (_super) {
        __extends(GameProxy, _super);
        function GameProxy() {
            var _this = _super.call(this) || this;
            _this.addProtos();
            return _this;
        }
        GameProxy.prototype.addProtos = function () {
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_UPDATE_CUR_PLAYER, this.onUpdateCurPlayer);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_ADD_PAI, this.onAddPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_DEL_PAI, this.onDelPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_CHI_PAI, this.onChiPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_PENG_PAI, this.onPengPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_GANG_PAI, this.onGangPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_HU_PAI, this.onHuPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_OPERATION, this.onOperation);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_UPDATE_CUR_OUT_PAI, this.onUpdateCurPai);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_STATUS_CHANGE, this.onStatusChange);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_HUANG_ZHUANG, this.onHuangZhuang);
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.ON_TIMEOUT, this.onTimeOut);
        };
        GameProxy.prototype.onUpdateCurPlayer = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.UPDATE_CUR_PLAYER, [data]);
        };
        GameProxy.prototype.onOperation = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.OPERATION, [data]);
        };
        GameProxy.prototype.onAddPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.ADD_PAI, [data]);
        };
        GameProxy.prototype.onDelPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.DEL_PAI, [data]);
        };
        GameProxy.prototype.onChiPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.CHI_PAI, [data]);
        };
        GameProxy.prototype.onPengPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.PENG_PAI, [data]);
        };
        GameProxy.prototype.onGangPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.GANG_PAI, [data]);
        };
        GameProxy.prototype.onHuPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.HU_PAI, [data]);
        };
        GameProxy.prototype.onHuangZhuang = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.HUANG_ZHUANG);
        };
        GameProxy.prototype.onUpdateCurPai = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.UPDATE_CUR_OUT_PAI, [data]);
        };
        GameProxy.prototype.onStatusChange = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.STATUS_CHANGE, [data]);
        };
        GameProxy.prototype.onTimeOut = function (data) {
            MjGame.EventManager.getInstance().event(MjGame.ServerHandEvent.TIME_OUT, [data]);
        };
        GameProxy.prototype.removeProtos = function () {
        };
        GameProxy.prototype.sendDelPai = function (playerVO, stPai) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            msg.stPai = stPai;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_DELPAI, msg);
        };
        GameProxy.prototype.sendQuitOperation = function (playerVO, oType) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            msg.operationType = oType;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_QUITOPERATIONI, msg);
        };
        GameProxy.prototype.sendHuToServer = function (playerVO) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_HU, msg);
        };
        GameProxy.prototype.sendChiToServer = function (playerVO, index) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            msg.index = index;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_CHIPAI, msg);
        };
        GameProxy.prototype.sendPengToServer = function (playerVO) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_PENGPAI, msg);
        };
        GameProxy.prototype.sendGangToServer = function (playerVO) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_GANGPAI, msg);
        };
        GameProxy.prototype.sendReadyToServer = function (playerVO) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            msg.status = MjGame.Constants.PLAYER_STATE_READY;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_READY, msg);
        };
        GameProxy.prototype.sendTimeOut = function (playerVO) {
            var msg = {};
            msg.playerId = playerVO.playerId;
            msg.isTimeOut = true;
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CMJ_TIMEOUT, msg);
        };
        return GameProxy;
    }(MjGame.BaseProxy));
    MjGame.GameProxy = GameProxy;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=GameProxy.js.map