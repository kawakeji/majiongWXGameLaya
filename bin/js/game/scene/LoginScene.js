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
* 登录
*/
var MjGame;
(function (MjGame) {
    var LoginScene = /** @class */ (function (_super) {
        __extends(LoginScene, _super);
        function LoginScene() {
            var _this = _super.call(this) || this;
            _this.loginBtn.on(Laya.Event.CLICK, _this, _this.onLogin);
            MjGame.MjSoundManager.getInstance().playMusic(MjGame.SoundType.MAIN, 0);
            return _this;
        }
        LoginScene.prototype.onLogin = function () {
            var self = this;
            var username = this.username.text;
            MjGame.SocketManager.getInstance().close();
            MjGame.SocketManager.getInstance().connect(MjGame.GlobalConfig.HOST, MjGame.GlobalConfig.PORT, function (data) {
                if (data == MjGame.MjSocket.OPEN) {
                    MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.GATE_QUERYENTRY, { uid: username });
                }
            });
            MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.GATE_QUERYENTRY, function (data) {
                var code = data.code;
                if (code == 200) {
                    self.enterConnector(data);
                }
            });
        };
        LoginScene.prototype.enterConnector = function (data) {
            var self = this;
            var username = this.username.text;
            var host = data.host;
            var port = data.port;
            MjGame.SocketManager.getInstance().close();
            MjGame.SocketManager.getInstance().connect(host, port, function (data) {
                MjGame.SocketManager.getInstance().addProto(MjGame.ProtocolType.CONNECT_ENTER, function (data) {
                    if (data.code == 200) {
                        MjGame.ServerTimeManager.getInstance().syncServerTime();
                        MjGame.PlayerManager.getInstance().selfUsername = data.username;
                        var hallScene = new MjGame.HallScene();
                        Laya.stage.addChild(hallScene);
                        self.removeSelf();
                    }
                    else {
                        MjGame.AlertManager.getInstance().showAlert(data.error);
                    }
                });
                if (data == MjGame.MjSocket.OPEN) {
                    MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.CONNECT_ENTER, { username: username });
                }
            });
        };
        return LoginScene;
    }(ui.game.scene.LoginSceneUI));
    MjGame.LoginScene = LoginScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=LoginScene.js.map