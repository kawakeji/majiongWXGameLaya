
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.game.scene {
    export class DeskSceneUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"game/bg.png"}},{"type":"Clock","props":{"y":317,"x":572,"visible":false,"rotation":0,"runtime":"ui.game.view.ClockUI"}},{"type":"View","props":{"y":46,"x":288,"width":573,"height":164}},{"type":"View","props":{"y":466,"x":67,"width":1017,"height":162}},{"type":"View","props":{"y":125,"x":110,"width":210,"height":398}},{"type":"View","props":{"y":126,"x":835,"width":210,"height":398}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game.view.ClockUI",ui.game.view.ClockUI);

            super.createChildren();
            this.createView(ui.game.scene.DeskSceneUI.uiView);

        }

    }
}

module ui.game.view {
    export class ClockUI extends View {
		public timeLabel:Laya.FontClip;

        public static  uiView:any ={"type":"View","props":{"y":94,"x":94,"width":189,"visible":true,"pivotY":0.5,"pivotX":0.5,"height":189,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":-2,"skin":"game/clock/west.png"}},{"type":"Image","props":{"y":-56,"x":-54,"skin":"game/clock/west_up.png"}},{"type":"Image","props":{"y":0,"x":-1,"skin":"game/clock/south.png"}},{"type":"Image","props":{"y":-1,"x":93,"skin":"game/clock/north.png"}},{"type":"Image","props":{"y":-56,"x":37,"visible":false,"skin":"game/clock/north_up.png"}},{"type":"Image","props":{"y":93,"x":-1,"skin":"game/clock/east.png"}},{"type":"Image","props":{"y":-55,"x":-57,"visible":false,"skin":"game/clock/south_up.png"}},{"type":"Image","props":{"y":39,"x":-54,"visible":false,"skin":"game/clock/east_up.png"}},{"type":"Image","props":{"y":57,"x":58,"skin":"game/clock/yuan.png"},"child":[{"type":"FontClip","props":{"var":"timeLabel","value":"12","skin":"game/clock/clock_num.png","sheet":"0123456789","centerY":0,"centerX":0}}]}]};
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

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"y":16,"x":3,"var":"card"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.HandCardUI.uiView);

        }

    }
}

module ui.game.view {
    export class OutCardUI extends View {
		public card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"var":"card","skin":"game/outCard/buttom_top/w_5.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game.view.OutCardUI.uiView);

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

        public static  uiView:any ={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}
