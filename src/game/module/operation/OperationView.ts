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
		constructor(){
			super();
			this.init();
		}
		init()
		{
			this.viewArr = [this.outBtn,this.chiBtn,this.pengBtn,this.gangBtn,this.huBtn,this.quitBtn];
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
						// EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_CHI,[this.handCardCm.curChiPaiIndex]);
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
					this.hideAllBtn();
					EventManager.getInstance().event(ClientHandEvent.QUIT_OPERATION,[ClientHandEvent.QUIT_OPERATION]);
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
			this.outBtn.visible = false;
            // this.refreshPos();
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
			// var t_Chi = new StCHI();
			// t_Chi.m_Type = 1;
			// t_Chi.m_Value1 = Number(2);
			// t_Chi.m_Value2 = Number(3);
			// t_Chi.m_Value3 = 4;
			// t_Chi.byChiIndex = 3;
			// this.handCardCm.cmj.m_TempChiPAIVec.push(t_Chi);
			if(this.handCardCm.cmj.getChiPaiNum() > 0)
            {
                this.tempChiPaiView.removeChildren();
                var tempStChi:StCHI;
                var chiCards:CHICards;
                for (var i:number = 0; i < this.handCardCm.cmj.getChiPaiNum(); i++) 
                {
                    chiCards = new CHICards();
					this.tempChiPaiView.addChild(chiCards);
                    tempStChi = this.handCardCm.cmj.m_TempChiPAIVec[i];
                    chiCards.setData(tempStChi);
                    chiCards.x = i * chiCards.width + 10;
                    chiCards.index = i;
                    chiCards.on(Laya.Event.CLICK,this,this.onClickChiCards);                    
                }
			}
		}
		
        onClickChiCards(evt:Event):void
        {
            var selectedChiCards:CHICards = <CHICards><any>evt.currentTarget;
			this.curChiPaiIndex = selectedChiCards.index;
			EventManager.getInstance().event(ClientHandEvent.WAITING_OPERATION_CHI,[ClientHandEvent.WAITING_OPERATION_CHI,this.curChiPaiIndex]);
			this.tempChiPaiView.removeChildren();
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