/**
* name 
*/
module MjGame{
	export class OutCardCm{
		parentView:View;
		cardPos:number;
		constructor(parentView:View,cardPos:number)
		{
			this.parentView = parentView;
			this.cardPos = cardPos;
		}
		createOutCard(cmj:CMJ)
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
				this.parentView.addChildAt(card,i);
				card.setData(stPai,startX,startY,i);
			}
		}
	}
}