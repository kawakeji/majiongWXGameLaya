module MjGame{
	import StPAI = MjGame.StPAI;
	import StPAIEx = MjGame.StPAIEx;
	export class CMJManager
	{

		m_MJVec:Array<StPAI>;
		// 癞子牌
		m_HumPai:StPAI;

		//剩余牌数
		remainNum:number;

		//当前打的牌
		curOutPai:StPAI;
		//当前操作的牌，杠的，碰的，吃的，胡的
		curOperationPai:StPAI;

		private static instance:CMJManager;
		/**
		 * 获取实例的静态方法实例
		 * @return
		 *
		 */
		public static getInstance():CMJManager
		{
			if(!this.instance)
			{
				this.instance = new CMJManager();
			}
			return this.instance;
		}

		//初始化牌  
		initPai() :void
		{  
			this.m_MJVec = [];  
			var t_Pai:StPAI;
			//中发白  
			for(var i:number = 1 ; i <= 3 ; i++)  
			{  
				t_Pai = new StPAI();
				t_Pai.m_Type = GlobalConfig.MJPAI_ZFB;  
				t_Pai.m_Value = i;  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
			}  
			//东南西北  
			for(i = 1 ; i <= 4 ; i++)  
			{  
				t_Pai = new StPAI();
				t_Pai.m_Type = GlobalConfig.MJPAI_FENG;  
				t_Pai.m_Value = i;  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
			}  
			//万  
			for(i = 1 ; i <= 9 ; i++)  
			{  
				t_Pai = new StPAI();
				t_Pai.m_Type = GlobalConfig.MJPAI_WAN;  
				t_Pai.m_Value = i;  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
			}  
			//条  
			for(i = 1 ; i <= 9 ; i++)  
			{  
				t_Pai = new StPAI();
				t_Pai.m_Type = GlobalConfig.MJPAI_TIAO;  
				t_Pai.m_Value = i;  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
			}  
			//饼  
			for(i = 1 ; i <= 9 ; i++)  
			{  
				t_Pai = new StPAI();  
				t_Pai.m_Type = GlobalConfig.MJPAI_BING;  
				t_Pai.m_Value = i;  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
				this.m_MJVec.push(t_Pai);  
			}  
		}  
		
		//洗牌  
		xiPai():void 
		{  
			var index:number;
			var tmp:StPAI;  
			var len:number = this.m_MJVec.length;
			for (var i:number = 0; i < len; i++)  
			{  
				index = Math.floor(Math.random() * 9999999 % (len - i) + i);  
				if (index != i)  
				{  
					tmp = this.m_MJVec[i];  
					this.m_MJVec[i] = this.m_MJVec[index];  
					this.m_MJVec[index] = tmp;  
				}  
			}  
		}  
		
		//起牌  
		getAPai():StPAIEx
		{  
			var stPai:StPAI = this.m_MJVec.pop();
			var t_Pai:StPAIEx = new StPAIEx();  
			t_Pai.m_NewPai  = stPai;  
			t_Pai.m_PaiNum = this.m_MJVec.length;  
			if(t_Pai.m_PaiNum == GlobalConfig.HZ_PAI_NUM)  
			{  
				t_Pai.m_IsHZ = true;  
			}  
			else  
			{  
				t_Pai.m_IsHZ = false;  
			}  
			this.remainNum = t_Pai.m_PaiNum;
			console.log("剩余牌数" +　this.remainNum);
			return t_Pai;  
		}  

		randomHunPai():void
		{
			var hunPai = new StPAI(1,2);
			this.setHunPai(hunPai);
		}

		setHunPai(stPai:StPAI):void
		{
			this.m_HumPai = stPai;
		}

		getHunPai():StPAI
		{
			return this.m_HumPai
		}

		traceSinglePai(mType:number,mValue:number):string
		{
			var str:string="";
			if (mType == GlobalConfig.MJPAI_ZFB)
			{
				if (mValue == 1)
				{
					str+="中,";
				}
				else if (mValue == 2)
				{
					str+="發,";
				}
				else if (mValue == 3)
				{
					str+="白,";
				}
			}
			else if (mType == GlobalConfig.MJPAI_FENG)
			{
				if (mValue == 1)
				{
					str+="东,";
				}
				else if (mValue == 2)
				{
					str+="南,";
				}
				else if (mValue == 3)
				{
					str+="西,";
				}
				else if (mValue == 4)
				{
					str+="北,";
				}
			}
			else if (mType == GlobalConfig.MJPAI_WAN)
			{
				str+=mValue + "万,";
			}
			else if (mType == GlobalConfig.MJPAI_TIAO)
			{
				str+=mValue + "条,";
			}
			else if (mType == GlobalConfig.MJPAI_BING)
			{
				str+=mValue + "饼,";
			}

			return str;
		}


		traceAllPai(compositionAllArr:Array<Array<number>>):String
		{
			var str:String="";
			for (var i:number=0; i < GlobalConfig.CARD_TYPE_NUM; i++)
			{
				for (var j:number=1; j < GlobalConfig.CARD_VALUE_NUM; j++)
				{
					if (compositionAllArr[i][j] > 0)
					{
						for (var k:number=0; k < compositionAllArr[i][j]; k++)
						{
							str = str + this.traceSinglePai(i,j);
						}
					}
				}
			}
			return str;
		}
	}
}