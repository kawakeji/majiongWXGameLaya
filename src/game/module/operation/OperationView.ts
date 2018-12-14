/**
* name 
*/
module MjGame{
	import Image = Laya.Image;
	export class OperationView extends ui.game.view.OperationUI
	{
		viewArr:Array<Image>;
		handCardCm:HandCardCm;
        tempChiPaiView:Laya.Box;
        curChiPaiIndex:number;
		isCanDrag:boolean;
		constructor()
        {
			super();
			this.init();
		}

		init()
		{
			this.viewArr = [this.huBtn,this.gangBtn,this.pengBtn,this.chiBtn,this.quitBtn];
			for (var btn of this.viewArr) {
				btn.on(Laya.Event.CLICK,this,this.onClickControl);
			}

            this.tempChiPaiView = new Laya.Box();
            this.tempChiPaiView.y = -50;
            this.tempChiPaiView.x = 0;
            this.addChild(this.tempChiPaiView);
			this.hideAllBtn()
		}

		onClickControl(e:Event):void
		{
			switch(<Image><any>e.currentTarget)
			{
				case this.outBtn:
				{
					if(this.handCardCm.curClickCard)
					{
						this.hideAllBtn();
						EventManager.getInstance().event(ClientHandEvent.WAITING_OUT_MJ,[this.handCardCm.curClickCard.stPai]);
					}
					else
					{
						console.log("请选择要打的牌！");
					}
					break;
				}
				case this.chiBtn:
				{
					if(CMJManager.getInstance().curOutPai)
					{
						this.hideAllBtn();
						this.showChiView();
					}
					break;
				}
				case this.pengBtn:
				{
					if(CMJManager.getInstance().curOutPai)
					{
						this.hideAllBtn();
						EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_PENG,[ClientHandEvent.WAITING_OPERATION_PENG]);
					}
					break;
				}
				case this.gangBtn:
				{
					if(CMJManager.getInstance().curOutPai)
					{
						this.hideAllBtn();
						EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_GANG,[ClientHandEvent.WAITING_OPERATION_GANG]);
					}
					break;
				}
				case this.huBtn:
				{
					if(CMJManager.getInstance().curOutPai)
					{
						this.hideAllBtn();
						EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_HU,[ClientHandEvent.WAITING_OPERATION_HU]);
					}
					break;
				}
				case this.quitBtn:
				{
                    var oType:number = Constants.O_TYPE_NULL;
					if(this.huBtn.visible == true)
					{
						oType = Constants.O_TYPE_HU;
					}
					else if(this.gangBtn.visible == true)
					{
						oType = Constants.O_TYPE_GANG;
					}
					else if(this.pengBtn.visible == true)
					{
						oType = Constants.O_TYPE_PENG;
					}
					else if(this.chiBtn.visible == true)
					{
						oType = Constants.O_TYPE_CHI;
					}
					this.hideAllBtn();
					EventManager.getInstance().event(ClientHandEvent.QUIT_OPERATION,[ClientHandEvent.QUIT_OPERATION,oType]);
					break;
				}
				default:
				{
					break;
				}
			}
		}

		hideAllBtn()
		{
			this.quitBtn.visible = false;
			this.outBtn.visible = false;
			this.chiBtn.visible = false;
			this.pengBtn.visible = false;
			this.gangBtn.visible = false;
			this.huBtn.visible = false;
			this.tempChiPaiView.removeChildren();
			this.isCanDrag = false;
		}

        showOutBtn()
        {
			this.isCanDrag = true;
			// this.outBtn.visible = false;
            // this.refreshPos();
        }

        showView(operations:any)
        {
            this.isCanDrag = false;
            if (operations[Constants.O_TYPE_DA])
            {
                this.showOutBtn();
                this.quitBtn.visible = false;
            }
            else
            {
                for (var oType = 1; oType < 5; oType++) 
                {
                    var isExist:boolean = operations[oType];
                    if (isExist)
                    {
                        this.viewArr[oType-1].visible = true;
                        this.quitBtn.visible = true;
                    }
                    else
                    {
                        this.viewArr[oType-1].visible = false;
                    }
                }
            }
            this.refreshPos();
        }

		showHuBtn(returnVal:boolean)
		{
			this.isCanDrag = false;
			if(returnVal)
            {
                this.huBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else
            {
                this.huBtn.visible = false;
            }
            this.refreshPos();
		}

		showChiBtn(returnVal:boolean)
		{
			this.isCanDrag = false;
			if(returnVal)
            {
                this.chiBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else
            {
                this.chiBtn.visible = false;
            }
            this.refreshPos();
		}

		showPengBtn(returnVal:boolean)
		{
			this.isCanDrag = false;
			if(returnVal)
            {
                this.pengBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else
            {
                this.pengBtn.visible = false;
            }
            this.refreshPos();
		}

		showGangBtn(returnVal:boolean)
		{
			this.isCanDrag = false;
			if(returnVal)
            {
                this.gangBtn.visible = true;
                this.quitBtn.visible = true;
            }
            else
            {
                this.gangBtn.visible = false;
            }
            this.refreshPos();
		}


		setHandCardCm(handCardCm:HandCardCm)
		{
			this.handCardCm = handCardCm;
		}

		showChiView()
		{
            let chiPaiNum:number = this.handCardCm.cmj.getChiPaiNum()
			if(chiPaiNum > 1)
            {
                this.tempChiPaiView.removeChildren();
                var tempStChi:StCHI;
                var chiCards:CHICards;
                for (var i:number = 0; i < chiPaiNum; i++) 
                {
                    chiCards = new CHICards();
					this.tempChiPaiView.addChild(chiCards);
                    tempStChi = this.handCardCm.cmj.m_TempChiPAIVec[i];
                    chiCards.setData(tempStChi);
                    chiCards.x = i * chiCards.width - 10;
                    chiCards.index = i;
                    chiCards.on(Laya.Event.CLICK,this,this.onClickChiCards);                    
                }

                var quitChiBtn:Laya.Image = new Laya.Image;
                quitChiBtn.skin = "game/operationImg/btn_type1.png";
                quitChiBtn.x = chiCards.x + chiCards.width;
                quitChiBtn.on(Laya.Event.CLICK,this,this.onQuitChiBtn);
                this.tempChiPaiView.addChild(quitChiBtn);
			}
            else if(chiPaiNum > 0)
            {
                EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_CHI,[ClientHandEvent.WAITING_OPERATION_CHI,0]);
            }
		}
		
        onClickChiCards(evt:Event):void
        {
            var selectedChiCards:CHICards = <CHICards><any>evt.currentTarget;
			this.curChiPaiIndex = selectedChiCards.index;
			EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_CHI,[ClientHandEvent.WAITING_OPERATION_CHI,this.curChiPaiIndex]);
			this.tempChiPaiView.removeChildren();
        }

        onQuitChiBtn()
        {
            this.tempChiPaiView.removeChildren();
            this.hideAllBtn();
            EventManager.getInstance().event(ClientHandEvent.QUIT_OPERATION,[ClientHandEvent.QUIT_OPERATION,Constants.O_TYPE_CHI]);
        }

		refreshPos():void
		{
			var btn:Image;
			var oX:number = 0;
			for (var i:number = 0; i < this.viewArr.length; i++) 
			{
				btn = this.viewArr[i];
				if(btn.visible == true)
				{
					btn.x = oX;
					oX += btn.width + 5;
				}
			}
		}
	}
}