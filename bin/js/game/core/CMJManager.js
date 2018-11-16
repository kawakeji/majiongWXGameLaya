var MjGame;
(function (MjGame) {
    var StPAI = MjGame.StPAI;
    var StPAIEx = MjGame.StPAIEx;
    var CMJManager = /** @class */ (function () {
        function CMJManager() {
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        CMJManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new CMJManager();
            }
            return this.instance;
        };
        //初始化牌  
        CMJManager.prototype.initPai = function () {
            this.m_MJVec = [];
            var t_Pai;
            //中发白  
            for (var i = 1; i <= 3; i++) {
                t_Pai = new StPAI();
                t_Pai.m_Type = MjGame.GlobalConfig.MJPAI_ZFB;
                t_Pai.m_Value = i;
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
            }
            //东南西北  
            for (i = 1; i <= 4; i++) {
                t_Pai = new StPAI();
                t_Pai.m_Type = MjGame.GlobalConfig.MJPAI_FENG;
                t_Pai.m_Value = i;
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
            }
            //万  
            for (i = 1; i <= 9; i++) {
                t_Pai = new StPAI();
                t_Pai.m_Type = MjGame.GlobalConfig.MJPAI_WAN;
                t_Pai.m_Value = i;
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
            }
            //条  
            for (i = 1; i <= 9; i++) {
                t_Pai = new StPAI();
                t_Pai.m_Type = MjGame.GlobalConfig.MJPAI_TIAO;
                t_Pai.m_Value = i;
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
            }
            //饼  
            for (i = 1; i <= 9; i++) {
                t_Pai = new StPAI();
                t_Pai.m_Type = MjGame.GlobalConfig.MJPAI_BING;
                t_Pai.m_Value = i;
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
                this.m_MJVec.push(t_Pai);
            }
        };
        //洗牌  
        CMJManager.prototype.xiPai = function () {
            var index;
            var tmp;
            var len = this.m_MJVec.length;
            for (var i = 0; i < len; i++) {
                index = Math.floor(Math.random() * 9999999 % (len - i) + i);
                if (index != i) {
                    tmp = this.m_MJVec[i];
                    this.m_MJVec[i] = this.m_MJVec[index];
                    this.m_MJVec[index] = tmp;
                }
            }
        };
        //起牌  
        CMJManager.prototype.getAPai = function () {
            var stPai = this.m_MJVec.pop();
            var t_Pai = new StPAIEx();
            t_Pai.m_NewPai = stPai;
            t_Pai.m_PaiNum = this.m_MJVec.length;
            if (t_Pai.m_PaiNum == MjGame.GlobalConfig.HZ_PAI_NUM) {
                t_Pai.m_IsHZ = true;
            }
            else {
                t_Pai.m_IsHZ = false;
            }
            this.remainNum = t_Pai.m_PaiNum;
            console.log("剩余牌数" + this.remainNum);
            return t_Pai;
        };
        CMJManager.prototype.randomHunPai = function () {
            var hunPai = new StPAI(1, 2);
            this.setHunPai(hunPai);
        };
        CMJManager.prototype.setHunPai = function (stPai) {
            this.m_HumPai = stPai;
        };
        CMJManager.prototype.getHunPai = function () {
            return this.m_HumPai;
        };
        CMJManager.prototype.traceSinglePai = function (mType, mValue) {
            var str = "";
            if (mType == MjGame.GlobalConfig.MJPAI_ZFB) {
                if (mValue == 1) {
                    str += "中,";
                }
                else if (mValue == 2) {
                    str += "發,";
                }
                else if (mValue == 3) {
                    str += "白,";
                }
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_FENG) {
                if (mValue == 1) {
                    str += "东,";
                }
                else if (mValue == 2) {
                    str += "南,";
                }
                else if (mValue == 3) {
                    str += "西,";
                }
                else if (mValue == 4) {
                    str += "北,";
                }
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_WAN) {
                str += mValue + "万,";
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_TIAO) {
                str += mValue + "条,";
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_BING) {
                str += mValue + "饼,";
            }
            return str;
        };
        CMJManager.prototype.traceAllPai = function (compositionAllArr) {
            var str = "";
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                    if (compositionAllArr[i][j] > 0) {
                        for (var k = 0; k < compositionAllArr[i][j]; k++) {
                            str = str + this.traceSinglePai(i, j);
                        }
                    }
                }
            }
            return str;
        };
        return CMJManager;
    }());
    MjGame.CMJManager = CMJManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CMJManager.js.map