/*
* 游戏桌面场景;
*/
module MjGame{
    export class DeskScene extends ui.game.scene.DeskSceneUI{
        ROUND_TIME:number = 30;
        cardMainView:CardMainView;
        leftTime:number = 30;
        selectedDirectionArr:Array<Laya.Image>;
        lastSelected:Laya.Image;
        constructor() 
        {
            super();
            this.selectedDirectionArr = [this.clockUI.downSelected,this.clockUI.rightSelected,this.clockUI.upSelected,this.clockUI.leftSelected];
            this.initView();
            this.createCardMainView();
            this.clockUI.timeLabel
            // this.scale(0.3,0.3);
        }

        initView()
        {
            for (var index = 0; index < this.selectedDirectionArr.length; index++)
            {
                var img:Laya.Image = this.selectedDirectionArr[index];
                img.visible = false;
            }
        }

        createCardMainView()
        {
            this.cardMainView = new CardMainView(this);
            let hunP:StPAI = CMJManager.getInstance().getHunPai();
            if (hunP)
            {
                this.hunPai.text = Log.traceSinglePai(hunP.m_Type,hunP.m_Value);
            }
        }

        updateCurPlayer(pos:number)
        {
            this.leftTime = this.ROUND_TIME;
            if(this.lastSelected)
            {
                this.lastSelected.visible = false;
            }
            this.selectedDirectionArr[pos].visible = true;
            this.lastSelected = this.selectedDirectionArr[pos];
            Laya.timer.loop(1000,this,this.updateClock);
        }

        updateClock()
        {
            this.leftTime = this.leftTime - 1;
            if (this.leftTime <= 0)
            {
                this.leftTime = 0;
            }
            this.clockUI.timeLabel.value = this.leftTime + "";
        }

    }
}
