/*
* 打出去牌视图
*/
module MjGame{
    export class OutCard extends ui.game.view.OutCardUI{
        downResBasePath:string = 'game/outCard/buttom_top/';
		rightResBasePath:string = "game/outCard/right/";
		upResBasePath:string = "game/outCard/buttom_top/";
        leftResBasePath:string = "game/outCard/left/";

        resBasePathArr:Array<string> = [];
        cardPos:number = 0;

		constructor(){
			super();
            this.resBasePathArr = [this.downResBasePath,this.rightResBasePath,this.upResBasePath,this.leftResBasePath];
		}

		setData(stPai:StPAI,startX:number,startY:number,index:number)
		{
            var resUrl:string = this.resBasePathArr[this.cardPos];
            resUrl = resUrl + GlobalConfig.GetPaiPrefixByType(stPai.m_Type) + stPai.m_Value + ".png";

			this.card.skin = resUrl;
            this.setCardPos(startX,startY,index);
		}

        setCardPos(startX:number,startY:number,index:number)
        {
            var offW:number = 0;
            var offH:number = 0;
            var rowInx = 0;
            
            if(this.cardPos == GlobalConfig.DOWN_POS)
            {
                rowInx = Math.floor(index/15);
                index = Math.floor(index%15);
                offW = 55;
                offH = 0;
                this.scale( 0.65,0.65);
                if (rowInx >= 1)
                {
                    startY = startY - 61 * rowInx;
                }
                startX = startX + offW * index;
                if (index < this.parent.numChildren)
                {
                    this.parent.setChildIndex(this,index);
                }  
            }
            else if(this.cardPos == GlobalConfig.RIGHT_POS)
            {
                rowInx = Math.floor(index/9);
                index = Math.floor(index%9);
                offW = 0;
                offH = -27;  
                if (rowInx >= 1)
                {
                    startX = startX - 43 * rowInx;
                }
                startY = startY + offH * index;
                var childNum = this.parent.numChildren;
                this.parent.setChildIndex(this,childNum - index -1);
            }
            else if(this.cardPos == GlobalConfig.UP_POS)
            {
                rowInx = Math.floor(index/15);
                index = Math.floor(index%15);
                offW = -55;
                offH = 0;
                this.scale( 0.65,0.65);   
                if (rowInx >= 1)
                {
                    startY = startY + 61 * rowInx;
                }
                startX = startX + offW * index;
            }
            else
            {
                rowInx = Math.floor(index/9);
                index = Math.floor(index%9);
                offW = 0;
                offH = 27;
                if (rowInx >= 1)
                {
                    startX = startX + 43 * rowInx;
                }
                startY = startY + offH * index;
                // var childNum = this.parent.numChildren;
                // this.parent.setChildIndex(this,childNum - index -1);
            }
            this.card.pos(startX,startY);
        }
    }
}