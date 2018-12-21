
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.game.dialog {
    export class AccountDialogUI extends Dialog {
		public closeBtn:Laya.Button;
		public continueBtn:Laya.Image;
		public contentView:View;
		public descLabel:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":1056,"height":540},"child":[{"type":"Image","props":{"y":-1,"x":-3,"width":1056,"skin":"game/result/win_di.png","sizeGrid":"10,10,10,10","height":540}},{"type":"Button","props":{"y":-11,"x":1014,"var":"closeBtn","stateNum":1,"skin":"game/roomNumInput/btn_close.png"}},{"type":"Image","props":{"y":438,"x":421,"var":"continueBtn","skin":"game/result/btn-2.png"}},{"type":"View","props":{"y":195,"x":169,"width":721,"var":"contentView","height":100}},{"type":"Label","props":{"y":133,"x":196,"var":"descLabel","text":"label","fontSize":35}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.dialog.AccountDialogUI.uiView);

        }

    }
}

module ui.game.dialog {
    export class AlertDialogUI extends Dialog {
		public closeBtn:Laya.Button;
		public contentLabel:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":370,"height":160},"child":[{"type":"Image","props":{"y":2,"x":-1,"width":370,"skin":"comp/bg.png","sizeGrid":"50,10,10,10","height":160}},{"type":"Button","props":{"y":5,"x":336,"width":0,"var":"closeBtn","stateNum":3,"skin":"comp/btn_close.png","height":0}},{"type":"Label","props":{"y":93,"x":192,"width":300,"var":"contentLabel","valign":"middle","text":"ddddddddddd","overflow":"visible","height":100,"fontSize":20,"color":"#120502","bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.dialog.AlertDialogUI.uiView);

        }

    }
}

module ui.game.dialog {
    export class RoomNumInputUI extends Dialog {
		public num0:Laya.Image;
		public num1:Laya.Image;
		public num2:Laya.Image;
		public num3:Laya.Image;
		public num4:Laya.Image;
		public num5:Laya.Image;
		public num6:Laya.Image;
		public reInputBtn:Laya.Image;
		public delBtn:Laya.Image;
		public num9:Laya.Image;
		public num8:Laya.Image;
		public num7:Laya.Image;
		public closeBtn:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":568,"height":428},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"game/roomNumInput/bg.png"}},{"type":"Image","props":{"y":350,"x":209,"var":"num0","skin":"game/roomNumInput/0.png"}},{"type":"Image","props":{"y":291,"x":42,"var":"num1","skin":"game/roomNumInput/1.png"}},{"type":"Image","props":{"y":292,"x":209,"var":"num2","skin":"game/roomNumInput/2.png"}},{"type":"Image","props":{"y":294,"x":378,"var":"num3","skin":"game/roomNumInput/3.png"}},{"type":"Image","props":{"y":226,"x":42,"var":"num4","skin":"game/roomNumInput/4.png"}},{"type":"Image","props":{"y":225,"x":209,"var":"num5","skin":"game/roomNumInput/5.png"}},{"type":"Image","props":{"y":227,"x":378,"var":"num6","skin":"game/roomNumInput/6.png"}},{"type":"Image","props":{"y":351,"x":40,"var":"reInputBtn","skin":"game/roomNumInput/chongshu.png"}},{"type":"Image","props":{"y":350,"x":378,"var":"delBtn","skin":"game/roomNumInput/shanchu.png"}},{"type":"Image","props":{"y":164,"x":378,"var":"num9","skin":"game/roomNumInput/9.png"}},{"type":"Image","props":{"y":164,"x":209,"var":"num8","skin":"game/roomNumInput/8.png"}},{"type":"Image","props":{"y":164,"x":42,"var":"num7","skin":"game/roomNumInput/7.png"}},{"type":"Button","props":{"y":-1,"x":510,"var":"closeBtn","stateNum":1,"skin":"game/roomNumInput/btn_close.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.dialog.RoomNumInputUI.uiView);

        }

    }
}

module ui.game.scene {
    export class DeskSceneUI extends View {
		public clockUI:ui.game.view.ClockUI;
		public upView:View;
		public leftView:View;
		public rightView:View;
		public outUpView:View;
		public outLeftView:View;
		public outRightView:View;
		public outDownView:View;
		public downView:View;
		public leftPlayerView:ui.game.view.PlayerViewUI;
		public upPlayerView:ui.game.view.PlayerViewUI;
		public downPlayerView:ui.game.view.PlayerViewUI;
		public rightPlayerView:ui.game.view.PlayerViewUI;
		public chatBtn:Laya.Image;
		public roomInfoView:ui.game.view.RoomInfoViewUI;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":-181,"x":-144,"skin":"game/loading/ui_di2.jpg"}},{"type":"Clock","props":{"y":320,"x":568,"visible":true,"var":"clockUI","rotation":0,"runtime":"ui.game.view.ClockUI"}},{"type":"View","props":{"y":12,"x":322,"width":492,"var":"upView","height":50}},{"type":"View","props":{"y":121,"x":169,"width":57,"var":"leftView","height":398}},{"type":"View","props":{"y":483,"x":942,"width":59,"var":"rightView","height":9}},{"type":"View","props":{"y":82,"x":801,"width":29,"var":"outUpView","rotation":0,"height":34}},{"type":"View","props":{"y":179,"x":202,"width":15,"var":"outLeftView","rotation":0,"height":29}},{"type":"View","props":{"y":390,"x":886,"width":17,"var":"outRightView","rotation":0,"height":26}},{"type":"View","props":{"y":471,"x":297,"width":56,"var":"outDownView","height":45}},{"type":"View","props":{"y":539,"x":198,"width":892,"var":"downView","height":89,"anchorY":0,"anchorX":0}},{"type":"PlayerView","props":{"y":236,"x":18,"var":"leftPlayerView","runtime":"ui.game.view.PlayerViewUI"}},{"type":"PlayerView","props":{"y":10,"x":818,"var":"upPlayerView","runtime":"ui.game.view.PlayerViewUI"}},{"type":"PlayerView","props":{"y":473,"x":36,"var":"downPlayerView","runtime":"ui.game.view.PlayerViewUI"}},{"type":"PlayerView","props":{"y":236,"x":1004,"var":"rightPlayerView","runtime":"ui.game.view.PlayerViewUI"}},{"type":"Image","props":{"y":457,"x":1058,"var":"chatBtn","skin":"game/chat/s_chat_shuohua_nomal.png"}},{"type":"RoomInfoView","props":{"y":3,"x":-1,"var":"roomInfoView","runtime":"ui.game.view.RoomInfoViewUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game.view.ClockUI",ui.game.view.ClockUI);
			View.regComponent("ui.game.view.PlayerViewUI",ui.game.view.PlayerViewUI);
			View.regComponent("ui.game.view.RoomInfoViewUI",ui.game.view.RoomInfoViewUI);

            super.createChildren();
            this.createView(ui.game.scene.DeskSceneUI.uiView);

        }

    }
}

module ui.game.scene {
    export class HallSceneUI extends View {
		public createRoomBtn:Laya.Button;
		public enterRoomBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":-181,"x":-144,"skin":"game/loading/ui_di2.jpg"}},{"type":"Button","props":{"y":72,"x":209,"var":"createRoomBtn","stateNum":1,"skin":"game/hall/btn_craeteRoom.png"}},{"type":"Button","props":{"y":204,"x":208,"var":"enterRoomBtn","stateNum":1,"skin":"game/hall/btn_enterRoom.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.scene.HallSceneUI.uiView);

        }

    }
}

module ui.game.scene {
    export class LoadingSceneUI extends View {
		public bg:Laya.Image;
		public loadingBar:Laya.ProgressBar;
		public loadingLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":1136,"height":640},"child":[{"type":"Image","props":{"y":-181,"x":-144,"var":"bg","skin":"game/loading/ui_di2.jpg"}},{"type":"ProgressBar","props":{"y":530,"x":102,"var":"loadingBar","value":1,"skin":"game/loading/loadingBar.png"}},{"type":"Label","props":{"y":514,"x":568,"var":"loadingLabel","text":"当前进度：0% ","fontSize":30,"color":"#9f9a11","anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.scene.LoadingSceneUI.uiView);

        }

    }
}

module ui.game.scene {
    export class LoginSceneUI extends View {
		public username:Laya.TextInput;
		public loginBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"visible":true,"height":640},"child":[{"type":"Image","props":{"y":-181,"x":-144,"skin":"game/loading/ui_di2.jpg"},"child":[{"type":"Image","props":{"y":407,"x":582,"width":328,"skin":"game/ui/s_chat_button2nomal.png","sizeGrid":"20,20,20,20","height":52}},{"type":"TextInput","props":{"y":414,"x":597,"width":305,"var":"username","strokeColor":"#a544d2","stroke":2,"maxChars":14,"height":41,"fontSize":30}},{"type":"Button","props":{"y":469,"x":569,"var":"loginBtn","stateNum":1,"skin":"game/ui/btn_guest.png"}},{"type":"Label","props":{"y":419,"x":471,"text":"用户名：","fontSize":30,"color":"#0a0000","bold":true,"align":"right"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.scene.LoginSceneUI.uiView);

        }

    }
}

module ui.game.scene {
    export class RoomSceneUI extends View {
		public upPosPlayer:ui.game.view.PlayerViewUI;
		public leftPosPlayer:ui.game.view.PlayerViewUI;
		public rightPosPlayer:ui.game.view.PlayerViewUI;
		public downPosPlayer:ui.game.view.PlayerViewUI;
		public startBtn:Laya.Button;
		public readyBtn:Laya.Image;
		public roomNum:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":-181,"x":-144,"skin":"game/loading/ui_di2.jpg"}},{"type":"PlayerView","props":{"y":34,"x":510,"var":"upPosPlayer","runtime":"ui.game.view.PlayerViewUI"}},{"type":"PlayerView","props":{"y":208,"x":230,"var":"leftPosPlayer","runtime":"ui.game.view.PlayerViewUI"}},{"type":"PlayerView","props":{"y":208,"x":896,"var":"rightPosPlayer","runtime":"ui.game.view.PlayerViewUI"}},{"type":"PlayerView","props":{"y":367,"x":510,"var":"downPosPlayer","runtime":"ui.game.view.PlayerViewUI"}},{"type":"Button","props":{"y":543,"x":471,"var":"startBtn","stateNum":1,"skin":"game/ui/btn_start.png"}},{"type":"Image","props":{"y":539,"x":496,"visible":false,"var":"readyBtn","skin":"game/ui/room_btn.png"},"child":[{"type":"Image","props":{"y":12,"x":26,"skin":"game/ui/word_ready.png"}}]},{"type":"Label","props":{"y":38,"x":42,"var":"roomNum","text":"房间号：","fontSize":30,"color":"#000000","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game.view.PlayerViewUI",ui.game.view.PlayerViewUI);

            super.createChildren();
            this.createView(ui.game.scene.RoomSceneUI.uiView);

        }

    }
}

module ui.game.view {
    export class ChatViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":346,"height":413},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"game/chat/chat_bg.png"}},{"type":"Image","props":{"y":87,"x":39,"skin":"game/chat/1.png"}},{"type":"Image","props":{"y":136,"x":39,"skin":"game/chat/2.png"}},{"type":"Image","props":{"y":186,"x":39,"skin":"game/chat/3.png"}},{"type":"Image","props":{"y":288,"x":39,"skin":"game/chat/5.png"}},{"type":"Image","props":{"y":338,"x":39,"skin":"game/chat/6.png"}},{"type":"Image","props":{"y":240,"x":39,"skin":"game/chat/7.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.ChatViewUI.uiView);

        }

    }
}

module ui.game.view {
    export class ClockUI extends View {
		public upSelected:Laya.Image;
		public rightSelected:Laya.Image;
		public leftSelected:Laya.Image;
		public downSelected:Laya.Image;
		public timeLabel:Laya.FontClip;

        public static  uiView:any ={"type":"View","props":{"y":94,"x":94,"width":189,"visible":true,"pivotY":0.5,"pivotX":0.5,"height":189,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":-2,"skin":"game/clock/west.png"}},{"type":"Image","props":{"y":1,"x":3,"var":"upSelected","skin":"game/clock/west_up.png"}},{"type":"Image","props":{"y":0,"x":-1,"skin":"game/clock/south.png"}},{"type":"Image","props":{"y":-1,"x":93,"skin":"game/clock/north.png"}},{"type":"Image","props":{"y":1,"x":97,"visible":false,"var":"rightSelected","skin":"game/clock/north_up.png"}},{"type":"Image","props":{"y":93,"x":-1,"skin":"game/clock/east.png"}},{"type":"Image","props":{"y":3,"x":0,"visible":false,"var":"leftSelected","skin":"game/clock/south_up.png"}},{"type":"Image","props":{"y":96,"x":4,"visible":false,"var":"downSelected","skin":"game/clock/east_up.png"}},{"type":"Image","props":{"y":57,"x":58,"skin":"game/clock/yuan.png"},"child":[{"type":"FontClip","props":{"var":"timeLabel","value":"12","skin":"game/clock/clock_num.png","sheet":"0123456789","centerY":0,"centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.ClockUI.uiView);

        }

    }
}

module ui.game.view {
    export class HandCardUI extends View {
		public card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"card"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.HandCardUI.uiView);

        }

    }
}

module ui.game.view {
    export class OperationUI extends View {
		public quitBtn:Laya.Image;
		public huBtn:Laya.Image;
		public gangBtn:Laya.Image;
		public pengBtn:Laya.Image;
		public chiBtn:Laya.Image;
		public outBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":6,"x":596,"var":"quitBtn","skin":"game/operationImg/btn_type1.png"}},{"type":"Image","props":{"y":5,"x":480,"var":"huBtn","skin":"game/operationImg/btn_type5.png"}},{"type":"Image","props":{"y":6,"x":363,"var":"gangBtn","skin":"game/operationImg/btn_type4.png"}},{"type":"Image","props":{"y":6,"x":246,"var":"pengBtn","skin":"game/operationImg/btn_type3.png"}},{"type":"Image","props":{"y":6,"x":129,"var":"chiBtn","skin":"game/operationImg/btn_type2.png"}},{"type":"Image","props":{"y":-22,"x":-30,"var":"outBtn","skin":"game/operationImg/4tin.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.OperationUI.uiView);

        }

    }
}

module ui.game.view {
    export class OutCardUI extends View {
		public card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"var":"card"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.OutCardUI.uiView);

        }

    }
}

module ui.game.view {
    export class PlayerViewUI extends View {
		public headIcon:Laya.Image;
		public isReady:Laya.Image;
		public playerName:Laya.Label;
		public dealerImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":115,"visible":true,"height":118},"child":[{"type":"Image","props":{"y":0,"x":2,"var":"headIcon","skin":"game/head/local_head_01.png"}},{"type":"Image","props":{"y":-15,"x":-18,"skin":"game/head/kuang_on.png"}},{"type":"Image","props":{"y":36,"x":14,"var":"isReady","skin":"game/ui/word_ready.png"}},{"type":"Label","props":{"y":139,"x":56,"var":"playerName","text":"playerName","fontSize":20,"color":"#0acd1a","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":6,"x":79,"visible":false,"var":"dealerImg","skin":"game/operationImg/head_banker.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.PlayerViewUI.uiView);

        }

    }
}

module ui.game.view {
    export class RoomInfoViewUI extends View {
		public roomIdLabel:Laya.Label;
		public roomRoundNumLabel:Laya.Label;
		public hunContainer:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":150,"height":200},"child":[{"type":"Label","props":{"y":6,"x":9,"var":"roomIdLabel","text":"房间号：","fontSize":20,"color":"#31bea7","bold":true}},{"type":"Label","props":{"y":36,"x":9,"var":"roomRoundNumLabel","text":"label","fontSize":20,"color":"#31bea7","bold":true}},{"type":"Image","props":{"y":68,"x":11,"var":"hunContainer"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.RoomInfoViewUI.uiView);

        }

    }
}

module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/game/loginbg.png","sizeGrid":"30,4,4,4","height":400}},{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"comp/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"comp/label.png","name":"label","height":26,"fontSize":20}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]},{"type":"SkeletonPlayer","props":{"y":414,"x":-79,"url":"game/animation/1pen/1pen.sk"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}
