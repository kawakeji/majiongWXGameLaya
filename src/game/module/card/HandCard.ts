/**
* 手牌 
*/
module MjGame{
    export class HandCard extends ui.game.view.HandCardUI
    {
        private TOGGLE_DIST: number = 80;

        downResBasePath:string = 'game/handCard/';
		rightResBasePath:string = "game/bgCard/right_card.png";
		leftResBasePath:string = "game/bgCard/left_card.png";
		upResBasePath:string = "game/bgCard/top_card.png";

        cardPos:number = 0;

        cardOldPosY:number = 0;

        endPositionY:number = -200;

        index = 0;

        stPai:StPAI;

        clickCallBack:Function;

        handObj:HandCardCm;

        constructor()
        {
			super();           
        }
        
        addClickHandler(handObj:HandCardCm,callBack:Function)
        {
            this.handObj = handObj;
            this.clickCallBack = callBack;
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }

        /**按下事件处理*/
        private onMouseDown(e: Event): void 
        {
            //添加鼠标移到侦听
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
        }
        
        /**移到事件处理*/
        private onMouseMove(e: Event): void 
        {
            this.y = Math.max(Math.min(this.mouseY, this.cardOldPosY), this.endPositionY);
            // this.y = Math.max(Math.min(Laya.stage.mouseY, this.endPosition), this.beginPosition);
        }

        /**抬起事件处理*/
        private onMouseUp(e: Event): void 
        {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            // 滑动到目的地
            var dist: number = Math.abs(this.mouseY - this.cardOldPosY);

            var targetY = this.cardOldPosY;

            if (dist > this.TOGGLE_DIST && this.handObj.operationView.isCanDrag)
            {
                this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                this.clickCallBack.apply(this.handObj,[this]);
            }
            else
            {
                Laya.Tween.to(this, { y: targetY }, 100);
            }
        }

		setData(stPai:StPAI,startX:number,startY:number,index:number)
		{
            this.stPai = stPai;
            var resUrl:string = "";
			var offW:number = 0;
            var offH:number = 0;
            if(this.cardPos == GlobalConfig.DOWN_POS)
            {
				offW = 55;
                offH = 0;
                resUrl = this.downResBasePath  + GlobalConfig.GetPaiPrefixByType(stPai.m_Type) + stPai.m_Value + ".png";
            }
            else if(this.cardPos == GlobalConfig.RIGHT_POS)
            {
				offW = 0;
                offH = -27;
                resUrl = this.rightResBasePath;
                var childNum = this.parent.numChildren;
                var curIndex = this.parent.getChildIndex(this);
                this.parent.setChildIndex(this, childNum - curIndex - 1);
            }
            else if(this.cardPos == GlobalConfig.UP_POS)
            {
				offW = 37;
                offH = 0;
                resUrl = this.upResBasePath;
            }
            else
            {
				offW = 0;
                offH = 27;
                resUrl = this.leftResBasePath;
            }
			this.card.skin  = resUrl;
			this.pos(startX + offW * index,startY + offH * index);
            this.cardOldPosY = this.card.y;
            this.index = index;
		}
	}
}