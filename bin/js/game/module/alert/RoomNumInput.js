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
    var RoomNumInput = /** @class */ (function (_super) {
        __extends(RoomNumInput, _super);
        function RoomNumInput() {
            var _this = _super.call(this) || this;
            _this.NumPath = "game/roomNumInput/";
            _this.PosArr = [40, 106, 172, 238, 304, 370];
            _this.isEnter = false;
            _this.inputNumArr = [];
            _this.initEvent();
            return _this;
        }
        RoomNumInput.prototype.initEvent = function () {
            for (var i = 0; i < 10; i++) {
                this['num' + i].on(Laya.Event.CLICK, this, this.onClickNum);
                this['num' + i].num = i;
            }
            this.reInputBtn.on(Laya.Event.CLICK, this, this.onReInput);
            this.delBtn.on(Laya.Event.CLICK, this, this.onDel);
            this.closeBtn.on(Laya.Event.CLICK, this, this.onClose);
        };
        RoomNumInput.prototype.onClickNum = function (event) {
            var target = event.currentTarget;
            this.addInputNum(target.num);
        };
        RoomNumInput.prototype.onReInput = function () {
            for (var index = this.inputNumArr.length; index > 0; index--) {
                this.removeInputNum();
            }
            this.inputNumArr = [];
        };
        RoomNumInput.prototype.onDel = function () {
            this.removeInputNum();
        };
        RoomNumInput.prototype.onClose = function () {
            this.removeSelf();
        };
        RoomNumInput.prototype.addInputNum = function (num) {
            var curLen = this.inputNumArr.length;
            if (!this.checkIsCanEnter(curLen)) {
                var img = new Laya.Image();
                img.skin = this.NumPath + num + ".png";
                img['num'] = num;
                img.pos(this.PosArr[curLen], 96);
                this.addChild(img);
                this.inputNumArr.push(img);
                this.checkIsCanEnter(curLen + 1);
            }
        };
        RoomNumInput.prototype.removeInputNum = function () {
            this.isEnter = false;
            if (this.inputNumArr.length <= 0)
                return;
            var img = this.inputNumArr.pop();
            if (img) {
                img.removeSelf();
            }
        };
        RoomNumInput.prototype.checkIsCanEnter = function (curLen) {
            if (this.isEnter) {
                MjGame.Log.print("正在进入房间，请稍后~");
                return false;
            }
            if (curLen == 6) {
                this.isEnter = true;
                MjGame.Log.print("进入房间：", this.getRoomNum());
                MjGame.SocketManager.getInstance().request(MjGame.ProtocolType.ROOM_JOINROOM, { roomId: this.getRoomNum() });
                this.removeSelf();
                return true;
            }
            return false;
        };
        RoomNumInput.prototype.getRoomNum = function () {
            var roomNum = "";
            for (var index = 0; index < this.inputNumArr.length; index++) {
                var element = this.inputNumArr[index];
                roomNum = roomNum + element.num;
            }
            return Number(roomNum);
        };
        return RoomNumInput;
    }(ui.game.dialog.RoomNumInputUI));
    MjGame.RoomNumInput = RoomNumInput;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=RoomNumInput.js.map