module MjGame
{
    export class GlobalConfig
    {

        public static DESK_WIDHT:number = 1136;
		
		public static DESK_HEIGHT:number = 640;
		
		public static OTHER_PLAYER_NUM:number = 3;
		
		//==================玩家的视图位置=================================
		/**
		 * 下面的位置 
		 */		
		public static DOWN_POS:number = 0;
		/**
		 * 右面的位置 
		 */	
		public static RIGHT_POS:number = 1;
		/**
		 * 上面的位置 
		 */	
		public static UP_POS:number = 2;
		/**
		 * 左面的位置 
		 */	
		public static LEFT_POS:number = 3;


        // 胡牌类型
        public static TIAN_HU:StGoodInfo = new StGoodInfo(1,8,"天胡"); //天胡
        public static DI_HU:StGoodInfo = new StGoodInfo(2,8,"地胡"); //地胡
        public static DUI_DUI_HU:StGoodInfo = new StGoodInfo(3,8,"对对胡"); //对对胡
        public static PENG_PENG_HU:StGoodInfo = new StGoodInfo(4,8,"碰碰胡"); //碰碰胡
        public static LAN_HU:StGoodInfo = new StGoodInfo(5,8,"烂胡"); //烂胡
        public static QI_XING_HU:StGoodInfo = new StGoodInfo(6,8,"七星"); //七星
        public static DAN_DIAO_HU:StGoodInfo = new StGoodInfo(7,8,"单吊"); //单吊
        public static GANG_SHANG_KAI_HUA_HU:StGoodInfo = new StGoodInfo(8,8,"杠开"); //杠开
        public static GANG_SHANG_FANG_PAO_HU:StGoodInfo = new StGoodInfo(9,8,"杠放"); //杠放
        public static PENG_BAO_HU:StGoodInfo = new StGoodInfo(10,8,"碰宝"); //碰宝
        public static ZHUANG_BAO_HU:StGoodInfo = new StGoodInfo(11,8,"装宝"); //装宝
        public static PING_HU:StGoodInfo = new StGoodInfo(12,2,"平胡"); //平胡
        public static ZI_MO_HU:StGoodInfo = new StGoodInfo(13,4,"自摸"); //自摸
        public static MAI_BAO_HU:StGoodInfo = new StGoodInfo(14,4,"卖宝"); //卖宝

        // 麻将基本数据
        public static ALL_CARD_NUM:number = 136;
        public static HAND_CARD_NUM:number = 13;
        public static HZ_PAI_NUM:number = 0;
        public static CARD_TYPE_NUM:number = 5;
        public static CARD_VALUE_NUM:number = 10;


        /**
         //  m_Type      m_Value  
         //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//  
         //  0       |   中   1   发2  白3                                               
         //          |  
         //  1       |   东 1 西2  南3  北4                                   
         //          |  
         //  2       |   一万  二万  ……  九万  (1~9)
         //          |  
         //  3       |   一条  二条  ……  九条  (1~9)                  
         //          |  
         //  4       |   一饼  二饼  ……  九饼  (1~9)
         //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//   
         */        
        public static MJPAI_ZFB:number =  0   //中，发，白  
        public static MJPAI_FENG:number = 1   //东西南北风  
        public static MJPAI_WAN:number =  2   //万  
        public static MJPAI_TIAO:number = 3   //条  
        public static MJPAI_BING:number = 4   //饼  

        // 对应资源图片的前缀
        public static MJPAI_ZFB_RES_PATH_PRE:string = "zhong_";
        public static MJPAI_FENG_RES_PATH_PRE:string = "feng_";
        public static MJPAI_WAN_RES_PATH_PRE:string = "w_";
        public static MJPAI_TIAO_RES_PATH_PRE:string = "tiao_";
        public static MJPAI_BING_RES_PATH_PRE:string = "tong_";

        public static GetPaiPrefixByType(type:number):string
        {
            var resPath:string = "";
            if (type == GlobalConfig.MJPAI_ZFB) 
            {
                resPath = GlobalConfig.MJPAI_ZFB_RES_PATH_PRE;
            }
            else if (type == GlobalConfig.MJPAI_FENG)
            {
                resPath = GlobalConfig.MJPAI_FENG_RES_PATH_PRE;
            }
            else if (type == GlobalConfig.MJPAI_WAN)
            {
                resPath = GlobalConfig.MJPAI_WAN_RES_PATH_PRE;
            }
            else if (type == GlobalConfig.MJPAI_TIAO)
            {
                resPath = GlobalConfig.MJPAI_TIAO_RES_PATH_PRE;
            }
            else
            {
                resPath = GlobalConfig.MJPAI_BING_RES_PATH_PRE;
            }
            return resPath
        }
    }
}