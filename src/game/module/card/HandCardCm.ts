/**
* name 
*/
module MjGame{
	export class HandCardCm
    {
        parentView:View;
        outCardCm:OutCardCm;
        operationView:OperationView;
        cardPos:number;
		curClickCard:HandCard;
        cmj:CMJ;
        player:PlayerVO;
		constructor(parentView:View,outCardCm:OutCardCm,player:PlayerVO,cardPos:number)
		{
            this.parentView = parentView;
            this.outCardCm = outCardCm;
            this.player = player;
			this.cardPos = cardPos;

            if(this.cardPos == GlobalConfig.DOWN_POS)
            {
                this.operationView = new OperationView();
                this.operationView.pos(300,420);
                parentView.parent.addChild(this.operationView);
                this.operationView.setHandCardCm(this)
                EventManager.getInstance().on(ClientHandEvent.SHOW_OUT_BTN,this,this.showOutBtn);
            }
		}

        showOutBtn():void
        {
            this.operationView.showOutBtn();
        }

        clearCurCard():void
		{
			if(this.curClickCard)
			{
				this.curClickCard.pos(this.curClickCard.x,this.curClickCard.cardOldPosY);
			}
			this.curClickCard = null;
		}
        
        addPai(pai:StPAI):void
        {
            this.cmj.addPai(pai);
            this.updateHandCard(this.cmj);
        }
        
        delPai(pai:StPAI):void
        {
            this.cmj.delPai(pai);
            this.updateHandCard(this.cmj,false);
        }
        
        cleanUp():void
        {
            // this.cmj.cleanUp();
        }

        showOpertaionView(operations:any)
        {
            this.operationView.showView(operations);
        }
        
        checkHU(pai:StPAI):boolean
        {
            var returnVal:boolean = this.cmj.checkHU(pai);
            this.operationView.showHuBtn(returnVal);
            return returnVal;
        }
        
        checkChiPai(pai:StPAI):boolean
        {
            var returnVal:boolean = this.cmj.checkChiPai(pai);
            this.operationView.showChiBtn(returnVal);
            return returnVal;
        }
        
        checkPengPai(pai:StPAI):boolean
        {
            var returnVal:boolean = this.cmj.checkPengPai(pai);
            this.operationView.showPengBtn(returnVal);
            return returnVal;
        }
        
        checkGangPai(pai:StPAI,isSelfHad:boolean = true):boolean
        {
            var returnVal:boolean = this.cmj.checkGangPai(pai,isSelfHad);
            this.operationView.showGangBtn(returnVal);
            return returnVal;
        }
        
        doChiPai(idx:number, curOutPai:StPAI):boolean
        {
            var flag:boolean = this.cmj.doChiPai(idx, curOutPai);
            this.updateHandCard(this.cmj);
            return flag;
        }

        doChiPaiServer(stChi:StCHI)
        {
            this.cmj.doChiPaiServer(stChi);
            this.updateHandCard(this.cmj);
            return true;
        }
        
        doGangPai(curOutPai:StPAI):boolean
        {
            var flag:boolean = this.cmj.doGangPai(curOutPai);
            this.updateHandCard(this.cmj);
            return flag;
        }
        
        doPengPai(curOutPai:StPAI):boolean
        {
            var flag:boolean = this.cmj.doPengPai(curOutPai);
            this.updateHandCard(this.cmj);
            return flag;
        }

		updateHandCard(cmj:CMJ, isShowLast:boolean = true)
		{
            this.cmj = cmj;
            this.parentView.removeChildren();
            var index:number = 0;
            var ret:any = this.addChiPengGangPai(cmj);
            var startX = ret.startX;
            var startY = ret.startY;
            var card:HandCard;
            var arr:Array<number>;
            var tempStPai:StPAI;
            var lastStPai:StPAI;
            for (var j:number = 0; j < GlobalConfig.CARD_TYPE_NUM; j ++) 
            {
                arr = cmj.m_MyPAIVec[j];
                if(arr[0] > 0)
                {
                    for (var i:number = 1; i < GlobalConfig.CARD_VALUE_NUM; i++) 
                    {
                        for (var k:number = 0; k < arr[i]; k++) 
                        {
                            tempStPai = new StPAI(j,i);
                            if(isShowLast && this.cardPos == GlobalConfig.DOWN_POS && cmj.m_LastPAI.m_Type == tempStPai.m_Type && cmj.m_LastPAI.m_Value == tempStPai.m_Value)
                            {
                                lastStPai = cmj.m_LastPAI;
                                isShowLast = false;
                                continue;
                            }
                            card = new HandCard();
                            card.cardPos = this.cardPos;
                            this.parentView.addChild(card);  
                            card.setData(tempStPai,startX,startY,index);
                            if (this.cardPos == GlobalConfig.DOWN_POS)
                            {
                                // card.addClickHandler(this,this.on)
                                card.addClickHandler(this,this.onBtnClick)
                                // card.on(Laya.Event.CLICK, this, this.onBtnClick); 
                            }
                            
                            index ++;
                        }
                    }
                }
            }

            if(lastStPai )
            {
                this.addLastPai(lastStPai,startX,startY,index);
            }
            this.updateOutCard(cmj);
            this.clearCurCard();
		}

        addLastPai(lastStPai:StPAI,startX:number,startY:number,index:number):void
        {
            var card:HandCard = new HandCard();
            card.cardPos = this.cardPos;
            this.parentView.addChild(card);  
            card.setData(lastStPai,startX + 10,startY,index);
            card.addClickHandler(this,this.onBtnClick);
            // card.on(Laya.Event.CLICK, this, this.onBtnClick); 
        }

        updateOutCard(cmj)
        {
            this.outCardCm.updateOutCard(cmj);
        }

        onBtnClick(card:HandCard): void 
        {
            console.log("onBtnclick");
            EventManager.getInstance().event(ClientHandEvent.WAITING_OUT_MJ,[card.stPai]);
            // var card = <HandCard><any>e.currentTarget;
            // if (this.curClickCard != card && this.curClickCard)
            // {
            //     this.curClickCard.pos(this.curClickCard.x,this.curClickCard.cardOldPosY);
            // }
            // console.log("onBtnclick",card.index);
            // //手动控制组件属性
            // if (card.y == card.cardOldPosY)
            // {
            //     card.pos(card.x,card.cardOldPosY-20);
            //     this.curClickCard = card;
            // }
            // else
            // {
            //     card.pos(card.x,card.cardOldPosY);
            //     this.curClickCard = null;
            // }
        }

        onBtnClick2(e: Event): void 
        {
            console.log("onBtnclick",e);

            var card = <HandCard><any>e.currentTarget;
            if (this.curClickCard != card && this.curClickCard)
            {
                this.curClickCard.pos(this.curClickCard.x,this.curClickCard.cardOldPosY);
            }
            console.log("onBtnclick",card.index);
            //手动控制组件属性
            if (card.y == card.cardOldPosY)
            {
                card.pos(card.x,card.cardOldPosY-20);
                this.curClickCard = card;
            }
            else
            {
                card.pos(card.x,card.cardOldPosY);
                this.curClickCard = null;
            }
        }

        addChiPengGangPai(t_MyPlayer:CMJ):any
		{
			var card:OutCard;
            var tempPai:StPAI;
            var startX:number = 0;
            var startY:number = 0;
            var outPaiArr:Array<StPAI> = new Array();

			for (var i:number = 0; i < t_MyPlayer.m_ChiPAIVec.length; i++) 
			{
				var stChi:StCHI = t_MyPlayer.m_ChiPAIVec[i];
				for (var i2:number = 0; i2 < 3; i2++) 
				{
                    tempPai = util.getByChiPai(stChi,i2 + 1);
                    outPaiArr.push(tempPai);
				}
			}
			
			for (var j:number = 0; j < t_MyPlayer.m_PengPAIVec.length; j++) 
			{
                tempPai = t_MyPlayer.m_PengPAIVec[j];
				for (var i3:number = 0; i3 < 3; i3++) 
				{
                    outPaiArr.push(tempPai);
				}
			}
			
			for (var k:number = 0; k < t_MyPlayer.m_GangPAIVec.length; k++) 
			{
                tempPai = t_MyPlayer.m_PengPAIVec[j];
				for (var i4:number = 0; i4 < 4; i4++) 
				{
                    outPaiArr.push(tempPai);
				}
			}

            for (var index = 0; index < outPaiArr.length; index++) 
            {
                tempPai = outPaiArr[index];
                card = new OutCard(1);
                card.cardPos = this.cardPos;
                this.parentView.addChild(card);
                card.setData(tempPai,startX,startY,index);
            }

            if (card)
            {
                startX = card.startX;
                startY = card.startY;
            }

            var offX:number = 0;
            var offY:number = 0;
            if (this.cardPos == GlobalConfig.DOWN_POS)
            {
                offX = 30;
            }
            else if (this.cardPos == GlobalConfig.RIGHT_POS)
            {
                offY = -30;
            }
            else if (this.cardPos == GlobalConfig.UP_POS)
            {
                offX = -30;
            }
            else
            {
                offY = 30;
            }
			
			return {startX:startX + offX,startY:startY + offY};
		}
	}
}