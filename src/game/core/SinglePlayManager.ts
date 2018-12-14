/**
* name 
*/
module MjGame{
    import CMJ = MjGame.CMJ;
    import ClientHandEvent = MjGame.ClientHandEvent;
    export class SinglePlayManager
    {
        playerVOs:Array<PlayerVO>;
        myPlayer:HandCardCm;
        otherPlayers:Array<HandCardCm>;
        dealerPos:number = 0;
		constructor()
        {
            this.otherPlayers = [];
            this.dealerPos = 0;
		}

        private static instance:SinglePlayManager;
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        public static getInstance():SinglePlayManager
        {
            if(!this.instance)
            {
                this.instance = new SinglePlayManager();
            }
            return this.instance;
        }

        createPlayers():Array<PlayerVO>
        {
            var playerVOs = []
            for (var index = 0; index < GlobalConfig.MAX_MEMBER_NUM; index++) 
            {
                var cmj = new CMJ();
                var playerVO = new PlayerVO();
                playerVO.cmj = cmj;
                playerVO.username = 'pos' + index;
                playerVO.position = index;
                playerVO.roomId = 10001;
                this.distributeCard(cmj);
                playerVOs[index] = playerVO;
            }
            return playerVOs
        }

        distributeCard(cmj:CMJ)
        {
            for (var i = 0; i < GlobalConfig.HAND_CARD_NUM; i++) 
            {
                cmj.addPai(CMJManager.getInstance().getAPai().m_NewPai);               
            }
        }

        startGame(myPlayer:HandCardCm, otherPlayers:Array<HandCardCm>)
        {
            this.myPlayer = myPlayer
            this.otherPlayers = otherPlayers
            Laya.timer.loop(200, this, this.onLoop);
        }

        onLoop()
        {
            //打牌循环  
            var t_Ting:boolean     = false;  
            var t_Score:number = 0;
            //其它玩家起牌出牌  
            var aPai:StPAIEx = CMJManager.getInstance().getAPai();
            if(aPai.m_NewPai == null) 
            {
                console.log("黄庄了 ");
                this.pause();
                return;
            }
            
            var curPlayer:HandCardCm = this.getNextPlayer();
            console.log("当前玩家位置：" +curPlayer.cardPos);
            if(curPlayer.cardPos == this.myPlayer.cardPos)
            {
                console.log("add MY Pai");
                curPlayer.addPai(aPai.m_NewPai);
                if(curPlayer.cmj.checkHU(null))  
                {  
                    this.waitHu();
                }  
                else
                {
                    if(this.myPlayer.cmj.checkGangPai(aPai.m_NewPai))  
                    {  
                        this.waitGang();
                    }  
                    else
                    {
                        this.waitDa();
                    }
                }
            }
            else
            {
                console.log("add Other Pai" + curPlayer.cardPos);
                curPlayer.addPai(aPai.m_NewPai);
                console.log("del Other Pai" + curPlayer.cardPos);
                var outPai:StPAI = curPlayer.cmj.getPaiByPos(1);
                curPlayer.delPai(outPai);
                CMJManager.getInstance().curOutPai = outPai;
                if(this.myPlayer.checkHU(outPai))
                {
                    this.waitHu();
                }
                if(curPlayer.cardPos == GlobalConfig.LEFT_POS)
                {
                    //检查吃牌  
                    if(this.myPlayer.checkChiPai(outPai))  
                    {  
                        this.waitChi();
                    }  
                }
                //检查碰牌  
                if(this.myPlayer.checkPengPai(outPai))  
                {  
                    this.waitPeng();
                }  
                //检查杠牌  
                if(this.myPlayer.checkGangPai(outPai,false))  
                {  
                    this.waitGang();
                }  
            }
        }


        
        waitDa():void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OUT_MJ,this,this.onWaitMyOutMJ);
            EventManager.getInstance().event(ClientHandEvent.SHOW_OUT_BTN);
            this.pause();
        }
        
        waitHu():void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_HU,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
            this.pause();
        }
        
        waitChi():void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_CHI,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
            this.pause();
        }
        
        waitPeng():void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_PENG,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
            this.pause();
        }
        
        waitGang():void
        {
            EventManager.getInstance().on(ClientHandEvent.WAITING_OPERATION_GANG,this,this.onWaitMyOperation);
            EventManager.getInstance().on(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
            this.pause();
        }
        
        resume():void
        {
            Laya.timer.loop(200, this, this.onLoop);
        }
        
        pause():void
        {
            Laya.timer.clear(this,this.onLoop);
        }
        
        onWaitMyOperation(type,data):void
        {
            console.log("my operation:" + type);
            EventManager.getInstance().off(type,this,this.onWaitMyOperation);
            EventManager.getInstance().off(ClientHandEvent.QUIT_OPERATION,this,this.onWaitMyOperation);
            switch(type)
            {
                case ClientHandEvent.WAITING_OPERATION_CHI:
                {
                    this.myPlayer.doChiPai(data as number,CMJManager.getInstance().curOutPai);
                    this.waitDa();
                    break;
                }
                case ClientHandEvent.WAITING_OPERATION_PENG:
                {
                    this.myPlayer.doPengPai(CMJManager.getInstance().curOutPai);
                    this.waitDa();
                    break;
                }
                case ClientHandEvent.WAITING_OPERATION_GANG:
                {
                    this.myPlayer.doGangPai(CMJManager.getInstance().curOutPai);
                    this.waitDa();
                    break;
                }
                case ClientHandEvent.WAITING_OPERATION_HU:
                {
                    EventManager.getInstance().event(BaseEvent.HU);
                    break;
                }
                case ClientHandEvent.QUIT_OPERATION:
                {
                    this.resume();
                    break;
                }
                default:
                {
                    break;
                }
            }
            CMJManager.getInstance().curOutPai = null;
        }
        
        onWaitMyOutMJ(data:StPAI):void
        {
            console.log("del MY Pai");
            EventManager.getInstance().off(ClientHandEvent.WAITING_OUT_MJ,this,this.onWaitMyOutMJ);
            this.myPlayer.delPai(data as StPAI);
            CMJManager.getInstance().curOutPai = data as StPAI;
            this.dealerPos = 1;
            this.resume();
        }
        
        getNextPlayer():HandCardCm
        {
            var pos:number = this.dealerPos % 4;
            this.dealerPos ++;
            if(pos == 0)
            {
                return this.myPlayer;
            }
            else
            {
                return this.otherPlayers[pos -1];
            }
        }
	}
}