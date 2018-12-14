var MjGame;
(function (MjGame) {
    var GlobalConfig = /** @class */ (function () {
        function GlobalConfig() {
        }
        GlobalConfig.GetPaiPrefixByType = function (type) {
            var resPath = "";
            if (type == GlobalConfig.MJPAI_ZFB) {
                resPath = GlobalConfig.MJPAI_ZFB_RES_PATH_PRE;
            }
            else if (type == GlobalConfig.MJPAI_FENG) {
                resPath = GlobalConfig.MJPAI_FENG_RES_PATH_PRE;
            }
            else if (type == GlobalConfig.MJPAI_WAN) {
                resPath = GlobalConfig.MJPAI_WAN_RES_PATH_PRE;
            }
            else if (type == GlobalConfig.MJPAI_TIAO) {
                resPath = GlobalConfig.MJPAI_TIAO_RES_PATH_PRE;
            }
            else {
                resPath = GlobalConfig.MJPAI_BING_RES_PATH_PRE;
            }
            return resPath;
        };
        GlobalConfig.DESK_WIDHT = 1136;
        GlobalConfig.DESK_HEIGHT = 640;
        GlobalConfig.MAX_MEMBER_NUM = 2;
        //==================gate 服务器信息=================================
        GlobalConfig.HOST = '127.0.0.1';
        GlobalConfig.PORT = 3010;
        //==================玩家的视图位置=================================
        /**
         * 下面的位置
         */
        GlobalConfig.DOWN_POS = 0;
        /**
         * 右面的位置
         */
        GlobalConfig.RIGHT_POS = 1;
        /**
         * 上面的位置
         */
        GlobalConfig.UP_POS = 2;
        /**
         * 左面的位置
         */
        GlobalConfig.LEFT_POS = 3;
        // 胡牌类型
        GlobalConfig.TIAN_HU = new MjGame.StGoodInfo(1, 8, "天胡"); //天胡
        GlobalConfig.DI_HU = new MjGame.StGoodInfo(2, 8, "地胡"); //地胡
        GlobalConfig.DUI_DUI_HU = new MjGame.StGoodInfo(3, 8, "对对胡"); //对对胡
        GlobalConfig.PENG_PENG_HU = new MjGame.StGoodInfo(4, 8, "碰碰胡"); //碰碰胡
        GlobalConfig.LAN_HU = new MjGame.StGoodInfo(5, 8, "烂胡"); //烂胡
        GlobalConfig.QI_XING_HU = new MjGame.StGoodInfo(6, 8, "七星"); //七星
        GlobalConfig.DAN_DIAO_HU = new MjGame.StGoodInfo(7, 8, "单吊"); //单吊
        GlobalConfig.GANG_SHANG_KAI_HUA_HU = new MjGame.StGoodInfo(8, 8, "杠开"); //杠开
        GlobalConfig.GANG_SHANG_FANG_PAO_HU = new MjGame.StGoodInfo(9, 8, "杠放"); //杠放
        GlobalConfig.PENG_BAO_HU = new MjGame.StGoodInfo(10, 8, "碰宝"); //碰宝
        GlobalConfig.ZHUANG_BAO_HU = new MjGame.StGoodInfo(11, 8, "装宝"); //装宝
        GlobalConfig.PING_HU = new MjGame.StGoodInfo(12, 2, "平胡"); //平胡
        GlobalConfig.ZI_MO_HU = new MjGame.StGoodInfo(13, 4, "自摸"); //自摸
        GlobalConfig.MAI_BAO_HU = new MjGame.StGoodInfo(14, 4, "卖宝"); //卖宝
        // 麻将基本数据
        GlobalConfig.ALL_CARD_NUM = 136;
        GlobalConfig.HAND_CARD_NUM = 13;
        GlobalConfig.HZ_PAI_NUM = 0;
        GlobalConfig.CARD_TYPE_NUM = 5;
        GlobalConfig.CARD_VALUE_NUM = 10;
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
        GlobalConfig.MJPAI_ZFB = 0; //中，发，白  
        GlobalConfig.MJPAI_FENG = 1; //东西南北风  
        GlobalConfig.MJPAI_WAN = 2; //万  
        GlobalConfig.MJPAI_TIAO = 3; //条  
        GlobalConfig.MJPAI_BING = 4; //饼  
        // 对应资源图片的前缀
        GlobalConfig.MJPAI_ZFB_RES_PATH_PRE = "zhong_";
        GlobalConfig.MJPAI_FENG_RES_PATH_PRE = "feng_";
        GlobalConfig.MJPAI_WAN_RES_PATH_PRE = "w_";
        GlobalConfig.MJPAI_TIAO_RES_PATH_PRE = "tiao_";
        GlobalConfig.MJPAI_BING_RES_PATH_PRE = "tong_";
        return GlobalConfig;
    }());
    MjGame.GlobalConfig = GlobalConfig;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=GlobalConfig.js.map