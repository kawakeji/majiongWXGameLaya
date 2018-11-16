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
		cmjManager = CMJManager.getInstance();

		m_OutPAIVec:Array<StPAI>;     //打出去的牌型
		m_MyPAIVec:Array<Array<number>>;      //起的种牌型  
		m_ChiPAIVec:Array<StCHI>;     //吃的种牌型  
		m_PengPAIVec:Array<StPAI>;    //碰的种牌型  
		m_GangPAIVec:Array<StPAI>;    //杠的种牌型  
		m_HuPAIVec:Array<StPAI>;    //胡的种牌型  
		
		m_TempChiPAIVec:Array<StCHI>;    //吃的可选组合  
		m_TempPengPAIVec:Array<StPAI>;   //碰的可选组合  
		m_TempGangPAIVec:Array<StPAI>;   //杠的可选组合  
		
		m_LastPAI:StPAI;          //最后起的牌  
		m_LastPAIIsSelf:boolean = false;         // 最后一张牌的是否是自摸上来的
		m_GoodInfoArr:Array<StGoodInfo>;         //胡牌信息  
		
		m_Dealer:boolean;  //是否是庄家
		fengChiConfig:{[id:number]:Array<string>}={};

		constructor()
		{
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
			this.m_PengPAIVec = new Array<StPAI>();
			this.m_GangPAIVec = new Array<StPAI>();
			this.m_HuPAIVec = new Array<StPAI>();
			
			this.m_TempChiPAIVec = new Array<StCHI>();
			this.m_TempPengPAIVec = new Array<StPAI>();
			this.m_TempGangPAIVec = new Array<StPAI>();
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
			var paiValue:number = 0;
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				tempArr = this.m_MyPAIVec[i];
				for (var j:number = 1; j < GlobalConfig.CARD_VALUE_NUM; j++) {
					paiValue = tempArr[j];
					count = count + paiValue;
					if (count >= pos) {
						tempPai = new StPAI();
						tempPai.m_Type = i;
						tempPai.m_Value = j;
						return tempPai;
					}
				}
			}
			return tempPai;
		}
		
		getPaiPos(pai:StPAI):number
		{
			var tempArr:Array<number>;
			var tempPai:StPAI;
			var count:number = 0;
			for (var i:number = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
			{
				tempArr = this.m_MyPAIVec[i];
				for (var j:number = 0; j < tempArr.length; j++) 
				{
					if(tempPai.m_Type == pai.m_Type && tempPai.m_Value == pai.m_Value)
					{
						return count;
					}
					count ++;
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
			return this.m_TempChiPAIVec.length;
		}
		
		//吃牌 
		checkChiPai(pai:StPAI):boolean
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
							t_Chi.m_Type = p_Type;
							t_Chi.m_Value1 = Number(configValueArr[0]);
							t_Chi.m_Value2 = Number(configValueArr[1]);
							t_Chi.m_Value3 = p_Value;
							t_Chi.byChiIndex = 3;
							this.m_TempChiPAIVec.push(t_Chi);
						}
					}
				}
				else
				{
					if (p_Value > 2 && tempArr[p_Value - 2] > 0 && tempArr[p_Value - 1] > 0)
					{
						t_Chi = new StCHI();
						t_Chi.m_Type = p_Type;
						t_Chi.m_Value1 = p_Value - 2;
						t_Chi.m_Value2 = p_Value - 1;
						t_Chi.m_Value3 = p_Value;
						t_Chi.byChiIndex = 3;
						this.m_TempChiPAIVec.push(t_Chi);
					}
					if (p_Value > 1 && p_Value < GlobalConfig.CARD_VALUE_NUM - 1 && tempArr[p_Value - 1] > 0 && tempArr[p_Value + 1] > 0) 
					{
						t_Chi = new StCHI();
						t_Chi.m_Type = p_Type;
						t_Chi.m_Value1 = p_Value - 1;
						t_Chi.m_Value2 = p_Value;
						t_Chi.m_Value3 = p_Value + 1;
						t_Chi.byChiIndex = 2;
						this.m_TempChiPAIVec.push(t_Chi);
					}
					if (p_Value > 0 && p_Value < GlobalConfig.CARD_VALUE_NUM - 2 && tempArr[p_Value + 1] > 0 && tempArr[p_Value + 2] > 0) 
					{
						t_Chi = new StCHI();
						t_Chi.m_Type = p_Type;
						t_Chi.m_Value1 = p_Value;
						t_Chi.m_Value2 = p_Value + 1;
						t_Chi.m_Value3 = p_Value + 2;
						t_Chi.byChiIndex = 1;
						this.m_TempChiPAIVec.push(t_Chi);
					}
				}
			} 
			if(this.m_TempChiPAIVec.length > 0)  
			{  
				return  true;  
			}  
			return false;
		}
		
		doChiPaiServer(stChi:StCHI):void
		{
			var stPai:StPAI = stChi.getPai(stChi.byChiIndex);
			this.addPai(stPai, false);
			this.delPai(stChi.getPai(1), false);
			this.delPai(stChi.getPai(2), false);
			this.delPai(stChi.getPai(3), false);
			this.m_ChiPAIVec.push(stChi);
		}
		
		//吃牌  
		doChiPai(p_iIndex:number,pai:StPAI):void
		{   
			this.addPai(pai,false);  
			var tempCHI:StCHI;
			for (var i:number = 0; i < this.m_TempChiPAIVec.length; i++) 
			{
				tempCHI = this.m_TempChiPAIVec[i];
				if(i == p_iIndex)  
				{  
					this.delPai(tempCHI.getPai(1),false);  
					this.delPai(tempCHI.getPai(2),false);  
					this.delPai(tempCHI.getPai(3),false);  
					this.m_ChiPAIVec.push(tempCHI);
					break;  
				}  
			}  
		} 
		
		//碰牌  
		checkPengPai(pai:StPAI):boolean
		{  
			var p_Type:number = pai.m_Type;
			var p_Value:number = pai.m_Value;
			this.m_TempPengPAIVec = new Array<StPAI>();  
			var tempArr:Array<number> = this.m_MyPAIVec[p_Type];
			var iSize:number = tempArr[p_Value];
			var t_Peng:StPAI;
			if (iSize >= 2) 
			{
				t_Peng = new StPAI();
				t_Peng.m_Type = p_Type;
				t_Peng.m_Value = p_Value;
				this.m_TempPengPAIVec.push(t_Peng);
			}
			if(this.m_TempPengPAIVec.length > 0)  
			{  
				return true;  
			}  
			return false;  
		}  
		//碰牌  
		doPengPai(pai:StPAI):void
		{  
			this.addPai(pai,false);
			var tempPai:StPAI = null;
			for (var i:number = 0; i < this.m_TempPengPAIVec.length; i++) 
			{
				tempPai = this.m_TempPengPAIVec[i];
				if(tempPai.m_Type == pai.m_Type && tempPai.m_Value == pai.m_Value)
				{
					this.delPai(tempPai, false);
					this.delPai(tempPai, false);
					this.delPai(tempPai, false);
					this.m_PengPAIVec.push(tempPai);
					break;
				}
			}
		}  
		
		doPengPaiServer(pai:StPAI):void
		{
			this.addPai(pai,false);
			this.delPai(pai, false);
			this.delPai(pai, false);
			this.delPai(pai, false);
			this.m_PengPAIVec.push(pai);
		}
		
		
		/**
		 * 检测是否能杠 
		 * @param pai
		 * @param isSelfHad 是自己摸得牌，还是别人打的
		 * @return 
		 * 
		 */
		checkGangPai(pai:StPAI,isSelfHad:boolean = true):boolean  
		{     
			var p_Type:number = pai.m_Type;
			var p_Value:number = pai.m_Value;
			this.m_TempGangPAIVec = new Array<StPAI>();  
			var tempArr:Array<number> = this.m_MyPAIVec[p_Type];
			var iSize:number = tempArr[p_Value];
			var t_Gang:StPAI;
			if (isSelfHad) 
			{
				if (iSize >= 4)
				{
					t_Gang = new StPAI();
					t_Gang.m_Type = p_Type;
					t_Gang.m_Value = p_Value;
					this.m_TempGangPAIVec.push(t_Gang);
				}
				
				// 检测已经碰的牌中是否能补杠
				for (var i:number = 0; i < this.m_PengPAIVec.length; i++) 
				{
					var st:StPAI = this.m_PengPAIVec[i];
					if (st.m_Type == p_Type && st.m_Value == p_Value) 
					{
						t_Gang = new StPAI();
						t_Gang.m_Type = p_Type;
						t_Gang.m_Value = p_Value;
						this.m_TempGangPAIVec.push(t_Gang);
						break;
					}
				}
				
				//可能有4张的开始没有杠，想等后面再杠的
				for (i = 0; i < GlobalConfig.CARD_TYPE_NUM; i++) 
				{
					tempArr = this.m_MyPAIVec[i];
					if(tempArr[0] < 4) continue;
					for (var j:number = 1; j < GlobalConfig.CARD_VALUE_NUM; j++) 
					{
						iSize = tempArr[j];
						if(iSize >= 4)
						{
							t_Gang = new StPAI();
							t_Gang.m_Type = p_Type;
							t_Gang.m_Value = p_Value;
							this.m_TempGangPAIVec.push(t_Gang);
						}
					}
				}
			} 
			else 
			{
				if (iSize >= 3) 
				{
					t_Gang = new StPAI();
					t_Gang.m_Type = p_Type;
					t_Gang.m_Value = p_Value;
					this.m_TempGangPAIVec.push(t_Gang);
				}
			}
			
			if(this.m_TempGangPAIVec.length > 0)  
			{  
				return true;  
			}  
			return false;  
		}  
		//杠牌  
		doGangPai(pai:StPAI):void  
		{  
			var tempPai:StPAI = null;
			for (var i:number = 0; i < this.m_TempGangPAIVec.length; i++) 
			{
				tempPai = this.m_TempGangPAIVec[i];
				if(tempPai.m_Type == pai.m_Type && tempPai.m_Value == pai.m_Value)
				{
					this.delPai(tempPai, false);
					this.delPai(tempPai, false);
					this.delPai(tempPai, false);
					this.delPai(tempPai, false);
					this.m_GangPAIVec.push(tempPai);
					// 检测已经碰的牌中是否能补杠
					for (var j:number = 0; j < this.m_PengPAIVec.length; j++) 
					{
						var st:StPAI = this.m_PengPAIVec[j];
						if (st.m_Type == tempPai.m_Type && st.m_Value == tempPai.m_Value) 
						{
							this.m_PengPAIVec.splice(j,1);
							break;
						}
					}
					break;
				}
			}
		}  
		
		//杠牌  
		doGangPaiServer(pai:StPAI):void  
		{ 
			this.delPai(pai, false);
			this.delPai(pai, false);
			this.delPai(pai, false);
			this.delPai(pai, false);
			this.m_GangPAIVec.push(pai);
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
		
		//检测胡  
		checkHU(pai:StPAI,isSelfFetch:boolean = false):boolean
		{  
			console.log("当前抓的牌为：",this.cmjManager.traceSinglePai(pai.m_Type,pai.m_Value));
			this.addPai(pai,false,isSelfFetch);
			var flag:boolean = false;
			var hunPai:StPAI = this.cmjManager.getHunPai();
			if (this.getOutHunPaiNum(hunPai) > 0)
			{
				flag = this.checkHunHuManager.checkHu(this);
			}
			else
			{
				flag = this.checkHuManager.checkHu(this);
			}
			this.delPai(pai,false);
			return flag;
		}  
		
		//检测是否胡牌  
		checkAllPai(pai:StPAI = null):boolean
		{  
			//检测是否平胡  
			if(this.checkHU(pai))  
			{  
				return true;  
			}  
			return false;  
		}  
		
		getChiPai():StCHI
		{
			return this.m_ChiPAIVec[this.m_ChiPAIVec.length - 1];
		}
		
		getPengPai():StPAI
		{
			return this.m_PengPAIVec[this.m_PengPAIVec.length - 1];
		}
		
		getGangPai():StPAI
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