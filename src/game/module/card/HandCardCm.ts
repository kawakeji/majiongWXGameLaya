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
            MjSoundManager.getInstance().playOutCardSound(pai);
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
        
        doChiPaiServer(stChi:StCHI)
        {
            this.cmj.doChiPaiServer(stChi);
            this.updateHandCard(this.cmj);
            return true;
        }
        
        doPengPaiServer(stPeng:StPeng):boolean
        {
            this.cmj.doPengPaiServer(stPeng);
            this.updateHandCard(this.cmj);
            return true;
        }

        doGangPaiServer(stGang:StGang):boolean
        {
            this.cmj.doGangPaiServer(stGang);
            this.updateHandCard(this.cmj);
            return true;
        }
        

        timeOut()
        {
            if(this.operationView.isCanDrag)
            {
                var firstPai:StPAI = this.cmj.getPaiByPos(1);
                MjSoundManager.getInstance().playCommonSound(SoundType.OUT_CARD);
                EventManager.getInstance().event(ClientHandEvent.WAITING_OUT_MJ,[firstPai]);
            }
            else
            {
                this.operationView.sendQuitOperation()
            }
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
                            if(isShowLast && this.cardPos == GlobalConfig.DOWN_POS && cmj.m_LastPAI && 
                                cmj.m_LastPAI.m_Type == tempStPai.m_Type && cmj.m_LastPAI.m_Value == tempStPai.m_Value)
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
                                card.addClickHandler(this,this.onCardClick)
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
            card.addClickHandler(this,this.onCardClick);
        }

        updateOutCard(cmj)
        {
            this.outCardCm.updateOutCard(cmj);
        }

        onCardClick(card:HandCard): void 
        {
            this.operationView.isCanDrag = false;
            MjSoundManager.getInstance().playCommonSound(SoundType.OUT_CARD);
            EventManager.getInstance().event(ClientHandEvent.WAITING_OUT_MJ,[card.stPai]);
        }

        getLastOutCard():Laya.Image
        {
            return this.outCardCm.getLastOutCard();
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
                if (stChi)
                {
                    for (var i2:number = 0; i2 < 3; i2++) 
                    {
                        tempPai = util.getByChiPai(stChi,i2 + 1);
                        if (tempPai)
                        {
                            outPaiArr.push(tempPai);
                        }
                    }
                }
			}
			
			for (var j:number = 0; j < t_MyPlayer.m_PengPAIVec.length; j++) 
			{
                tempPai = t_MyPlayer.m_PengPAIVec[j].m_stPai;
                if (tempPai)
                {
                    for (var i3:number = 0; i3 < 3; i3++) 
                    {
                        outPaiArr.push(tempPai);
                    }
                }
			}
			
			for (var k:number = 0; k < t_MyPlayer.m_GangPAIVec.length; k++) 
			{
                tempPai = t_MyPlayer.m_GangPAIVec[k].m_stPai;
                if (tempPai)
                {
                    for (var i4:number = 0; i4 < 4; i4++) 
                    {
                        outPaiArr.push(tempPai);
                    }
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