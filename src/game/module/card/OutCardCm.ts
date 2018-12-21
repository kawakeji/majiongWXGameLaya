/**
* name 
*/
module MjGame{
	export class OutCardCm{
		parentView:View;
		cardPos:number;
        player:PlayerVO;
        lsCard:Laya.Image;
		constructor(parentView:View,player:PlayerVO,cardPos:number)
		{
            let selfPlayer:PlayerVO = PlayerManager.getInstance().selfPlayerVO;
			this.parentView = parentView;
            this.player = player;
			this.cardPos = cardPos;
		}

		updateOutCard(cmj:CMJ)
		{
            var startX:number = 0;//this.addChiPengGangPai(cmj);
            var startY:number = 0;
            var card:OutCard;
            var stPai:StPAI;
			for (var i:number = 0; i < cmj.m_OutPAIVec.length; i++) 
			{
				stPai = cmj.m_OutPAIVec[i];
				card = new OutCard();
				card.cardPos = this.cardPos;
				this.parentView.addChild(card);
				card.setData(stPai,startX,startY,i);
			}

            if (card)
            {
                this.lsCard = card.card;
            }
		}

        getLastOutCard():Laya.Image
        {
            return this.lsCard;
        }
	}
}