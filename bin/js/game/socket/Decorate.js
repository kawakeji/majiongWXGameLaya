/**
* name
*/
var MjGame;
(function (MjGame) {
    var Decorate = /** @class */ (function () {
        function Decorate(socket) {
            this.socket = socket;
            this.protocols = new Laya.Dictionary();
        }
        /** 添加*/
        Decorate.prototype.add = function (protocol) {
            var index = this.protocols.indexOf(protocol);
            if (index > -1)
                return;
            this.protocols.set(protocol, callBack);
            if (this.socket)
                this.socket._$pomelo.on(protocol, this.protocols.get(protocol));
            var caller = this;
            function callBack(response) {
                if (caller && caller.socket)
                    caller.socket.event(MjGame.MjSocket.DATA, { protocol: protocol, response: response });
            }
        };
        /** 移除*/
        Decorate.prototype.remove = function (protocol) {
            var index = this.protocols.indexOf(protocol);
            if (index == -1)
                return;
            if (this.socket)
                this.socket._$pomelo.off(protocol, this.protocols.get(protocol));
            this.protocols.remove(protocol);
        };
        /** 清除所有*/
        Decorate.prototype.clearAll = function () {
            this.protocols.clear();
        };
        /** 销毁*/
        Decorate.prototype.destroy = function () {
            this.socket = null;
            this.protocols.clear();
        };
        return Decorate;
    }());
    MjGame.Decorate = Decorate;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=Decorate.js.map