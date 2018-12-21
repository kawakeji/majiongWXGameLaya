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
    var LoadingScene = /** @class */ (function (_super) {
        __extends(LoadingScene, _super);
        function LoadingScene() {
            var _this = _super.call(this) || this;
            _this.beginLoad();
            return _this;
        }
        LoadingScene.prototype.beginLoad = function () {
            Laya.loader.load(["res/atlas/comp.atlas", "res/atlas/game/ui.atlas",
                "res/atlas/game/clock.atlas", "res/atlas/game/operationImg.atlas", "res/atlas/game/direction.atlas",
                "res/atlas/game/handCard.atlas", "res/atlas/game/bgCard.atlas", "res/atlas/game/outCard/buttom_top.atlas",
                "res/atlas/game/outCard/left.atlas", "res/atlas/game/outCard/right.atlas", "res/atlas/game/hall.atlas",
                "res/atlas/game/roomNumInput.atlas", "res/atlas/game/head.atlas", "res/atlas/game/result.atlas",
                "res/atlas/game/anim/chi.atlas", "res/atlas/game/anim/peng.atlas", "res/atlas/game/anim/hu.atlas",
                "res/atlas/game/anim/gang.atlas", "res/atlas/game/anim/chip.atlas", "res/atlas/game/anim/drawn.atlas",
                "res/atlas/game/anim/open.atlas", "res/atlas/game/anim/ting.atlas", "res/atlas/game/anim/pointer.atlas",
                "res/atlas/game/chat.atlas"], Handler.create(this, this.onLoaded), Handler.create(this, this.onLoadProgress, null, false), Loader.ATLAS);
        };
        LoadingScene.prototype.onLoadProgress = function (value) {
            this.update(value);
        };
        LoadingScene.prototype.onLoaded = function () {
            MjGame.Log.print("onLoaded");
            // 初始化服务器监听
            MjGame.ProxyManager.getInstance();
            // Laya.stage.scale(0.3,0.3);
            var loginScene = new MjGame.LoginScene();
            Laya.stage.addChild(loginScene);
            this.removeSelf();
        };
        LoadingScene.prototype.update = function (value) {
            this.loadingBar.value = value;
            this.loadingLabel.text = "正在加载资源中... ...(已加载" + Math.ceil(value * 100) + "%) 提示:第一次打开需要流量10M左右,之后会缓存，所以建议第一次请在wifi下打开！";
        };
        return LoadingScene;
    }(ui.game.scene.LoadingSceneUI));
    MjGame.LoadingScene = LoadingScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=LoadingScene.js.map