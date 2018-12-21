/**
* name 
*/
module MjGame{
    export class LoadingScene extends ui.game.scene.LoadingSceneUI
    {
		constructor()
        {
            super();
            this.beginLoad();
		}

        beginLoad()
        {
            Laya.loader.load(["res/atlas/comp.atlas","res/atlas/game/ui.atlas",
            "res/atlas/game/clock.atlas","res/atlas/game/operationImg.atlas","res/atlas/game/direction.atlas",
            "res/atlas/game/handCard.atlas","res/atlas/game/bgCard.atlas","res/atlas/game/outCard/buttom_top.atlas",
            "res/atlas/game/outCard/left.atlas","res/atlas/game/outCard/right.atlas","res/atlas/game/hall.atlas",
            "res/atlas/game/roomNumInput.atlas","res/atlas/game/head.atlas","res/atlas/game/result.atlas",
            "res/atlas/game/anim/chi.atlas","res/atlas/game/anim/peng.atlas","res/atlas/game/anim/hu.atlas",
            "res/atlas/game/anim/gang.atlas","res/atlas/game/anim/chip.atlas","res/atlas/game/anim/drawn.atlas",
            "res/atlas/game/anim/open.atlas","res/atlas/game/anim/ting.atlas","res/atlas/game/anim/pointer.atlas",
            "res/atlas/game/chat.atlas"], Handler.create(this, this.onLoaded),Handler.create(this,this.onLoadProgress,null,false),Loader.ATLAS);
        }

        onLoadProgress(value)
        {
            this.update(value);
        }

        onLoaded(): void 
        {
            Log.print("onLoaded");
            // 初始化服务器监听
            ProxyManager.getInstance();
            // Laya.stage.scale(0.3,0.3);
            var loginScene:LoginScene = new LoginScene();
            Laya.stage.addChild(loginScene);

            this.removeSelf();
        }

        update(value)
        {
            this.loadingBar.value = value;
            this.loadingLabel.text = "正在加载资源中... ...(已加载" + Math.ceil(value*100) + "%) 提示:第一次打开需要流量10M左右,之后会缓存，所以建议第一次请在wifi下打开！";
        }
    }
}