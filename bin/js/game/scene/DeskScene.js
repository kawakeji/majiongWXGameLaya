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
/*
* 游戏桌面场景;
*/
var MjGame;
(function (MjGame) {
    var DeskScene = /** @class */ (function (_super) {
        __extends(DeskScene, _super);
        function DeskScene() {
            var _this = _super.call(this) || this;
            _this.ROUND_TIME = 15;
            _this.leftTime = 0;
            _this.isSendTimeOut = false;
            _this.endTime = 0;
            _this.curClientPos = 0;
            _this.selectedDirectionArr = [_this.clockUI.downSelected, _this.clockUI.rightSelected, _this.clockUI.upSelected, _this.clockUI.leftSelected];
            _this.initView();
            _this.createCardMainView();
            Laya.timer.loop(1000, _this, _this.updateClock);
            MjGame.MjSoundManager.getInstance().playMusic(MjGame.SoundType.BG_SOUND);
            return _this;
        }
        DeskScene.prototype.initView = function () {
            for (var index = 0; index < this.selectedDirectionArr.length; index++) {
                var img = this.selectedDirectionArr[index];
                img.visible = false;
            }
        };
        DeskScene.prototype.createCardMainView = function () {
            this.updateRoomInfo();
            this.cardMainView = new MjGame.CardMainView(this);
            // let hunP:StPAI = CMJManager.getInstance().getHunPai();
            // if (hunP)
            // {
            //     this.hunPai.text = Log.traceSinglePai(hunP.m_Type,hunP.m_Value);
            // }
        };
        DeskScene.prototype.updateRoomInfo = function () {
            var roomVO = MjGame.RoomManager.getInstance().roomVO;
            if (roomVO) {
                this.roomInfoView.roomIdLabel.text = "房间号：" + roomVO.roomId;
                this.roomInfoView.roomRoundNumLabel.text = "剩余回合数：" + roomVO.roomRoundNum;
                var handCard = new MjGame.HandCard();
                this.roomInfoView.hunContainer.addChild(handCard);
                handCard.setData(roomVO.roomHunPai, 0, 0, 0);
                handCard.mouseEnabled = false;
            }
        };
        DeskScene.prototype.updateCurPlayer = function (player, endTime) {
            this.curPlayer = player;
            this.endTime = endTime;
            this.isSendTimeOut = false;
            var selfPlayer = MjGame.PlayerManager.getInstance().selfPlayerVO;
            var pos = MjGame.util.getClientRefPos(player.position, selfPlayer.position);
            this.curClientPos = pos;
            if (this.lastSelected) {
                this.lastSelected.visible = false;
            }
            this.selectedDirectionArr[pos].visible = true;
            this.lastSelected = this.selectedDirectionArr[pos];
        };
        DeskScene.prototype.updateClock = function () {
            var leftTime = MjGame.ServerTimeManager.getInstance().getCountDown(this.endTime);
            if (leftTime <= 0) {
                this.clockUI.timeLabel.value = "0";
                // if(!this.isSendTimeOut && this.curPlayer && this.curPlayer.playerId == PlayerManager.getInstance().selfPlayerVO.playerId)
                // {
                //     this.isSendTimeOut = true;
                // ProxyManager.getInstance().gameProxy.sendTimeOut(this.curPlayer);
                // }
            }
            else {
                if (this.curClientPos == MjGame.GlobalConfig.DOWN_POS) {
                    MjGame.MjSoundManager.getInstance().playCommonSound(MjGame.SoundType.TIME);
                }
                this.clockUI.timeLabel.value = Math.ceil(leftTime / 1000) + "";
            }
        };
        return DeskScene;
    }(ui.game.scene.DeskSceneUI));
    MjGame.DeskScene = DeskScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=DeskScene.js.map