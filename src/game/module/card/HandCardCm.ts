/**
* name 
*/
module MjGame{
	export class HandCardCm{
		constructor(){

		}

		createHandCard(cmj:CMJ,parentView:any)
		{
            var index:number = 0;
            var startX:number = 10;//this.addChiPengGangPai(cmj);
            var card:HandCard;
            var arr:Array<number>;
            for (var j:number = 0; j < GlobalConfig.CARD_TYPE_NUM; j ++) 
            {
                arr = cmj.m_MyPAIVec[j];
                if(arr[0] > 0)
                {
                    for (var i:number = 1; i < GlobalConfig.CARD_VALUE_NUM; i++) 
                    {
                        if(arr[i] > 0)
                        {
                            for (var k:number = 0; k < arr[i]; k++) 
                            {
                                card = new HandCard();
                                card.cardPos = GlobalConfig.DOWN_POS;
                                card.setData(new StPAI(j,i),startX,index);
                                parentView.addChild(card);   
                                index ++;
                            }
                        }
                    }
                }
            }
		}

        addChiPengGangPai(t_MyPlayer:CMJ):number
		{
			var card:OutCard;
			var index:number;
			for (var i:number = 0; i < t_MyPlayer.m_ChiPAIVec.length; i++) 
			{
				var stChi:StCHI = t_MyPlayer.m_ChiPAIVec[i];
				for (var i2:number = 1; i2 <= 3; i2++) 
				{
					card = new OutCard();
					// setOutCardPos(card,index);
					// card.dataSource = stChi.getPai(i2);
					// _box.addChild(card);
					index ++;
				}
			}
			
			for (var j:number = 0; j < t_MyPlayer.m_PengPAIVec.length; j++) 
			{
				for (var i3:number = 0; i3 < 3; i3++) 
				{
					card = new OutCard();
					// setOutCardPos(card,index);
					// card.dataSource = t_MyPlayer.m_PengPAIVec[j];
					// _box.addChild(card);
					index ++;
				}
			}
			
			for (var k:number = 0; k < t_MyPlayer.m_GangPAIVec.length; k++) 
			{
				for (var i4:number = 0; i4 < 4; i4++) 
				{
					card = new OutCard();
					// card.dataSource = t_MyPlayer.m_GangPAIVec[k];
					// setOutCardPos(card,index);
					// _box.addChild(card);
					index ++;
				}
			}
			
			if(t_MyPlayer.m_HuPAIVec.length > 0)
			{
				index ++;
			}
			
			for (k = 0; k < t_MyPlayer.m_HuPAIVec.length; k++) 
			{
				card = new OutCard();
				// card.dataSource = t_MyPlayer.m_HuPAIVec[k];
				// setOutCardPos(card,index);
				// _box.addChild(card);
				index ++;
			}
			
			return index * (card ? card.width : 0);
		}
	}
}