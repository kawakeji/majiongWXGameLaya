import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;
import DeskScene = MjGame.DeskScene;
import GlobalConfig = MjGame.GlobalConfig;
import LoginScene = MjGame.LoginScene;
import ProxyManager = MjGame.ProxyManager;

class TestUI extends ui.test.TestPageUI {

	constructor() {
		super();
		//btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
		this.btn.on(Laya.Event.CLICK, this, this.onBtnClick);
		this.btn2.on(Laya.Event.CLICK, this, this.onBtn2Click);
	}

	private onBtnClick(): void {
		//手动控制组件属性
		this.radio.selectedIndex = 1;
		this.clip.index = 8;
		this.tab.selectedIndex = 2;
		this.combobox.selectedIndex = 0;
		this.check.selected = true;
	}

	private onBtn2Click(): void {
		//通过赋值可以简单快速修改组件属性
		//赋值有两种方式：
		//简单赋值，比如：progress:0.2，就是更改progress组件的value为2
		//复杂复制，可以通知某个属性，比如：label:{color:"#ff0000",text:"Hello LayaAir"}
		this.box.dataSource = { slider: 50, scroll: 80, progress: 0.2, input: "This is a input", label: { color: "#ff0000", text: "Hello LayaAir" } };

		//list赋值，先获得一个数据源数组
		var arr: Array<any> = [];
		for (var i: number = 0; i < 100; i++) {
			arr.push({ label: "item " + i, clip: i % 9 });
		}

		//给list赋值更改list的显示
		this.list.array = arr;

		//还可以自定义list渲染方式，可以打开下面注释看一下效果
		//list.renderHandler = new Handler(this, onListRender);
	}

	private onListRender(item: Laya.Box, index: number): void {
		//自定义list的渲染方式
		var label: Label = item.getChildByName("label") as Label;
		if (index % 2) {
			label.color = "#ff0000";
		} else {
			label.color = "#000000";
		}
	}
}

//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(GlobalConfig.DESK_WIDHT, GlobalConfig.DESK_HEIGHT, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;

function beginLoad(){
	Laya.loader.load(["res/atlas/comp.atlas","res/atlas/game/ui.atlas",
	"res/atlas/game/clock.atlas","res/atlas/game/operationImg.atlas","res/atlas/game/direction.atlas",
	"res/atlas/game/handCard.atlas","res/atlas/game/bgCard.atlas","res/atlas/game/outCard/buttom_top.atlas",
	"res/atlas/game/outCard/left.atlas","res/atlas/game/outCard/right.atlas","res/atlas/game/hall.atlas",
	"res/atlas/game/roomNumInput.atlas","res/atlas/game/head.atlas","res/atlas/game/result.atlas",
    "res/atlas/game/anim/chi.atlas","res/atlas/game/anim/peng.atlas","res/atlas/game/anim/hu.atlas",
    "res/atlas/game/anim/gang.atlas","res/atlas/game/anim/chip.atlas","res/atlas/game/anim/drawn.atlas",
    "res/atlas/game/anim/open.atlas","res/atlas/game/anim/ting.atlas","res/atlas/game/anim/pointer.atlas"], Handler.create(null, onLoaded));
}

function onLoaded(): void {
	//实例UI界面
	// var testUI: TestUI = new TestUI();
	// Laya.stage.addChild(testUI);
	// var deskScene:DeskScene = new DeskScene();

	// 初始化服务器监听
	ProxyManager.getInstance();

	var loginScene:LoginScene = new LoginScene();
	Laya.stage.addChild(loginScene);
}