module MjGame
{
	export class CheckHUManager
	{
		cmjManager:CMJManager = CMJManager.getInstance();
		private static instance:CheckHUManager;
		/**
		 * 获取实例的静态方法实例
		 * @return
		 *
		 */
		public static getInstance():CheckHUManager
		{
			if(!this.instance)
			{
				this.instance = new CheckHUManager();
			}
			return this.instance;
		}
		

		checkHu(cmj:CMJ):boolean
		{
			cmj.m_GoodInfoArr=[];
			var flag:boolean=false;
			if (this.checkDuiDuiHu(cmj))
			{
				if (this.checkTianHu(cmj)){}
				else if(this.checkDiHu(cmj)){}

				this.checkZiMoHu(cmj);
				flag=true;
			}
			else if (this.checkPengPengHu(cmj))
			{
				if (this.checkTianHu(cmj)){}
				else if(this.checkDiHu(cmj)){}
				else if(this.checkDanDiaoHu(cmj)){}

				if(this.checkGangShangKaiHuaHu(cmj)){}
				else{this.checkZiMoHu(cmj);}
				
				flag=true;
			}
			else if(this.checkDanDiaoHu(cmj))
			{
				if(this.checkGangShangKaiHuaHu(cmj)){}
				else{this.checkZiMoHu(cmj);}
				flag=true;
			}
			else if (this.checkLanHu(cmj))
			{
				if (this.checkTianHu(cmj)){}
				else if(this.checkDiHu(cmj)){}

				this.checkZiMoHu(cmj);
				flag=true;
			}
			else if (this.checkPingHu(cmj))
			{
				if (this.checkTianHu(cmj)){}
				else if (this.checkDiHu(cmj)){}
				else if (this.checkDanDiaoHu(cmj)){}
					
				if(this.checkGangShangKaiHuaHu(cmj)){}
				else if (this.checkZiMoHu(cmj)){}
				else
				{
					cmj.m_GoodInfoArr = new Array();
					cmj.m_GoodInfoArr.push(GlobalConfig.PING_HU);
				}

				flag=true;
			}

			return flag;
		}

		protected checkTianHu(cmj:CMJ):boolean
		{
			if (this.cmjManager.remainNum == GlobalConfig.ALL_CARD_NUM - GlobalConfig.HAND_CARD_NUM * 4 - 1 && cmj.m_Dealer == true)
			{
				cmj.m_GoodInfoArr = new Array();
				cmj.m_GoodInfoArr.push(GlobalConfig.TIAN_HU);
				return true;
			}
			return false;
		}

		protected checkDiHu(cmj:CMJ):boolean
		{
			if (this.cmjManager.remainNum == GlobalConfig.ALL_CARD_NUM - GlobalConfig.HAND_CARD_NUM * 4 - 1 && cmj.m_Dealer == false)
			{
				cmj.m_GoodInfoArr = new Array();
				cmj.m_GoodInfoArr.push(GlobalConfig.DI_HU);
				return true;
			}
			return false;
		}

		protected checkDuiDuiHu(cmj:CMJ):boolean
		{
			if (cmj.m_ChiPAIVec.length > 0 || cmj.m_PengPAIVec.length > 0 || cmj.m_GangPAIVec.length > 0)
			{
				return false;
			}
			var tempArr:Array<number>;
			var paiValue:number;
			for (var i:number=0; i < GlobalConfig.CARD_TYPE_NUM; i++)
			{
				tempArr=cmj.m_MyPAIVec[i];
				for (var j:number=1; j < GlobalConfig.CARD_VALUE_NUM; j++)
				{
					paiValue=tempArr[j];
					if (paiValue <= 0)
					{
						continue;
					}
					if (paiValue != 2)
					{
						return false;
					}
				}
			}
			cmj.m_GoodInfoArr.push(GlobalConfig.DUI_DUI_HU);
			return true;
		}

		// 碰碰胡
		protected checkPengPengHu(cmj:CMJ):boolean
		{
			if (cmj.m_ChiPAIVec.length > 0)
			{
				return false;
			}
			var tempArr:Array<number>;
			var paiValue:number;
			var hasJiang:boolean=false;
			for (var i:number=0; i < GlobalConfig.CARD_TYPE_NUM; i++)
			{
				tempArr=cmj.m_MyPAIVec[i];
				for (var j:number=1; j < GlobalConfig.CARD_VALUE_NUM; j++)
				{
					paiValue=tempArr[j];
					if (paiValue <= 0)
					{
						continue;
					}
					if (hasJiang && paiValue == 2)
					{
						return false;
					}
					if (paiValue == 2)
					{
						hasJiang=true;
					}
					if (paiValue < 2)
					{
						return false;
					}
				}
			}
			cmj.m_GoodInfoArr.push(GlobalConfig.PENG_PENG_HU);
			return true;
		}

		// 烂胡
		protected checkLanHu(cmj:CMJ):boolean
		{
			if (cmj.m_ChiPAIVec.length > 0 || cmj.m_PengPAIVec.length > 0 || cmj.m_GangPAIVec.length > 0)
			{
				return false;
			}
			var tempArr:Array<number>;
			var paiValue:number;
			var xingNum:number=0;
			var ziPaiPos:number=-100;
			for (var i:number=0; i < GlobalConfig.CARD_TYPE_NUM; i++)
			{
				tempArr=cmj.m_MyPAIVec[i];
				ziPaiPos=-100;
				for (var j:number=1; j < GlobalConfig.CARD_VALUE_NUM; j++)
				{
					paiValue=tempArr[j];
					if (paiValue <= 0)
					{
						continue;
					}
					if (paiValue > 1)
					{
						return false;
					}
					if (i == GlobalConfig.MJPAI_ZFB || i == GlobalConfig.MJPAI_FENG)
					{
						xingNum++;
					}
					else
					{
						if (j - ziPaiPos <= 2)
						{
							return false;
						}
						ziPaiPos=j;
					}

				}
			}
			
			var flag:boolean = this.checkQiXingHu(cmj,xingNum);
			if (flag == false)
			{
				cmj.m_GoodInfoArr.push(GlobalConfig.LAN_HU);
			}
			return true;
		}

		// 七星
		protected checkQiXingHu(cmj:CMJ,xingNum:number):boolean
		{
			if (xingNum == 7)
			{
				cmj.m_GoodInfoArr = new Array();
				cmj.m_GoodInfoArr.push(GlobalConfig.QI_XING_HU);
				return true;
			}
			return false;
		}

		// 单吊
		protected checkDanDiaoHu(cmj:CMJ):boolean
		{
			var count:number=cmj.getCurPaiNum();
			if (count == 2)
			{
				cmj.m_GoodInfoArr.push(GlobalConfig.DAN_DIAO_HU);
				return true;
			}

			return false;
		}

		// 杠上开花
		protected checkGangShangKaiHuaHu(cmj:CMJ):boolean
		{
			// 在胡了的情况下，拿到的最后一张牌是杠上来的就算杠上开花
			if (cmj.m_LastPAI.isGang == true)
			{
				if(cmj.m_LastPAIIsSelf == true)
				{
					cmj.m_GoodInfoArr.push(GlobalConfig.GANG_SHANG_KAI_HUA_HU);
				}
				else
				{
					cmj.m_GoodInfoArr.push(GlobalConfig.GANG_SHANG_FANG_PAO_HU);
				}
				return true;
			}
			return false;
		}

		protected checkZiMoHu(cmj:CMJ):boolean
		{
			if (cmj.m_LastPAIIsSelf == true)
			{
				cmj.m_GoodInfoArr.push(GlobalConfig.ZI_MO_HU);
				return true;
			}
			return false;
		}

		//判断是否胡牌的函数
		protected checkPingHu(cmj:CMJ):boolean
		{
			var allPai:Array<Array<number>> = cmj.copyMyHandPaiArr();
			var jiangPos:number = -1; //“将”的位置
			var yuShu:number = 0; //余数
			var jiangExisted:boolean=false;
			//是否满足3,3,3,3,2模型
			for (var i:number=0; i < 5; i++)
			{
				yuShu=allPai[i][0] % 3;
				if (yuShu == 1)
				{
					return false;
				}
				if (yuShu == 2)
				{
					if (jiangExisted)
					{
						return false;
					}
					jiangPos=i;
					jiangExisted=true;
				}
			}
			for (i=0; i < 5; i++)
			{
				if (i != jiangPos)
				{
					if (!this.analyze(allPai[i]))
					{
						return false;
					}
				}
			}
			//该类牌中要包含将,因为要对将进行轮询,效率较低,放在最后
			var success:boolean=false; //指示除掉“将”后能否通过
			for (var j:number=1; j < 10; j++) //对列进行操作,用j表示
			{
				if (allPai[jiangPos][j] >= 2)
				{
					//除去这2张将牌
					allPai[jiangPos][j]-=2;
					allPai[jiangPos][0]-=2;
					if (this.analyze(allPai[jiangPos]))
					{
						success=true;
					}
					//还原这2张将牌
					allPai[jiangPos][j]+=2;
					allPai[jiangPos][0]+=2;
					if (success)
						break;
				}
			}
			return success;
		}

		//分解成“刻”“顺”组合
		protected analyze(aKindPai:Array<number>):boolean
		{
			if (aKindPai[0] == 0)
			{
				return true;
			}
			//寻找第一张牌
			for (var j:number=1; j < 10; j++)
			{
				if (aKindPai[j] != 0)
				{
					break;
				}
			}
			var result:boolean;
			if (aKindPai[j] >= 3) //作为刻牌
			{
				//除去这3张刻牌
				aKindPai[j]-=3;
				aKindPai[0]-=3;
				result=this.analyze(aKindPai);
				//还原这3张刻牌
				aKindPai[j]+=3;
				aKindPai[0]+=3;
				return result;
			}
			//作为顺牌
			if ((j < 8) && (aKindPai[j + 1] > 0) && (aKindPai[j + 2] > 0))
			{
				//除去这3张顺牌
				aKindPai[j]--;
				aKindPai[j + 1]--;
				aKindPai[j + 2]--;
				aKindPai[0]-=3;
				result=this.analyze(aKindPai);
				//还原这3张顺牌
				aKindPai[j]++;
				aKindPai[j + 1]++;
				aKindPai[j + 2]++;
				aKindPai[0]+=3;
				return result;
			}
			return false;
		}
	}
}
