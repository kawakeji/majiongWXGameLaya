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
/*
* 游戏桌面场景;
*/
var MjGame;
(function (MjGame) {
    var DeskScene = /** @class */ (function (_super) {
        __extends(DeskScene, _super);
        function DeskScene() {
            var _this = _super.call(this) || this;
            _this.createCardMainView();
            _this.scale(0.2, 0.2);
            return _this;
        }
        DeskScene.prototype.createCardMainView = function () {
            this.cardMainView = new MjGame.CardMainView(this);
            var socket = new MjGame.NetWorkSocket();
        };
        return DeskScene;
    }(ui.game.scene.DeskSceneUI));
    MjGame.DeskScene = DeskScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=DeskScene.js.map