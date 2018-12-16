var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* 房间
*/
var MjGame;
(function (MjGame) {
    var RoomScene = /** @class */ (function (_super) {
        __extends(RoomScene, _super);
        function RoomScene() {
            var _this = _super.call(this) || this;
            _this.playerPosView = [_this.downPosPlayer, _this.rightPosPlayer, _this.upPosPlayer, _this.leftPosPlayer];
            _this.updatePlayerInfo();
            _this.addEvent();
            return _this;
            // this.scale(0.4,0.4);
        }
        RoomScene.prototype.addEvent = function () {
            MjGame.EventManager.getInstance().on(MjGame.BaseEvent.PLAYER_ENTER_ROOM, this, this.updatePlayerInfo);
            MjGame.EventManager.getInstance().on(MjGame.BaseEvent.DISBAND_ROOM, this, this.onDisband);
            MjGame.EventManager.getInstance().on(MjGame.BaseEvent.PLAYER_LEAVE_ROOM, this, this.onLeave);
            MjGame.EventManager.getInstance().on(MjGame.BaseEvent.START_GAME, this, this.onStartGame);
            this.startBtn.on(Laya.Event.CLICK, this, this.onStart);
            this.readyBtn.on(Laya.Event.CLICK, this, this.onReady);
        };
        RoomScene.prototype.removeEvent = function () {
            MjGame.EventManager.getInstance().off(MjGame.BaseEvent.PLAYER_ENTER_ROOM, this, this.updatePlayerInfo);
            MjGame.EventManager.getInstance().off(MjGame.BaseEvent.DISBAND_ROOM, this, this.onDisband);
            MjGame.EventManager.getInstance().off(MjGame.BaseEvent.PLAYER_LEAVE_ROOM, this, this.onLeave);
            MjGame.EventManager.getInstance().off(MjGame.BaseEvent.START_GAME, this, this.onStartGame);
        };
        RoomScene.prototype.updatePlayerInfo = function () {
            var playerVOs = MjGame.RoomManager.getInstance().playerVOs;
            var player;
            var playerView;
            var playerNum = playerVOs.length;
            this.startBtn.visible = false;
            this.readyBtn.visible = false;
            for (var index = 0; index < 4; index++) {
                playerView = this.playerPosView[index];
                if (index < MjGame.GlobalConfig.MAX_MEMBER_NUM) {
                    player = playerVOs[index];
                    if (player) {
                        playerView.isReady.visible = player.isReady;
                        playerView.headIcon.visible = true;
                        playerView.playerName.text = player.username;
                        this.updateStartBtnState(player, playerNum);
                        this.roomNum.text = "房间号：" + player.roomId;
                    }
                    else {
                        playerView.isReady.visible = false;
                        playerView.headIcon.visible = false;
                        playerView.playerName.text = "";
                    }
                }
                else {
                    playerView.isReady.visible = false;
                    playerView.headIcon.visible = false;
                    playerView.playerName.text = "";
                }
            }
        };
        RoomScene.prototype.onLeave = function () {
            this.updatePlayerInfo();
        };
        RoomScene.prototype.onDisband = function () {
            var hallScene = new MjGame.HallScene();
            Laya.stage.addChild(hallScene);
            this.removeEvent();
            this.removeSelf();
        };
        RoomScene.prototype.updateStartBtnState = function (player, playerNum) {
            if (player.isRoomOwner && MjGame.PlayerManager.getInstance().selfUsername == player.username) {
                this.startBtn.visible = true;
                if (playerNum >= MjGame.GlobalConfig.MAX_MEMBER_NUM) {
                    this.startBtn.gray = false;
                    this.startBtn.mouseEnabled = true;
                }
                else {
                    this.startBtn.gray = true;
                    this.startBtn.mouseEnabled = false;
                }
            }
            else if (!player.isReady && !player.isRoomOwner) {
                this.readyBtn.visible = true;
            }
        };
        RoomScene.prototype.onReady = function () {
            MjGame.ProxyManager.getInstance().gameProxy.sendReadyToServer(MjGame.PlayerManager.getInstance().selfPlayerVO);
        };
        RoomScene.prototype.onStart = function () {
            if (MjGame.PlayerManager.getInstance().selfPlayerVO.isRoomOwner) {
                var isCanStart = true;
                for (var index = 0; index < MjGame.GlobalConfig.MAX_MEMBER_NUM; index++) {
                    var playerView = this.playerPosView[index];
                    if (!playerView || !playerView.isReady.visible) {
                        isCanStart = false;
                        break;
                    }
                }
                if (isCanStart) {
                    MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.ROOM_STARTGAME, { username: MjGame.PlayerManager.getInstance().selfUsername, roomId: MjGame.RoomManager.getInstance().roomId });
                }
                else {
                    MjGame.AlertManager.getInstance().showAlert("还有玩家未准备好！");
                }
            }
            else {
                MjGame.AlertManager.getInstance().showAlert("您不是房主，不能开始游戏");
            }
        };
        RoomScene.prototype.onStartGame = function () {
            this.removeEvent();
            var deskScene = new MjGame.DeskScene();
            Laya.stage.addChild(deskScene);
            this.removeSelf();
        };
        return RoomScene;
    }(ui.game.scene.RoomSceneUI));
    MjGame.RoomScene = RoomScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=RoomScene.js.map