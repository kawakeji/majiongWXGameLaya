/**
* 手牌 
*/
module MjGame{
	export class HandCard extends ui.game.view.HandCardUI{
        downResBasePath:string = 'game/handCard/';
		rightResBasePath:string = "game/bgCard/right_card.png";
		leftResBasePath:string = "game/bgCard/left_card.png";
		upResBasePath:string = "game/bgCard/top_card.png";

        cardPos:number = 0;

		constructor(){
			super();
		}

		setData(stPai:StPAI,startX:number,index:number)
		{
            var resUrl:string = "";
			var offW:number = 0;
            if(this.cardPos == GlobalConfig.DOWN_POS)
            {
				offW = 50;
                resUrl = this.downResBasePath  + GlobalConfig.GetPaiPrefixByType(stPai.m_Type) + stPai.m_Value + ".png";
            }
            else if(this.cardPos == GlobalConfig.RIGHT_POS)
            {
				offW = 50;
                 resUrl = this.rightResBasePath;
            }
            else if(this.cardPos == GlobalConfig.UP_POS)
            {
				offW = 50;
                resUrl = this.upResBasePath;
            }
            else
            {
				offW = 50;
                resUrl = this.leftResBasePath;
            }
			this.card.loadImage(resUrl);
			this.card.pos(startX + offW*index,50);
		}
	}
}