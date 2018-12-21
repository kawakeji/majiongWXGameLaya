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
    var OperationView = /** @class */ (function (_super) {
        __extends(OperationView, _super);
        function OperationView() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        OperationView.prototype.init = function () {
            this.viewArr = [this.huBtn, this.gangBtn, this.pengBtn, this.chiBtn, this.quitBtn];
            for (var _i = 0, _a = this.viewArr; _i < _a.length; _i++) {
                var btn = _a[_i];
                btn.on(Laya.Event.CLICK, this, this.onClickControl);
            }
            this.tempChiPaiView = new Laya.Box();
            this.tempChiPaiView.y = -50;
            this.tempChiPaiView.x = 0;
            this.addChild(this.tempChiPaiView);
            this.hideAllBtn();
        };
        OperationView.prototype.onClickControl = function (e) {
            switch (e.currentTarget) {
                case this.outBtn:
                    {
                        // if(this.handCardCm.curClickCard)
                        // {
                        // this.hideAllBtn();
                        // EventManager.getInstance().event(ClientHandEvent.WAITING_OUT_MJ,[this.handCardCm.curClickCard.stPai]);
                        // }
                        // else
                        // {
                        // 	console.log("请选择要打的牌！");
                        // }
                        break;
                    }
                case this.chiBtn:
                    {
                        // if(CMJManager.getInstance().curOutPai)
                        // {
                        this.hideAllBtn();
                        this.showChiView();
                        // }
                        break;
                    }
                case this.pengBtn:
                    {
                        // if(CMJManager.getInstance().curOutPai)
                        // {
                        this.hideAllBtn();
                        MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OPERATION_PENG, [MjGame.ClientHandEvent.WAITING_OPERATION_PENG]);
                        // }
                        break;
                    }
                case this.gangBtn:
                    {
                        // if(CMJManager.getInstance().curOutPai)
                        // {
                        this.hideAllBtn();
                        MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OPERATION_GANG, [MjGame.ClientHandEvent.WAITING_OPERATION_GANG]);
                        // }
                        break;
                    }
                case this.huBtn:
                    {
                        // if(CMJManager.getInstance().curOutPai)
                        // {
                        this.hideAllBtn();
                        MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OPERATION_HU, [MjGame.ClientHandEvent.WAITING_OPERATION_HU]);
                        // }
                        break;
                    }
                case this.quitBtn:
                    {
                        this.sendQuitOperation();
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        };
        OperationView.prototype.hideAllBtn = function () {
            this.quitBtn.visible = false;
            this.outBtn.visible = false;
            this.chiBtn.visible = false;
            this.pengBtn.visible = false;
            this.gangBtn.visible = false;
            this.huBtn.visible = false;
            this.tempChiPaiView.removeChildren();
            this.isCanDrag = false;
        };
        OperationView.prototype.showOutBtn = function () {
            this.isCanDrag = true;
            // this.outBtn.visible = false;
            // this.refreshPos();
        };
        OperationView.prototype.showView = function (operations) {
            this.isCanDrag = false;
            if (operations[MjGame.Constants.O_TYPE_DA]) {
                this.showOutBtn();
                this.quitBtn.visible = false;
            }
            else {
                for (var oType = 1; oType < 5; oType++) {
                    var isExist = operations[oType];
                    if (isExist) {
                        this.viewArr[oType - 1].visible = true;
                        this.quitBtn.visible = true;
                    }
                    else {
                        this.viewArr[oType - 1].visible = false;
                    }
                }
            }
            this.refreshPos();
        };
        OperationView.prototype.showHuBtn = function (returnVal) {
            this.isCanDrag = false;
            if (returnVal) {
                this.huBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else {
                this.huBtn.visible = false;
            }
            this.refreshPos();
        };
        OperationView.prototype.showChiBtn = function (returnVal) {
            this.isCanDrag = false;
            if (returnVal) {
                this.chiBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else {
                this.chiBtn.visible = false;
            }
            this.refreshPos();
        };
        OperationView.prototype.showPengBtn = function (returnVal) {
            this.isCanDrag = false;
            if (returnVal) {
                this.pengBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else {
                this.pengBtn.visible = false;
            }
            this.refreshPos();
        };
        OperationView.prototype.showGangBtn = function (returnVal) {
            this.isCanDrag = false;
            if (returnVal) {
                this.gangBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else {
                this.gangBtn.visible = false;
            }
            this.refreshPos();
        };
        OperationView.prototype.setHandCardCm = function (handCardCm) {
            this.handCardCm = handCardCm;
        };
        OperationView.prototype.showChiView = function () {
            var chiPaiNum = this.handCardCm.cmj.getChiPaiNum();
            if (chiPaiNum > 1) {
                this.tempChiPaiView.removeChildren();
                var tempStChi;
                var chiCards;
                for (var i = 0; i < chiPaiNum; i++) {
                    chiCards = new MjGame.CHICards();
                    this.tempChiPaiView.addChild(chiCards);
                    tempStChi = this.handCardCm.cmj.m_TempChiPAIVec[i];
                    chiCards.setData(tempStChi);
                    chiCards.x = i * chiCards.width - 10;
                    chiCards.index = i;
                    chiCards.on(Laya.Event.CLICK, this, this.onClickChiCards);
                }
                var quitChiBtn = new Laya.Image;
                quitChiBtn.skin = "game/operationImg/btn_type1.png";
                quitChiBtn.x = chiCards.x + chiCards.width;
                quitChiBtn.on(Laya.Event.CLICK, this, this.onQuitChiBtn);
                this.tempChiPaiView.addChild(quitChiBtn);
            }
            else if (chiPaiNum > 0) {
                MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OPERATION_CHI, [MjGame.ClientHandEvent.WAITING_OPERATION_CHI, 0]);
            }
        };
        OperationView.prototype.onClickChiCards = function (evt) {
            var selectedChiCards = evt.currentTarget;
            this.curChiPaiIndex = selectedChiCards.index;
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.WAITING_OPERATION_CHI, [MjGame.ClientHandEvent.WAITING_OPERATION_CHI, this.curChiPaiIndex]);
            this.tempChiPaiView.removeChildren();
        };
        OperationView.prototype.onQuitChiBtn = function () {
            this.tempChiPaiView.removeChildren();
            this.hideAllBtn();
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.QUIT_OPERATION, [MjGame.ClientHandEvent.QUIT_OPERATION, MjGame.Constants.O_TYPE_CHI]);
        };
        OperationView.prototype.refreshPos = function () {
            var btn;
            var oX = 0;
            for (var i = 0; i < this.viewArr.length; i++) {
                btn = this.viewArr[i];
                if (btn.visible == true) {
                    btn.x = oX;
                    oX += btn.width + 5;
                }
            }
        };
        OperationView.prototype.sendQuitOperation = function () {
            var oType = MjGame.Constants.O_TYPE_NULL;
            if (this.huBtn.visible == true) {
                oType = MjGame.Constants.O_TYPE_HU;
            }
            else if (this.gangBtn.visible == true) {
                oType = MjGame.Constants.O_TYPE_GANG;
            }
            else if (this.pengBtn.visible == true) {
                oType = MjGame.Constants.O_TYPE_PENG;
            }
            else if (this.chiBtn.visible == true) {
                oType = MjGame.Constants.O_TYPE_CHI;
            }
            this.hideAllBtn();
            MjGame.EventManager.getInstance().event(MjGame.ClientHandEvent.QUIT_OPERATION, [MjGame.ClientHandEvent.QUIT_OPERATION, oType]);
        };
        return OperationView;
    }(ui.game.view.OperationUI));
    MjGame.OperationView = OperationView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=OperationView.js.map