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
    var MjSocket = /** @class */ (function (_super) {
        __extends(MjSocket, _super);
        function MjSocket() {
            var _this = _super.call(this) || this;
            _this.protocols = new Laya.Dictionary();
            _this.pomelo = new Pomelo();
            _this.configuration();
            return _this;
        }
        /** 配置*/
        MjSocket.prototype.configuration = function () {
            var caller = this;
            this.pomelo.on("close", pomeloClose);
            this.pomelo.on("io-error", pomeloIoError);
            //关闭
            function pomeloClose(data) {
                console.warn("pomelo-close:", data);
                if (!caller || !caller.pomelo)
                    return;
                caller.mConnected = false;
                caller.event(MjSocket.CLOSE, data);
            }
            //ioerror
            function pomeloIoError(data) {
                console.error("pomelo-ioError:", data);
                if (!caller || !caller.pomelo)
                    return;
                caller.event(MjSocket.IO_ERROR, data);
            }
        };
        Object.defineProperty(MjSocket.prototype, "connected", {
            /** 获取是否已连接*/
            get: function () { return this.mConnected; },
            enumerable: true,
            configurable: true
        });
        /**
         * 连接远程
         * @params host主机
         * @params port端口
        */
        MjSocket.prototype.connect = function (host, port) {
            if (this.connected) {
                console.warn("socket had connected, please try to connect again after colse");
                return;
            }
            if (this.mHost == host && this.mPort == port) {
                console.warn("host&port conflict, socket had connected host&port");
                return;
            }
            this.mHost = host;
            this.mPort = port;
            var caller = this;
            this.pomelo.init({ host: this.mHost, port: this.mPort }, function (data) {
                console.log("pomelo init:", data);
                if (data.code === 200) {
                    caller.mConnected = true;
                    caller.event(MjSocket.OPEN);
                }
            });
        };
        /**
         * 请求响应 服务端会回执协议响应，socket收到响应并派发socket.data事件
         * @params protocol协议名称
         * @params data 参数【和服务端针对协议约定】
        */
        MjSocket.prototype.request = function (protocol, data) {
            if (data === void 0) { data = null; }
            if (!this.pomelo)
                return;
            if (!this.mConnected) {
                console.warn("please try to request again after connected");
                return;
            }
            var caller = this;
            this.pomelo.request(protocol, data, function (data) {
                caller.event(MjSocket.DATA, { protocol: protocol, data: data });
            });
        };
        /**
        * 通知
        * @params protocol协议名称
        * @params data 参数【和服务端针对协议约定】
       */
        MjSocket.prototype.notify = function (protocol, data) {
            if (data === void 0) { data = null; }
            if (!this.pomelo)
                return;
            if (!this.mConnected) {
                console.warn("please try to notify again after connected");
                return;
            }
            this.pomelo.notify(protocol, data);
        };
        /** 添加*/
        MjSocket.prototype.add = function (protocol) {
            var index = this.protocols.indexOf(protocol);
            if (index > -1)
                return;
            this.protocols.set(protocol, callBack);
            this.pomelo.on(protocol, this.protocols.get(protocol));
            var caller = this;
            function callBack(data) {
                if (caller)
                    caller.event(MjSocket.DATA, { protocol: protocol, data: data });
            }
        };
        /** 移除*/
        MjSocket.prototype.remove = function (protocol) {
            var index = this.protocols.indexOf(protocol);
            if (index == -1)
                return;
            this.pomelo.off(protocol, this.protocols.get(protocol));
            this.protocols.remove(protocol);
        };
        /** 清除所有*/
        MjSocket.prototype.clearAll = function () {
            this.protocols.clear();
        };
        /** 关闭*/
        MjSocket.prototype.close = function () {
            if (this.pomelo && this.mConnected) {
                this.pomelo.disconnect();
                this.mConnected = false;
            }
        };
        /** 销毁*/
        MjSocket.prototype.destroy = function () {
            this.close();
            this.pomelo = null;
            this.protocols.clear();
        };
        /** 开启*/
        MjSocket.OPEN = "open";
        /** 关闭*/
        MjSocket.CLOSE = "close";
        /** io错误*/
        MjSocket.IO_ERROR = "io-error";
        /** 数据*/
        MjSocket.DATA = "data";
        return MjSocket;
    }(Laya.EventDispatcher));
    MjGame.MjSocket = MjSocket;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=MjSocket.js.map