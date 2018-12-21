import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;
import MjConfig = MjGame.MjConfig;
import GlobalConfig = MjGame.GlobalConfig;
import LoadingScene = MjGame.LoadingScene;

//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(GlobalConfig.DESK_WIDHT, GlobalConfig.DESK_HEIGHT, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, loadLoadingAtlas), Laya.ResourceVersion.FILENAME_VERSION);
//设置横竖屏
Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
//设置屏幕适配宽屏
Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
//设置水平对齐
Laya.stage.alignH = "center";
//设置垂直对齐
Laya.stage.alignV = "middle";

function loadLoadingAtlas()
{
    Laya.loader.load(["res/atlas/game/loading.atlas"], Handler.create(null, addLoadingView));
}

function addLoadingView()
{
    var loadingScene:LoadingScene = new LoadingScene();
    Laya.stage.addChild(loadingScene);
    if (MjConfig.IS_DEBUG)
    {
        Laya.stage.scale(0.4,0.4);
        GlobalConfig.IS_PLAY_SOUND = false;
        GlobalConfig.HOST = '127.0.0.1';
    }
    else
    {
        GlobalConfig.IS_PLAY_SOUND = true;
        GlobalConfig.HOST = '47.105.205.5';
    }
}