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
* 大厅
*/
var MjGame;
(function (MjGame) {
    var HallScene = /** @class */ (function (_super) {
        __extends(HallScene, _super);
        function HallScene() {
            var _this = _super.call(this) || this;
            _this.addEvent();
            return _this;
            // MjSoundManager.getInstance().playMusic(SoundType.MAIN);
        }
        HallScene.prototype.addEvent = function () {
            this.createRoomBtn.on(Laya.Event.CLICK, this, this.onCreateRoom);
            this.enterRoomBtn.on(Laya.Event.CLICK, this, this.onEnterRoom);
            MjGame.EventManager.getInstance().on(MjGame.BaseEvent.PLAYER_ENTER_ROOM, this, this.onPlayerEnter);
        };
        HallScene.prototype.removeEvent = function () {
            MjGame.EventManager.getInstance().off(MjGame.BaseEvent.PLAYER_ENTER_ROOM, this, this.onPlayerEnter);
        };
        HallScene.prototype.onCreateRoom = function (data) {
            MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.ROOM_CREATEROOM, { usename: "logen" });
        };
        HallScene.prototype.onEnterRoom = function () {
            var roomNumInputView = new MjGame.RoomNumInput();
            roomNumInputView.show();
        };
        HallScene.prototype.onPlayerEnter = function () {
            var roomScene = new MjGame.RoomScene();
            Laya.stage.addChild(roomScene);
            this.removeEvent();
            this.removeSelf();
        };
        return HallScene;
    }(ui.game.scene.HallSceneUI));
    MjGame.HallScene = HallScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=HallScene.js.map