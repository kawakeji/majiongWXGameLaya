/**
* name
*/
var MjGame;
(function (MjGame) {
    var Event = Laya.Event;
    var Socket = Laya.Socket;
    var Byte = Laya.Byte;
    var NetWorkSocket = /** @class */ (function () {
        function NetWorkSocket() {
            this.connect();
        }
        NetWorkSocket.prototype.connect = function () {
            this.socket = new Socket();
            //this.socket.connect("echo.websocket.org", 80);
            this.socket.connectByUrl("ws://localhost:8001");
            this.output = this.socket.output;
            this.socket.on(Event.OPEN, this, this.onSocketOpen);
            this.socket.on(Event.CLOSE, this, this.onSocketClose);
            this.socket.on(Event.MESSAGE, this, this.onMessageReveived);
            this.socket.on(Event.ERROR, this, this.onConnectError);
        };
        NetWorkSocket.prototype.onSocketOpen = function () {
            console.log("Connected");
            var msg = message.BoolMsg.create();
            msg.value = 1;
            // message.type='enter';
            // message.data='comes in';
            //给每一个客户都广播一个信息，告知有新用户进来
            this.send(JSON.stringify(msg));
            // var msg = message.BoolMsg.create();
            // msg.value = 1;
            // var buff = message.BoolMsg.encode(msg).finish();
            // console.log("buff",buff)
            // this.send(buff);
            // this.send("dddddddddddddd");
            //  var message2 = message.BoolMsg.decode(buff);
            // 在这里把解码的数据控制台打印，看看结果
            // console.log(message2.value);
            // this.send("dddddddddddddd");
            // 发送字符串
            // this.socket.send("demonstrate <sendString>");
            // 使用output.writeByte发送
            // var message: string = "demonstrate <output.writeByte>";
            // for (var i: number = 0; i < message.length; ++i) {
            // 	this.output.writeByte(message.charCodeAt(i));
            // }
            this.socket.flush();
        };
        NetWorkSocket.prototype.onSocketClose = function () {
            console.log("Socket closed");
        };
        NetWorkSocket.prototype.onMessageReveived = function (message) {
            console.log("Message from server:");
            var message = JSON.parse(message);
            console.log(message.data, message.type);
            if (typeof message == "string") {
                console.log(message);
            }
            else if (message instanceof ArrayBuffer) {
                console.log(new Byte(message).readUTFBytes());
            }
            this.socket.input.clear();
        };
        //辅助函数
        NetWorkSocket.prototype.showMessage = function (str, type) {
            // var div=document.createElement('div');
            // div.innerHTML=str;
            // if(type==='enter'){
            // 	div.style.color='blue';
            // }else if(type==='leave'){
            // 	div.style.color='red'
            // }
            // document.body.appendChild(div);
        };
        NetWorkSocket.prototype.onConnectError = function (e) {
            console.log("error");
        };
        NetWorkSocket.prototype.send = function (msg) {
            this.socket.send(msg);
        };
        return NetWorkSocket;
    }());
    MjGame.NetWorkSocket = NetWorkSocket;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=NetWorkSocket.js.map