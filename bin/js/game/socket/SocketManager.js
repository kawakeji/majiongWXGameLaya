/**
* SocketManager 对socket 进行封装，外接调用全部通过该类完成
* 包含协议监听，监听移除
* 请求，单次请求
*/
var MjGame;
(function (MjGame) {
    var SocketManager = /** @class */ (function () {
        function SocketManager() {
            this.initSocket();
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        SocketManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new SocketManager();
            }
            return this.instance;
        };
        SocketManager.prototype.initSocket = function () {
            this.handlers = new Laya.Dictionary();
            this.socket = new MjGame.MjSocket();
            this.socket.on(MjGame.MjSocket.OPEN, this, this._$game_open_handler);
            this.socket.on(MjGame.MjSocket.CLOSE, this, this._$game_close_handler);
            this.socket.on(MjGame.MjSocket.IO_ERROR, this, this._$game_io_error_handler);
            this.socket.on(MjGame.MjSocket.DATA, this, this._$game_data_handler);
        };
        SocketManager.prototype._$game_open_handler = function () {
            console.log("socket connection success");
            //游戏服连接成功后，拿取账号的密钥请求进入游戏
            this.handler(MjGame.ProtocolType.CONNECT_RESULT, MjGame.MjSocket.OPEN);
        };
        SocketManager.prototype._$game_close_handler = function (event) {
            console.log("socket connection close:", event);
            this.handler(MjGame.ProtocolType.CONNECT_RESULT, MjGame.MjSocket.CLOSE);
        };
        SocketManager.prototype._$game_io_error_handler = function (event) {
            console.log("socket io-error:", event);
            this.handler(MjGame.ProtocolType.CONNECT_RESULT, MjGame.MjSocket.IO_ERROR);
            MjGame.AlertManager.getInstance().showAlert("服务器关闭了，请稍后连接！");
        };
        SocketManager.prototype._$game_data_handler = function (event) {
            console.log("\nsocket receive Msg \nprotoType:", event.protocol, "\nevent.Data:", event.data);
            //根据个人与服务器的约定处理协议即可
            this.handler(event.protocol, event.data);
        };
        SocketManager.prototype.handler = function (protocol, data) {
            if (data === void 0) { data = null; }
            var handlerFunc = this.handlers.get(protocol);
            if (!!handlerFunc) {
                handlerFunc(data);
            }
        };
        /**
         * socket 连接
         * @param host IP
         * @param port 端口
         * @param call 连接结果回调
         */
        SocketManager.prototype.connect = function (host, port, call) {
            this.socket.connect(host, port);
            this.handlers.set(MjGame.ProtocolType.CONNECT_RESULT, call);
            // this.socket.connect("127.0.0.1",3005);
        };
        /**
         * 添加协议监听，暂时一个协议号对应一个回调，不允许一对多的关系，后加回调会覆盖前面的
         * @param protocol 协议号
         * @param call 回调
         */
        SocketManager.prototype.addProto = function (protocol, call) {
            this.socket.add(protocol);
            this.handlers.set(protocol, call);
        };
        /**
         * 移除协议监听
         * @param protocol 协议号
         * @param call 协议回调
         */
        SocketManager.prototype.removeProto = function (protocol) {
            this.socket.remove(protocol);
            this.handlers.remove(protobuf);
        };
        /**
         * 向服务器请求,并需要服务器返回消息
         * @param protocol 协议号
         * @param data
         */
        SocketManager.prototype.request = function (protocol, data) {
            if (data === void 0) { data = null; }
            console.log("\nsocket request \nprotoType:", protocol, "\nevent.Data:", data);
            this.socket.request(protocol, data);
        };
        /**
         * 向服务器请求，服务器不会返回消息
         * @param protocol 协议号
         * @param data
         */
        SocketManager.prototype.notify = function (protocol, data) {
            if (data === void 0) { data = null; }
            console.log("\nsocket notify \nprotoType:", protocol, "\nevent.Data:", data);
            this.socket.notify(protocol, data);
        };
        SocketManager.prototype.close = function () {
            this.socket.close();
        };
        /** 销毁*/
        SocketManager.prototype.destroy = function () {
            this.socket.destroy();
            this.handlers.clear();
        };
        return SocketManager;
    }());
    MjGame.SocketManager = SocketManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=SocketManager.js.map