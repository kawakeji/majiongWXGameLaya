/*
* 游戏桌面场景;
*/
module MjGame{
    export class DeskScene extends ui.game.scene.DeskSceneUI{
        ROUND_TIME:number = 15;
        cardMainView:CardMainView;
        leftTime:number = 0;
        selectedDirectionArr:Array<Laya.Image>;
        lastSelected:Laya.Image;
        curPlayer:PlayerVO;
        isSendTimeOut:boolean = false;
        endTime:number = 0;
        curClientPos:number = 0;
        constructor() 
        {
            super();
            this.selectedDirectionArr = [this.clockUI.downSelected,this.clockUI.rightSelected,this.clockUI.upSelected,this.clockUI.leftSelected];
            this.initView();
            this.createCardMainView();
            Laya.timer.loop(1000,this,this.updateClock);
            MjSoundManager.getInstance().playMusic(SoundType.BG_SOUND);
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
            this.updateRoomInfo();
            this.cardMainView = new CardMainView(this);
            // let hunP:StPAI = CMJManager.getInstance().getHunPai();
            // if (hunP)
            // {
            //     this.hunPai.text = Log.traceSinglePai(hunP.m_Type,hunP.m_Value);
            // }
        }

        updateRoomInfo()
        {
            let roomVO:RoomVO = RoomManager.getInstance().roomVO;
            if (roomVO)
            {
                this.roomInfoView.roomIdLabel.text = "房间号：" + roomVO.roomId;
                this.roomInfoView.roomRoundNumLabel.text = "剩余回合数：" + roomVO.roomRoundNum;
                var handCard:HandCard = new HandCard();
                this.roomInfoView.hunContainer.addChild(handCard);
                handCard.setData(roomVO.roomHunPai,0,0,0);
                handCard.mouseEnabled = false;
            }
        }

        updateCurPlayer(player:PlayerVO, endTime:number)
        {
            this.curPlayer = player;
            this.endTime = endTime;
            this.isSendTimeOut = false;
            let selfPlayer:PlayerVO = PlayerManager.getInstance().selfPlayerVO;
			var pos:number = util.getClientRefPos(player.position,selfPlayer.position);
            this.curClientPos = pos;
            if(this.lastSelected)
            {
                this.lastSelected.visible = false;
            }
            this.selectedDirectionArr[pos].visible = true;
            this.lastSelected = this.selectedDirectionArr[pos];
        }

        updateClock()
        {
            let leftTime = ServerTimeManager.getInstance().getCountDown(this.endTime);
            if (leftTime <= 0)
            {
                this.clockUI.timeLabel.value = "0";
                // if(!this.isSendTimeOut && this.curPlayer && this.curPlayer.playerId == PlayerManager.getInstance().selfPlayerVO.playerId)
                // {
                //     this.isSendTimeOut = true;
                    // ProxyManager.getInstance().gameProxy.sendTimeOut(this.curPlayer);
                // }
            }
            else
            {
                if(this.curClientPos == GlobalConfig.DOWN_POS)
                {
                    MjSoundManager.getInstance().playCommonSound(SoundType.TIME);
                }
                this.clockUI.timeLabel.value = Math.ceil(leftTime/1000) + "";
            }
        }

    }
}
