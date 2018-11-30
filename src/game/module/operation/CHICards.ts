/**
* name 
*/
module MjGame{
	export class CHICards extends Laya.Box{
        index:number = 0;
        stChi:StCHI;
        constructor(){
            super();
        }
        
        setData(stChi:StCHI):void
        {
			this.stChi = stChi;
            if(this.stChi)
            {
                this.addTempChiPaiView(this.stChi);
            }
        }
        
        addTempChiPaiView(tempStChi:StCHI):void
        {
            var tempCard:OutCard;
            var tempPai:StPAI;
            var nWidth:number = 0;
            var nHeight:number = 0;
            for (var j:number = 1; j <= 3; j++) 
            {
                tempPai = tempStChi.getPai(j);
                tempCard = new OutCard();
				tempCard.cardPos = GlobalConfig.DOWN_POS;
				this.addChild(tempCard);
                tempCard.setData(tempPai,0,0,j);
                nWidth = nWidth + tempCard.width;
                nHeight = tempCard.height;
                // tempCard.x = (j -1) * (tempCard.width - 5);               
            }
            console.log("addTempChiPaiView",nWidth,nHeight);
            this.width = nWidth;
            this.height = nHeight;
        }
        
        getStChi():StCHI
        {
            return this.stChi;
        }
	}
}