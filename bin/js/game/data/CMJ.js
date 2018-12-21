var MjGame;
(function (MjGame) {
    var StPAI = MjGame.StPAI;
    var StCHI = MjGame.StCHI;
    var CheckHUManager = MjGame.CheckHUManager;
    var CheckHunHuManager = MjGame.CheckHunHuManager;
    var CMJManager = MjGame.CMJManager;
    var CMJ = /** @class */ (function () {
        function CMJ(cmjManager) {
            this.checkHuManager = CheckHUManager.getInstance();
            this.checkHunHuManager = CheckHunHuManager.getInstance();
            this.m_LastPAIIsSelf = false; // 最后一张牌的是否是自摸上来的
            this.fengChiConfig = {};
            this.cmjManager = CMJManager.getInstance();
            this.init();
        }
        CMJ.prototype.init = function () {
            this.m_OutPAIVec = [];
            this.m_MyPAIVec = [];
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                this.m_MyPAIVec[i] = [];
                for (var j = 0; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                    this.m_MyPAIVec[i][j] = 0;
                }
            }
            this.m_LastPAI = new StPAI();
            this.m_LastPAIIsSelf = false;
            this.m_GoodInfoArr = new Array();
            this.m_ChiPAIVec = new Array();
            this.m_PengPAIVec = new Array();
            this.m_GangPAIVec = new Array();
            this.m_HuPAIVec = new Array();
            this.fengChiConfig = {};
            this.fengChiConfig[1] = "2,3|2,4|3,4".split("|");
            this.fengChiConfig[2] = "1,3|1,4|3,4".split("|");
            this.fengChiConfig[3] = "1,2|2,4|1,4".split("|");
            this.fengChiConfig[4] = "2,3|1,2|1,3".split("|");
        };
        CMJ.prototype.getCurPaiNum = function () {
            var tempArr;
            var tempPai;
            var count = 0;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = this.m_MyPAIVec[i];
                count += tempArr[0];
            }
            return count;
        };
        CMJ.prototype.getPaiByPos = function (pos) {
            var tempArr;
            var tempPai;
            var count = 0;
            var paiCount = 0;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = this.m_MyPAIVec[i];
                if (tempArr[0] > 0) {
                    for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                        paiCount = tempArr[j];
                        count = count + paiCount;
                        if (count >= pos) {
                            tempPai = new StPAI();
                            tempPai.m_Type = i;
                            tempPai.m_Value = j;
                            return tempPai;
                        }
                    }
                }
            }
            return tempPai;
        };
        CMJ.prototype.getPaiPos = function (pai) {
            var tempArr;
            var count = 0;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = this.m_MyPAIVec[i];
                if (tempArr[0] > 0) {
                    for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                        if (i == pai.m_Type && j == pai.m_Value) {
                            return count;
                        }
                        count++;
                    }
                }
            }
            return -1;
        };
        //加入新牌,并排序
        CMJ.prototype.addPai = function (pai, isChangeLastPai, isSelfFetch) {
            if (isChangeLastPai === void 0) { isChangeLastPai = true; }
            if (isSelfFetch === void 0) { isSelfFetch = true; }
            if (!pai)
                return;
            var p_Type = pai.m_Type;
            var p_Value = pai.m_Value;
            var tempArr = this.m_MyPAIVec[p_Type];
            var count = tempArr[0];
            var curCount = tempArr[p_Value];
            if (curCount < 4 && count < 14) {
                count = count + 1 > 14 ? 14 : count + 1;
                tempArr[0] = count;
                curCount = curCount + 1 > 4 ? 4 : curCount + 1;
                tempArr[p_Value] = curCount;
            }
            if (isChangeLastPai) {
                this.m_LastPAI = pai;
            }
            this.m_LastPAIIsSelf = isSelfFetch;
        };
        //打牌  
        CMJ.prototype.delPai = function (pai, isAddToOutPaiVec) {
            if (isAddToOutPaiVec === void 0) { isAddToOutPaiVec = true; }
            if (!pai)
                return;
            var p_Type = pai.m_Type;
            var p_Value = pai.m_Value;
            var tempArr = this.m_MyPAIVec[p_Type];
            var count = tempArr[0];
            var curCount = tempArr[p_Value];
            if (curCount > 0) {
                count = count - 1 < 0 ? 0 : count - 1;
                tempArr[0] = count;
                curCount = curCount - 1 < 0 ? 0 : curCount - 1;
                tempArr[p_Value] = curCount;
            }
            if (isAddToOutPaiVec) {
                this.m_OutPAIVec.push(pai);
            }
            this.m_LastPAI = null;
        };
        CMJ.prototype.setHunPai = function (hunPai) {
            this.cmjManager.setHunPai(hunPai);
        };
        // 获取手牌癞子的数量
        CMJ.prototype.getHunPaiNum = function (hunPai) {
            var tempArr;
            var count = 0;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = this.m_MyPAIVec[i];
                for (var j = 0; j < tempArr.length; j++) {
                    if (i == hunPai.m_Type && j == hunPai.m_Value) {
                        return tempArr[j];
                    }
                }
            }
            return count;
        };
        // 获取打出手牌中癞子的数量
        CMJ.prototype.getOutHunPaiNum = function (hunPai) {
            var stPai;
            var count = 0;
            for (var i = 0; i < this.m_OutPAIVec.length; i++) {
                stPai = this.m_OutPAIVec[i];
                if (stPai.m_Type == hunPai.m_Type && stPai.m_Value == hunPai.m_Value) {
                    count = count + 1;
                }
            }
            return count;
        };
        // 获取吃牌的类型个数
        CMJ.prototype.getChiPaiNum = function () {
            this.checkChiPai(this.cmjManager.curOutPai);
            return this.m_TempChiPAIVec.length;
        };
        //吃牌 
        CMJ.prototype.checkChiPai = function (pai) {
            var p_Type = pai.m_Type;
            var p_Value = pai.m_Value;
            this.m_TempChiPAIVec = new Array();
            var tempArr = this.m_MyPAIVec[p_Type].concat([]);
            var iSize = tempArr[0];
            var t_Chi;
            if (iSize >= 2) {
                if (p_Type == MjGame.GlobalConfig.MJPAI_FENG) {
                    var configValueArr;
                    var configArr = this.fengChiConfig[p_Value];
                    for (var j = 0; j < configArr.length; j++) {
                        configValueArr = configArr[j].split(",");
                        if (tempArr[configValueArr[0]] > 0 && tempArr[configValueArr[1]] > 0) {
                            t_Chi = new StCHI();
                            t_Chi.m_ChiPai1 = this.getStPaiNewValue(pai, Number(configValueArr[0]));
                            t_Chi.m_ChiPai2 = this.getStPaiNewValue(pai, Number(configValueArr[1]));
                            t_Chi.m_ChiPai3 = pai;
                            t_Chi.m_byChiIndex = 3;
                            this.m_TempChiPAIVec.push(t_Chi);
                        }
                    }
                }
                else {
                    if (p_Value > 2 && tempArr[p_Value - 2] > 0 && tempArr[p_Value - 1] > 0) {
                        t_Chi = new StCHI();
                        t_Chi.m_ChiPai1 = this.getStPaiNewValue(pai, p_Value - 2);
                        t_Chi.m_ChiPai2 = this.getStPaiNewValue(pai, p_Value - 1);
                        t_Chi.m_ChiPai3 = pai;
                        t_Chi.m_byChiIndex = 3;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                    if (p_Value > 1 && p_Value < MjGame.GlobalConfig.CARD_VALUE_NUM - 1 && tempArr[p_Value - 1] > 0 && tempArr[p_Value + 1] > 0) {
                        t_Chi = new StCHI();
                        t_Chi.m_ChiPai1 = this.getStPaiNewValue(pai, p_Value - 1);
                        t_Chi.m_ChiPai2 = pai;
                        t_Chi.m_ChiPai3 = this.getStPaiNewValue(pai, p_Value + 1);
                        t_Chi.m_byChiIndex = 2;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                    if (p_Value > 0 && p_Value < MjGame.GlobalConfig.CARD_VALUE_NUM - 2 && tempArr[p_Value + 1] > 0 && tempArr[p_Value + 2] > 0) {
                        t_Chi = new StCHI();
                        t_Chi.m_ChiPai1 = pai;
                        t_Chi.m_ChiPai2 = this.getStPaiNewValue(pai, p_Value + 1);
                        t_Chi.m_ChiPai3 = this.getStPaiNewValue(pai, p_Value + 2);
                        t_Chi.m_byChiIndex = 1;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                }
            }
        };
        CMJ.prototype.doChiPaiServer = function (stChi) {
            var stPai = MjGame.util.getByChiPai(stChi);
            this.addPai(stPai, false);
            this.delPai(MjGame.util.getByChiPai(stChi, 1), false);
            this.delPai(MjGame.util.getByChiPai(stChi, 2), false);
            this.delPai(MjGame.util.getByChiPai(stChi, 3), false);
            this.m_ChiPAIVec.push(stChi);
        };
        CMJ.prototype.getStPaiNewValue = function (stPai, value) {
            var pai = new StPAI();
            pai.m_Type = stPai.m_Type;
            pai.m_Value = value;
            return pai;
        };
        // 被吃的牌的返回空
        CMJ.prototype.getByChiPai = function (stChi, index) {
            if (index == stChi.m_byChiIndex) {
                return null;
            }
            var pai = MjGame.util.getByChiPai(stChi, index);
            return pai;
        };
        CMJ.prototype.doPengPaiServer = function (t_Peng) {
            var pai = t_Peng.m_stPai;
            this.addPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.m_PengPAIVec.push(t_Peng);
        };
        //杠牌  
        CMJ.prototype.doGangPaiServer = function (t_Gang) {
            var tempPai = t_Gang.m_stPai;
            this.delPai(tempPai, false);
            this.delPai(tempPai, false);
            this.delPai(tempPai, false);
            this.delPai(tempPai, false);
            this.m_GangPAIVec.push(t_Gang);
            if (t_Gang.m_Otype == MjGame.GlobalConfig.GANG_BU) {
                // 补杠的要把碰过的牌堆里删掉
                for (var j = 0; j < this.m_PengPAIVec.length; j++) {
                    var st = this.m_PengPAIVec[j].m_stPai;
                    if (st.m_Type == tempPai.m_Type && st.m_Value == tempPai.m_Value) {
                        this.m_PengPAIVec.splice(j, 1);
                    }
                }
            }
        };
        CMJ.prototype.doHuPai = function (pai) {
            var tempStPai;
            var arr;
            var len;
            for (var j = 0; j < MjGame.GlobalConfig.CARD_TYPE_NUM; j++) {
                arr = this.m_MyPAIVec[j];
                if (arr[0] > 0) {
                    for (var i = 1; i < MjGame.GlobalConfig.CARD_VALUE_NUM; i++) {
                        len = arr[i];
                        if (len > 0) {
                            for (var k = 0; k < len; k++) {
                                tempStPai = new StPAI(j, i);
                                this.delPai(tempStPai, false);
                                this.m_HuPAIVec.push(tempStPai);
                            }
                        }
                    }
                }
            }
            if (pai) {
                this.m_HuPAIVec.push(pai);
            }
        };
        CMJ.prototype.getChiPai = function () {
            return this.m_ChiPAIVec[this.m_ChiPAIVec.length - 1];
        };
        CMJ.prototype.getPengPai = function () {
            return this.m_PengPAIVec[this.m_PengPAIVec.length - 1];
        };
        CMJ.prototype.getGangPai = function () {
            return this.m_GangPAIVec[this.m_GangPAIVec.length - 1];
        };
        CMJ.prototype.copyMyHandPaiArr = function () {
            var compositionAllArr = this.m_MyPAIVec.concat([]);
            return compositionAllArr;
        };
        CMJ.prototype.traceGoodInfo = function () {
            var str = "";
            var count = 0;
            for (var i = 0; i < this.m_GoodInfoArr.length; i++) {
                var goodInfo = this.m_GoodInfoArr[i];
                str = str + goodInfo.m_GoodName;
                count = count + goodInfo.m_GoodValue;
                if (i < this.m_GoodInfoArr.length - 1) {
                    str = str + "+";
                }
            }
            str = str + ":" + count + "番";
            return str;
        };
        return CMJ;
    }());
    MjGame.CMJ = CMJ;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CMJ.js.map