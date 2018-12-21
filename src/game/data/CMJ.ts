module MjGame{
	import StPAI = MjGame.StPAI;
	import StCHI = MjGame.StCHI;
	import StGoodInfo = MjGame.StGoodInfo;
	import CheckHUManager = MjGame.CheckHUManager;
	import CheckHunHuManager = MjGame.CheckHunHuManager;
	import CMJManager = MjGame.CMJManager;
	
	export class CMJ
	{
		checkHuManager = CheckHUManager.getInstance();
		checkHunHuManager = CheckHunHuManager.getInstance();
		cmjManager:CMJManager;

		m_OutPAIVec:Array<StPAI>;     //打出去的牌型
		m_MyPAIVec:Array<Array<number>>;      //起的种牌型  
		m_ChiPAIVec:Array<StCHI>;     //吃的种牌型  
		m_PengPAIVec:Array<StPeng>;    //碰的种牌型  
		m_GangPAIVec:Array<StGang>;    //杠的种牌型  
		m_HuPAIVec:Array<StPAI>;    //胡的种牌型  
		m_TempChiPAIVec:Array<StCHI>;    //胡的种牌型  
		
		m_LastPAI:StPAI;          //最后起的牌  
		m_LastPAIIsSelf:boolean = false;         // 最后一张牌的是否是自摸上来的
		m_GoodInfoArr:Array<StGoodInfo>;         //胡牌信息  
		
		m_Dealer:boolean;  //是否是庄家
		fengChiConfig:{[id:number]:Array<string>}={};

		constructor(cmjManager?:CMJManager)
		{
            this.cmjManager = CMJManager.getInstance();
			this.init();
		}

		init():void
		{
			this.m_OutPAIVec = [];
			this.m_MyPAIVec = [];
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				this.m_MyPAIVec[i] = [];
				for (var j:number = 0; j < GlobalConfig.CARD_VALUE_NUM; j++) 
				{
					this.m_MyPAIVec[i][j] = 0;
				}
			}
			
			this.m_LastPAI = new StPAI();
			this.m_LastPAIIsSelf = false;
			this.m_GoodInfoArr = new Array<StGoodInfo>();
			
			this.m_ChiPAIVec = new Array<StCHI>();
			this.m_PengPAIVec = new Array<StPeng>();
			this.m_GangPAIVec = new Array<StGang>();
			this.m_HuPAIVec = new Array<StPAI>();
			
			this.fengChiConfig = {};
			this.fengChiConfig[1] = "2,3|2,4|3,4".split("|");
			this.fengChiConfig[2] = "1,3|1,4|3,4".split("|");
			this.fengChiConfig[3] = "1,2|2,4|1,4".split("|");
			this.fengChiConfig[4] = "2,3|1,2|1,3".split("|");
			
		}
		
		getCurPaiNum():number
		{
			var tempArr:Array<number>;
			var tempPai:StPAI;
			var count:number = 0;
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				tempArr = this.m_MyPAIVec[i];
				count += tempArr[0];
			}
			return count;
		}
		
		getPaiByPos(pos:number):StPAI
		{
			var tempArr:Array<number>;
			var tempPai:StPAI;
			var count:number = 0;
			var paiCount:number = 0;
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				tempArr = this.m_MyPAIVec[i];
				if (tempArr[0] > 0)
				{
					for (var j:number = 1; j < GlobalConfig.CARD_VALUE_NUM; j++) 
                    {
						paiCount = tempArr[j];
						count = count + paiCount;
						if (count >= pos) 
                        {
							tempPai = new StPAI();
							tempPai.m_Type = i;
							tempPai.m_Value = j;
							return tempPai;
						}
					}
				}
			}
			return tempPai;
		}
		
		getPaiPos(pai:StPAI):number
		{
			var tempArr:Array<number>;
			var count:number = 0;
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				tempArr = this.m_MyPAIVec[i];
				if (tempArr[0] > 0)
				{
					for (var j:number = 1; j < GlobalConfig.CARD_VALUE_NUM; j++) 
					{
						if(i == pai.m_Type && j == pai.m_Value)
						{
							return count;
						}
						count ++;
					}
				}
			}
			return -1;
		}
		
		//加入新牌,并排序
		addPai(pai:StPAI,isChangeLastPai:boolean = true,isSelfFetch:boolean = true):void
		{ 
			if(!pai)return;
			var p_Type:number = pai.m_Type;
			var p_Value:number = pai.m_Value;
			var tempArr:Array<number> = this.m_MyPAIVec[p_Type];
			var count:number = tempArr[0];
			var curCount:number = tempArr[p_Value];
			if(curCount < 4 && count < 14)
			{
				count = count + 1 > 14 ? 14 : count + 1;
				tempArr[0] = count;
				curCount = curCount + 1 > 4 ? 4 : curCount + 1;
				tempArr[p_Value] = curCount;
			}
			if(isChangeLastPai)
			{
				this.m_LastPAI = pai; 
			}

			this.m_LastPAIIsSelf = isSelfFetch;
		}  
		
		//打牌  
		delPai(pai:StPAI,isAddToOutPaiVec:boolean = true) :void
		{
			if(!pai)return;
			var p_Type:number = pai.m_Type;
			var p_Value:number = pai.m_Value;
			var tempArr:Array<number> = this.m_MyPAIVec[p_Type];
			var count:number = tempArr[0];
			var curCount:number = tempArr[p_Value];
			if(curCount > 0)
			{
				count = count - 1 < 0 ? 0 : count - 1;
				tempArr[0] = count;
				curCount = curCount - 1 < 0 ? 0 : curCount - 1;
				tempArr[p_Value] = curCount;
			}
			if(isAddToOutPaiVec)
			{
				this.m_OutPAIVec.push(pai);
			}
            this.m_LastPAI = null; 
		}  

        setHunPai(hunPai:StPAI)
        {
            this.cmjManager.setHunPai(hunPai);
        }
		
		// 获取手牌癞子的数量
		getHunPaiNum(hunPai:StPAI):number
		{
			var tempArr:Array<number>;
			var count:number = 0;
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				tempArr = this.m_MyPAIVec[i];
				for (var j:number = 0; j < tempArr.length; j++) 
				{
					if( i == hunPai.m_Type && j == hunPai.m_Value)
					{
						return tempArr[j];
					}
				} 
			}
			return count;
		}


		// 获取打出手牌中癞子的数量
		getOutHunPaiNum(hunPai:StPAI):number
		{
			var stPai:StPAI;
			var count:number = 0;
			for (var i:number = 0; i < this.m_OutPAIVec.length; i++) 
			{
				stPai = this.m_OutPAIVec[i];
				if( stPai.m_Type == hunPai.m_Type && stPai.m_Value == hunPai.m_Value)
				{
					count = count + 1;
				}
			}
			return count;
		}
		
		// 获取吃牌的类型个数
		getChiPaiNum():number
		{
            this.checkChiPai(this.cmjManager.curOutPai);
			return this.m_TempChiPAIVec.length;
		}
		
		//吃牌 
        checkChiPai(pai:StPAI)
        {
            var p_Type:number = pai.m_Type;
            var p_Value:number = pai.m_Value;
            this.m_TempChiPAIVec = new Array<StCHI>();  
            var tempArr:Array<number> = this.m_MyPAIVec[p_Type].concat([]);
            var iSize:number = tempArr[0];
            var t_Chi:StCHI;
            if (iSize >= 2) 
            {
                if (p_Type == GlobalConfig.MJPAI_FENG) 
                {
                    var configValueArr:Array<string>; 
                    var configArr:Array<string> = this.fengChiConfig[p_Value];
                    for (var j:number = 0; j < configArr.length; j++) 
                    {
                        configValueArr = configArr[j].split(",");
                        if(tempArr[configValueArr[0]] > 0 && tempArr[configValueArr[1]] > 0)
                        {
                            t_Chi = new StCHI();
                            t_Chi.m_ChiPai1 = this.getStPaiNewValue(pai,Number(configValueArr[0]));
                            t_Chi.m_ChiPai2 = this.getStPaiNewValue(pai,Number(configValueArr[1]));
                            t_Chi.m_ChiPai3 = pai;
                            t_Chi.m_byChiIndex = 3;
                            this.m_TempChiPAIVec.push(t_Chi);
                        }
                    }
                }
                else
                {
                    if (p_Value > 2 && tempArr[p_Value - 2] > 0 && tempArr[p_Value - 1] > 0)
                    {
                        t_Chi = new StCHI();
                        t_Chi.m_ChiPai1 = this.getStPaiNewValue(pai,p_Value - 2);
                        t_Chi.m_ChiPai2 = this.getStPaiNewValue(pai,p_Value - 1);
                        t_Chi.m_ChiPai3 = pai;
                        t_Chi.m_byChiIndex = 3;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                    if (p_Value > 1 && p_Value < GlobalConfig.CARD_VALUE_NUM - 1 && tempArr[p_Value - 1] > 0 && tempArr[p_Value + 1] > 0) 
                    {
                        t_Chi = new StCHI();
                        t_Chi.m_ChiPai1 = this.getStPaiNewValue(pai,p_Value - 1);
                        t_Chi.m_ChiPai2 = pai;
                        t_Chi.m_ChiPai3 = this.getStPaiNewValue(pai,p_Value + 1);
                        t_Chi.m_byChiIndex = 2;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                    if (p_Value > 0 && p_Value < GlobalConfig.CARD_VALUE_NUM - 2 && tempArr[p_Value + 1] > 0 && tempArr[p_Value + 2] > 0) 
                    {
                        t_Chi = new StCHI();
                        t_Chi.m_ChiPai1 = pai;
                        t_Chi.m_ChiPai2 = this.getStPaiNewValue(pai,p_Value + 1);
                        t_Chi.m_ChiPai3 = this.getStPaiNewValue(pai,p_Value + 2);
                        t_Chi.m_byChiIndex = 1;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                }
            } 
        }
		
        doChiPaiServer(stChi:StCHI):void
        {
            var stPai:StPAI = util.getByChiPai(stChi);
            this.addPai(stPai, false);
            this.delPai(util.getByChiPai(stChi,1), false);
            this.delPai(util.getByChiPai(stChi,2), false);
            this.delPai(util.getByChiPai(stChi,3), false);
            this.m_ChiPAIVec.push(stChi);
        }

        getStPaiNewValue(stPai:StPAI,value:number):StPAI
        {
            var pai:StPAI = new StPAI();
            pai.m_Type = stPai.m_Type;
            pai.m_Value = value;
            return pai
        }

        // 被吃的牌的返回空
        getByChiPai(stChi:StCHI,index?:number):StPAI
        {
            if (index == stChi.m_byChiIndex)
            {
                return null;
            }
            var pai:StPAI = util.getByChiPai(stChi,index);
            return pai;
        }
		
		doPengPaiServer(t_Peng:StPeng):void
		{
            var pai:StPAI = t_Peng.m_stPai;
            this.addPai(pai,false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.m_PengPAIVec.push(t_Peng);
		}
		
		
		//杠牌  
		doGangPaiServer(t_Gang:StGang):void  
		{ 
            var tempPai:StPAI = t_Gang.m_stPai;
            this.delPai(tempPai, false);
            this.delPai(tempPai, false);
            this.delPai(tempPai, false);
            this.delPai(tempPai, false);
            this.m_GangPAIVec.push(t_Gang);
            if (t_Gang.m_Otype == GlobalConfig.GANG_BU)
            {
                // 补杠的要把碰过的牌堆里删掉
                for (var j:number = 0; j < this.m_PengPAIVec.length; j++) 
                {
                    var st:StPAI = this.m_PengPAIVec[j].m_stPai;
                    if (st.m_Type == tempPai.m_Type && st.m_Value == tempPai.m_Value) 
                    {
                        this.m_PengPAIVec.splice(j,1);
                    }
                }
            }
		}
		
		doHuPai(pai:StPAI):void
		{
			var tempStPai:StPAI;
			var arr:Array<number>;
			var len:number;
			for (var j:number = 0; j < GlobalConfig.CARD_TYPE_NUM; j ++) 
			{
				arr = this.m_MyPAIVec[j];
				if(arr[0] > 0)
				{
					for (var i:number = 1; i < GlobalConfig.CARD_VALUE_NUM; i++) 
					{
						len = arr[i];
						if(len > 0)
						{
							for (var k:number = 0; k < len; k++) 
							{
								tempStPai = new StPAI(j,i);
								this.delPai(tempStPai, false);
								this.m_HuPAIVec.push(tempStPai);
							}
						}
					}
				}
			}
			if(pai)
			{
				this.m_HuPAIVec.push(pai);
			}
		}
		
		getChiPai():StCHI
		{
			return this.m_ChiPAIVec[this.m_ChiPAIVec.length - 1];
		}
		
		getPengPai():StPeng
		{
			return this.m_PengPAIVec[this.m_PengPAIVec.length - 1];
		}
		
		getGangPai():StGang
		{
			return this.m_GangPAIVec[this.m_GangPAIVec.length - 1];
		}

		copyMyHandPaiArr():Array<Array<number>>
        {
            var compositionAllArr:Array<Array<number>> = this.m_MyPAIVec.concat([]);
            return compositionAllArr;
        }
		
        traceGoodInfo():string
        {
            var str:string = "";
			var count:number = 0;
            for (var i = 0; i < this.m_GoodInfoArr.length; i++) {
                var goodInfo:StGoodInfo = this.m_GoodInfoArr[i];
                str = str + goodInfo.m_GoodName;
				count = count + goodInfo.m_GoodValue;
				if (i < this.m_GoodInfoArr.length - 1)
				{
					str = str + "+";
				}
            }

			str = str + ":" + count + "番";
            return str;
        }
	}
}