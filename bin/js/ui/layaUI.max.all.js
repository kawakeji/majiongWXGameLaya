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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var game;
    (function (game) {
        var dialog;
        (function (dialog) {
            var AccountDialogUI = /** @class */ (function (_super) {
                __extends(AccountDialogUI, _super);
                function AccountDialogUI() {
                    return _super.call(this) || this;
                }
                AccountDialogUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.dialog.AccountDialogUI.uiView);
                };
                AccountDialogUI.uiView = { "type": "Dialog", "props": {}, "child": [{ "type": "Image", "props": { "y": -12, "x": -228, "width": 1056, "skin": "game/result/win_di.png", "sizeGrid": "10,10,10,10", "height": 540 } }, { "type": "Button", "props": { "y": -30, "x": 789, "var": "closeBtn", "stateNum": 1, "skin": "game/roomNumInput/btn_close.png" } }, { "type": "Image", "props": { "y": 434, "x": 196, "var": "continueBtn", "skin": "game/result/btn-2.png" } }, { "type": "View", "props": { "y": 176, "x": -56, "width": 721, "var": "contentView", "height": 100 } }, { "type": "Label", "props": { "y": 114, "x": -29, "var": "descLabel", "text": "label", "fontSize": 35 } }] };
                return AccountDialogUI;
            }(Dialog));
            dialog.AccountDialogUI = AccountDialogUI;
        })(dialog = game.dialog || (game.dialog = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var dialog;
        (function (dialog) {
            var AlertDialogUI = /** @class */ (function (_super) {
                __extends(AlertDialogUI, _super);
                function AlertDialogUI() {
                    return _super.call(this) || this;
                }
                AlertDialogUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.dialog.AlertDialogUI.uiView);
                };
                AlertDialogUI.uiView = { "type": "Dialog", "props": { "width": 370, "height": 160 }, "child": [{ "type": "Image", "props": { "y": 2, "x": -1, "width": 370, "skin": "comp/bg.png", "sizeGrid": "50,10,10,10", "height": 160 } }, { "type": "Button", "props": { "y": 5, "x": 336, "width": 0, "var": "closeBtn", "stateNum": 3, "skin": "comp/btn_close.png", "height": 0 } }, { "type": "Label", "props": { "y": 93, "x": 192, "width": 300, "var": "contentLabel", "valign": "middle", "text": "ddddddddddd", "overflow": "visible", "height": 100, "fontSize": 20, "color": "#120502", "bold": false, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] };
                return AlertDialogUI;
            }(Dialog));
            dialog.AlertDialogUI = AlertDialogUI;
        })(dialog = game.dialog || (game.dialog = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var dialog;
        (function (dialog) {
            var RoomNumInputUI = /** @class */ (function (_super) {
                __extends(RoomNumInputUI, _super);
                function RoomNumInputUI() {
                    return _super.call(this) || this;
                }
                RoomNumInputUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.dialog.RoomNumInputUI.uiView);
                };
                RoomNumInputUI.uiView = { "type": "Dialog", "props": { "width": 568, "height": 428 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/roomNumInput/bg.png" } }, { "type": "Image", "props": { "y": 350, "x": 209, "var": "num0", "skin": "game/roomNumInput/0.png" } }, { "type": "Image", "props": { "y": 291, "x": 42, "var": "num1", "skin": "game/roomNumInput/1.png" } }, { "type": "Image", "props": { "y": 292, "x": 209, "var": "num2", "skin": "game/roomNumInput/2.png" } }, { "type": "Image", "props": { "y": 294, "x": 378, "var": "num3", "skin": "game/roomNumInput/3.png" } }, { "type": "Image", "props": { "y": 226, "x": 42, "var": "num4", "skin": "game/roomNumInput/4.png" } }, { "type": "Image", "props": { "y": 225, "x": 209, "var": "num5", "skin": "game/roomNumInput/5.png" } }, { "type": "Image", "props": { "y": 227, "x": 378, "var": "num6", "skin": "game/roomNumInput/6.png" } }, { "type": "Image", "props": { "y": 351, "x": 40, "var": "reInputBtn", "skin": "game/roomNumInput/chongshu.png" } }, { "type": "Image", "props": { "y": 350, "x": 378, "var": "delBtn", "skin": "game/roomNumInput/shanchu.png" } }, { "type": "Image", "props": { "y": 164, "x": 378, "var": "num9", "skin": "game/roomNumInput/9.png" } }, { "type": "Image", "props": { "y": 164, "x": 209, "var": "num8", "skin": "game/roomNumInput/8.png" } }, { "type": "Image", "props": { "y": 164, "x": 42, "var": "num7", "skin": "game/roomNumInput/7.png" } }, { "type": "Button", "props": { "y": -1, "x": 510, "var": "closeBtn", "stateNum": 1, "skin": "game/roomNumInput/btn_close.png" } }] };
                return RoomNumInputUI;
            }(Dialog));
            dialog.RoomNumInputUI = RoomNumInputUI;
        })(dialog = game.dialog || (game.dialog = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var scene;
        (function (scene) {
            var DeskSceneUI = /** @class */ (function (_super) {
                __extends(DeskSceneUI, _super);
                function DeskSceneUI() {
                    return _super.call(this) || this;
                }
                DeskSceneUI.prototype.createChildren = function () {
                    View.regComponent("ui.game.view.ClockUI", ui.game.view.ClockUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.scene.DeskSceneUI.uiView);
                };
                DeskSceneUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "visible": true, "skin": "game/game/loginbg.png" } }, { "type": "Clock", "props": { "y": 320, "x": 568, "visible": true, "var": "clockUI", "rotation": 0, "runtime": "ui.game.view.ClockUI" } }, { "type": "View", "props": { "y": 12, "x": 322, "width": 492, "var": "upView", "height": 50 } }, { "type": "View", "props": { "y": 539, "x": 198, "width": 793, "var": "downView", "height": 89, "anchorY": 0, "anchorX": 0 } }, { "type": "View", "props": { "y": 121, "x": 169, "width": 57, "var": "leftView", "height": 398 } }, { "type": "View", "props": { "y": 483, "x": 942, "width": 59, "var": "rightView", "height": 9 } }, { "type": "View", "props": { "y": 471, "x": 297, "width": 56, "var": "outDownView", "height": 45 } }, { "type": "View", "props": { "y": 82, "x": 801, "width": 29, "var": "outUpView", "rotation": 0, "height": 34 } }, { "type": "View", "props": { "y": 179, "x": 202, "width": 15, "var": "outLeftView", "rotation": 0, "height": 29 } }, { "type": "View", "props": { "y": 390, "x": 886, "width": 17, "var": "outRightView", "rotation": 0, "height": 26 } }, { "type": "Label", "props": { "var": "hunPai", "text": "label", "fontSize": 30 } }] };
                return DeskSceneUI;
            }(View));
            scene.DeskSceneUI = DeskSceneUI;
        })(scene = game.scene || (game.scene = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var scene;
        (function (scene) {
            var HallSceneUI = /** @class */ (function (_super) {
                __extends(HallSceneUI, _super);
                function HallSceneUI() {
                    return _super.call(this) || this;
                }
                HallSceneUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.scene.HallSceneUI.uiView);
                };
                HallSceneUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/hallLayer_bg.png" } }, { "type": "Image", "props": { "y": -4, "x": 0, "skin": "game/hall/top_bg.png" } }, { "type": "Image", "props": { "y": 186, "x": 80, "skin": "game/hall/createRoomBG.png" } }, { "type": "Button", "props": { "y": 430, "x": 206, "var": "createRoomBtn", "stateNum": 1, "skin": "game/hall/btn_craeteRoom.png" } }, { "type": "Image", "props": { "y": 186, "x": 650, "skin": "game/hall/enterRoomBG.png" } }, { "type": "Button", "props": { "y": 430, "x": 788, "var": "enterRoomBtn", "stateNum": 1, "skin": "game/hall/btn_enterRoom.png" } }] };
                return HallSceneUI;
            }(View));
            scene.HallSceneUI = HallSceneUI;
        })(scene = game.scene || (game.scene = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var scene;
        (function (scene) {
            var LoginSceneUI = /** @class */ (function (_super) {
                __extends(LoginSceneUI, _super);
                function LoginSceneUI() {
                    return _super.call(this) || this;
                }
                LoginSceneUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.scene.LoginSceneUI.uiView);
                };
                LoginSceneUI.uiView = { "type": "View", "props": { "width": 1136, "visible": true, "height": 640 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 1136, "lineWidth": 1, "height": 640, "fillColor": "#00a3ff" } }, { "type": "TextInput", "props": { "y": 420, "x": 452, "width": 224, "var": "username", "text": "logen", "height": 41, "fontSize": 25 } }, { "type": "Button", "props": { "y": 489, "x": 446, "var": "loginBtn", "stateNum": 1, "skin": "game/ui/btn_guest.png" } }] }] };
                return LoginSceneUI;
            }(View));
            scene.LoginSceneUI = LoginSceneUI;
        })(scene = game.scene || (game.scene = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var scene;
        (function (scene) {
            var RoomSceneUI = /** @class */ (function (_super) {
                __extends(RoomSceneUI, _super);
                function RoomSceneUI() {
                    return _super.call(this) || this;
                }
                RoomSceneUI.prototype.createChildren = function () {
                    View.regComponent("ui.game.view.PlayerViewUI", ui.game.view.PlayerViewUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.scene.RoomSceneUI.uiView);
                };
                RoomSceneUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "PlayerView", "props": { "y": 34, "x": 510, "var": "upPosPlayer", "runtime": "ui.game.view.PlayerViewUI" } }, { "type": "PlayerView", "props": { "y": 208, "x": 230, "var": "leftPosPlayer", "runtime": "ui.game.view.PlayerViewUI" } }, { "type": "PlayerView", "props": { "y": 208, "x": 896, "var": "rightPosPlayer", "runtime": "ui.game.view.PlayerViewUI" } }, { "type": "PlayerView", "props": { "y": 367, "x": 510, "var": "downPosPlayer", "runtime": "ui.game.view.PlayerViewUI" } }, { "type": "Button", "props": { "y": 543, "x": 471, "var": "startBtn", "stateNum": 1, "skin": "game/ui/btn_start.png" } }, { "type": "Image", "props": { "y": 539, "x": 496, "visible": false, "var": "readyBtn", "skin": "game/ui/room_btn.png" }, "child": [{ "type": "Image", "props": { "y": 12, "x": 26, "skin": "game/ui/word_ready.png" } }] }, { "type": "Label", "props": { "y": 38, "x": 42, "var": "roomNum", "text": "房间号：", "fontSize": 25, "color": "#ea0e0a" } }] };
                return RoomSceneUI;
            }(View));
            scene.RoomSceneUI = RoomSceneUI;
        })(scene = game.scene || (game.scene = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var view;
        (function (view) {
            var ClockUI = /** @class */ (function (_super) {
                __extends(ClockUI, _super);
                function ClockUI() {
                    return _super.call(this) || this;
                }
                ClockUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.view.ClockUI.uiView);
                };
                ClockUI.uiView = { "type": "View", "props": { "y": 94, "x": 94, "width": 189, "visible": true, "pivotY": 0.5, "pivotX": 0.5, "height": 189, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -1, "x": -2, "skin": "game/clock/west.png" } }, { "type": "Image", "props": { "y": 1, "x": 3, "var": "upSelected", "skin": "game/clock/west_up.png" } }, { "type": "Image", "props": { "y": 0, "x": -1, "skin": "game/clock/south.png" } }, { "type": "Image", "props": { "y": -1, "x": 93, "skin": "game/clock/north.png" } }, { "type": "Image", "props": { "y": 1, "x": 97, "visible": false, "var": "rightSelected", "skin": "game/clock/north_up.png" } }, { "type": "Image", "props": { "y": 93, "x": -1, "skin": "game/clock/east.png" } }, { "type": "Image", "props": { "y": 3, "x": 0, "visible": false, "var": "leftSelected", "skin": "game/clock/south_up.png" } }, { "type": "Image", "props": { "y": 96, "x": 4, "visible": false, "var": "downSelected", "skin": "game/clock/east_up.png" } }, { "type": "Image", "props": { "y": 57, "x": 58, "skin": "game/clock/yuan.png" }, "child": [{ "type": "FontClip", "props": { "var": "timeLabel", "value": "12", "skin": "game/clock/clock_num.png", "sheet": "0123456789", "centerY": 0, "centerX": 0 } }] }] };
                return ClockUI;
            }(View));
            view.ClockUI = ClockUI;
        })(view = game.view || (game.view = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var view;
        (function (view) {
            var HandCardUI = /** @class */ (function (_super) {
                __extends(HandCardUI, _super);
                function HandCardUI() {
                    return _super.call(this) || this;
                }
                HandCardUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.view.HandCardUI.uiView);
                };
                HandCardUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "card" } }] };
                return HandCardUI;
            }(View));
            view.HandCardUI = HandCardUI;
        })(view = game.view || (game.view = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var view;
        (function (view) {
            var OperationUI = /** @class */ (function (_super) {
                __extends(OperationUI, _super);
                function OperationUI() {
                    return _super.call(this) || this;
                }
                OperationUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.view.OperationUI.uiView);
                };
                OperationUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Image", "props": { "y": 6, "x": 596, "var": "quitBtn", "skin": "game/operationImg/btn_type1.png" } }, { "type": "Image", "props": { "y": 5, "x": 480, "var": "huBtn", "skin": "game/operationImg/btn_type5.png" } }, { "type": "Image", "props": { "y": 6, "x": 363, "var": "gangBtn", "skin": "game/operationImg/btn_type4.png" } }, { "type": "Image", "props": { "y": 6, "x": 246, "var": "pengBtn", "skin": "game/operationImg/btn_type3.png" } }, { "type": "Image", "props": { "y": 6, "x": 129, "var": "chiBtn", "skin": "game/operationImg/btn_type2.png" } }, { "type": "Image", "props": { "y": -22, "x": -30, "var": "outBtn", "skin": "game/operationImg/4tin.png" } }] };
                return OperationUI;
            }(View));
            view.OperationUI = OperationUI;
        })(view = game.view || (game.view = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var view;
        (function (view) {
            var OutCardUI = /** @class */ (function (_super) {
                __extends(OutCardUI, _super);
                function OutCardUI() {
                    return _super.call(this) || this;
                }
                OutCardUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.view.OutCardUI.uiView);
                };
                OutCardUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "var": "card" } }] };
                return OutCardUI;
            }(View));
            view.OutCardUI = OutCardUI;
        })(view = game.view || (game.view = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var view;
        (function (view) {
            var PlayerViewUI = /** @class */ (function (_super) {
                __extends(PlayerViewUI, _super);
                function PlayerViewUI() {
                    return _super.call(this) || this;
                }
                PlayerViewUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game.view.PlayerViewUI.uiView);
                };
                PlayerViewUI.uiView = { "type": "View", "props": { "width": 115, "height": 118 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 2, "var": "headIcon", "skin": "game/head/local_head_01.png" } }, { "type": "Image", "props": { "y": -15, "x": -18, "skin": "game/head/kuang_on.png" } }, { "type": "Image", "props": { "y": 36, "x": 14, "var": "isReady", "skin": "game/ui/word_ready.png" } }, { "type": "Label", "props": { "y": 139, "x": 56, "var": "playerName", "text": "playerName", "fontSize": 20, "color": "#0acd1a", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] };
                return PlayerViewUI;
            }(View));
            view.PlayerViewUI = PlayerViewUI;
        })(view = game.view || (game.view = {}));
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                View.regComponent("SkeletonPlayer", laya.ani.bone.Skeleton);
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 600, "skin": "comp/game/loginbg.png", "sizeGrid": "30,4,4,4", "height": 400 } }, { "type": "Button", "props": { "y": 56, "x": 41, "width": 150, "var": "btn", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "label": "点我赋值", "height": 37 } }, { "type": "Clip", "props": { "y": 56, "x": 401, "var": "clip", "skin": "comp/clip_num.png", "clipX": 10 } }, { "type": "ComboBox", "props": { "y": 143, "x": 220, "width": 200, "var": "combobox", "skin": "comp/combobox.png", "sizeGrid": "4,20,4,4", "selectedIndex": 1, "labels": "select1,select2,selecte3", "height": 23 } }, { "type": "Tab", "props": { "y": 96, "x": 220, "var": "tab", "skin": "comp/tab.png", "labels": "tab1,tab2,tab3" } }, { "type": "VScrollBar", "props": { "y": 223, "x": 259, "skin": "comp/vscroll.png", "height": 150 } }, { "type": "VSlider", "props": { "y": 223, "x": 224, "skin": "comp/vslider.png", "height": 150 } }, { "type": "List", "props": { "y": 68, "x": 452, "width": 128, "var": "list", "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "height": 299 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 112, "name": "render", "height": 30 }, "child": [{ "type": "Label", "props": { "y": 5, "x": 26, "width": 78, "text": "this is a list", "skin": "comp/label.png", "name": "label", "height": 20, "fontSize": 14 } }, { "type": "Clip", "props": { "y": 2, "x": 0, "skin": "comp/clip_num.png", "name": "clip", "clipX": 10 } }] }] }, { "type": "Button", "props": { "y": 4, "x": 563, "skin": "comp/btn_close.png", "name": "close" } }, { "type": "Button", "props": { "y": 112, "x": 41, "width": 150, "var": "btn2", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "labelSize": 30, "labelBold": true, "label": "点我赋值", "height": 66 } }, { "type": "CheckBox", "props": { "y": 188, "x": 220, "var": "check", "skin": "comp/checkbox.png", "label": "checkBox1" } }, { "type": "RadioGroup", "props": { "y": 61, "x": 220, "var": "radio", "skin": "comp/radiogroup.png", "labels": "radio1,radio2,radio3" } }, { "type": "Panel", "props": { "y": 223, "x": 299, "width": 127, "vScrollBarSkin": "comp/vscroll.png", "height": 150 }, "child": [{ "type": "Image", "props": { "skin": "comp/image.png" } }] }, { "type": "CheckBox", "props": { "y": 188, "x": 326, "skin": "comp/checkbox.png", "labelColors": "#ff0000", "label": "checkBox2" } }, { "type": "Box", "props": { "y": 197, "x": 41, "var": "box" }, "child": [{ "type": "ProgressBar", "props": { "y": 70, "width": 150, "skin": "comp/progress.png", "sizeGrid": "4,4,4,4", "name": "progress", "height": 14 } }, { "type": "Label", "props": { "y": 103, "width": 137, "text": "This is a Label", "skin": "comp/label.png", "name": "label", "height": 26, "fontSize": 20 } }, { "type": "TextInput", "props": { "y": 148, "width": 150, "text": "textinput", "skin": "comp/textinput.png", "name": "input" } }, { "type": "HSlider", "props": { "width": 150, "skin": "comp/hslider.png", "name": "slider" } }, { "type": "HScrollBar", "props": { "y": 34, "width": 150, "skin": "comp/hscroll.png", "name": "scroll" } }] }, { "type": "SkeletonPlayer", "props": { "y": 414, "x": -79, "url": "game/animation/1pen/1pen.sk" } }] };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map