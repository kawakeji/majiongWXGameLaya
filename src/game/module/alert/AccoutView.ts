/**
* name 
*/
module MjGame{
	export class AccoutView extends ui.game.dialog.AccountDialogUI
    {

		constructor()
        {
            super();
			this.closeBtn.on(Laya.Event.CLICK,this,this.onClose);
			this.continueBtn.on(Laya.Event.CLICK,this,this.onContinue);
		}

		onClose()
		{
			this.removeSelf();
		}

        onContinue()
        {
            this.onClose();
            ProxyManager.getInstance().gameProxy.sendReadyToServer(PlayerManager.getInstance().selfPlayerVO);
        }

        setData(player:PlayerVO,stGoodInfos:Array<StGoodInfo>,stPai:StPAI)
        {
            if (player)
            {
                var str:string = "";
                var count:number = 0;
                for (var i = 0; i < stGoodInfos.length; i++) {
                    var goodInfo:StGoodInfo = stGoodInfos[i];
                    str = str + goodInfo.m_GoodName;
                    count = count + goodInfo.m_GoodValue;
                    if (i < stGoodInfos.length - 1)
                    {
                        str = str + "+";
                    }
                }

                str = str + ":" + count + "番";
                this.descLabel.text = player.username + "           " + str;
                this.updateHandCard(player.cmj,true);
            }
            else
            {
                this.descLabel.text = "黄庄了！！";
                this.contentView.removeChildren();
            }
        }

        updateHandCard(cmj:CMJ, isShowLast:boolean = true)
		{
            this.contentView.removeChildren();
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
                            if(isShowLast && cmj.m_LastPAI.m_Type == tempStPai.m_Type && cmj.m_LastPAI.m_Value == tempStPai.m_Value)
                            {
                                lastStPai = cmj.m_LastPAI;
                                isShowLast = false;
                                continue;
                            }
                            card = new HandCard();
                            card.cardPos = GlobalConfig.DOWN_POS;
                            this.contentView.addChild(card);  
                            card.setData(tempStPai,startX,startY,index);
                            index ++;
                        }
                    }
                }
            }

            if(lastStPai )
            {
                this.addLastPai(lastStPai,startX,startY,index);
            }
		}

        addLastPai(lastStPai:StPAI,startX:number,startY:number,index:number):void
        {
            var card:HandCard = new HandCard();
            card.cardPos = GlobalConfig.DOWN_POS;
            this.contentView.addChild(card);  
            card.setData(lastStPai,startX + 10,startY,index);
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
                card.cardPos = GlobalConfig.DOWN_POS;
                this.contentView.addChild(card);
                card.setData(tempPai,startX,startY,index);
            }

            if (card)
            {
                startX = card.startX;
                startY = card.startY;
            }

            var offX:number = 0;
            var offY:number = 0;
            offX = 30;
			
			return {startX:startX + offX,startY:startY + offY};
		}
	}
}