var MjGame;
(function (MjGame) {
    var StPAI = MjGame.StPAI;
    var StCHI = MjGame.StCHI;
    var CheckHUManager = MjGame.CheckHUManager;
    var CheckHunHuManager = MjGame.CheckHunHuManager;
    var CMJManager = MjGame.CMJManager;
    var CMJ = /** @class */ (function () {
        function CMJ() {
            this.checkHuManager = CheckHUManager.getInstance();
            this.checkHunHuManager = CheckHunHuManager.getInstance();
            this.cmjManager = CMJManager.getInstance();
            this.m_LastPAIIsSelf = false; // 最后一张牌的是否是自摸上来的
            this.fengChiConfig = {};
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
            this.m_TempChiPAIVec = new Array();
            this.m_TempPengPAIVec = new Array();
            this.m_TempGangPAIVec = new Array();
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
                            t_Chi.m_Type = p_Type;
                            t_Chi.m_Value1 = Number(configValueArr[0]);
                            t_Chi.m_Value2 = Number(configValueArr[1]);
                            t_Chi.m_Value3 = p_Value;
                            t_Chi.byChiIndex = 3;
                            this.m_TempChiPAIVec.push(t_Chi);
                        }
                    }
                }
                else {
                    if (p_Value > 2 && tempArr[p_Value - 2] > 0 && tempArr[p_Value - 1] > 0) {
                        t_Chi = new StCHI();
                        t_Chi.m_Type = p_Type;
                        t_Chi.m_Value1 = p_Value - 2;
                        t_Chi.m_Value2 = p_Value - 1;
                        t_Chi.m_Value3 = p_Value;
                        t_Chi.byChiIndex = 3;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                    if (p_Value > 1 && p_Value < MjGame.GlobalConfig.CARD_VALUE_NUM - 1 && tempArr[p_Value - 1] > 0 && tempArr[p_Value + 1] > 0) {
                        t_Chi = new StCHI();
                        t_Chi.m_Type = p_Type;
                        t_Chi.m_Value1 = p_Value - 1;
                        t_Chi.m_Value2 = p_Value;
                        t_Chi.m_Value3 = p_Value + 1;
                        t_Chi.byChiIndex = 2;
                        this.m_TempChiPAIVec.push(t_Chi);
                    }
                    if (p_Value > 0 && p_Value < MjGame.GlobalConfig.CARD_VALUE_NUM - 2 && tempArr[p_Value + 1] > 0 && tempArr[p_Value + 2] > 0) {
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
            if (this.m_TempChiPAIVec.length > 0) {
                return true;
            }
            return false;
        };
        CMJ.prototype.doChiPaiServer = function (stChi) {
            var stPai = stChi.getPai(stChi.byChiIndex);
            this.addPai(stPai, false);
            this.delPai(stChi.getPai(1), false);
            this.delPai(stChi.getPai(2), false);
            this.delPai(stChi.getPai(3), false);
            this.m_ChiPAIVec.push(stChi);
        };
        //吃牌  
        CMJ.prototype.doChiPai = function (p_iIndex, pai) {
            this.addPai(pai, false);
            var tempCHI;
            for (var i = 0; i < this.m_TempChiPAIVec.length; i++) {
                tempCHI = this.m_TempChiPAIVec[i];
                if (i == p_iIndex) {
                    this.delPai(tempCHI.getPai(1), false);
                    this.delPai(tempCHI.getPai(2), false);
                    this.delPai(tempCHI.getPai(3), false);
                    this.m_ChiPAIVec.push(tempCHI);
                    return true;
                }
            }
            return false;
        };
        //碰牌  
        CMJ.prototype.checkPengPai = function (pai) {
            var p_Type = pai.m_Type;
            var p_Value = pai.m_Value;
            this.m_TempPengPAIVec = new Array();
            var tempArr = this.m_MyPAIVec[p_Type];
            var iSize = tempArr[p_Value];
            var t_Peng;
            if (iSize >= 2) {
                t_Peng = new StPAI();
                t_Peng.m_Type = p_Type;
                t_Peng.m_Value = p_Value;
                this.m_TempPengPAIVec.push(t_Peng);
            }
            if (this.m_TempPengPAIVec.length > 0) {
                return true;
            }
            return false;
        };
        //碰牌  
        CMJ.prototype.doPengPai = function (pai) {
            this.addPai(pai, false);
            var tempPai = null;
            for (var i = 0; i < this.m_TempPengPAIVec.length; i++) {
                tempPai = this.m_TempPengPAIVec[i];
                if (tempPai.m_Type == pai.m_Type && tempPai.m_Value == pai.m_Value) {
                    this.delPai(tempPai, false);
                    this.delPai(tempPai, false);
                    this.delPai(tempPai, false);
                    this.m_PengPAIVec.push(tempPai);
                    return true;
                }
            }
            return false;
        };
        CMJ.prototype.doPengPaiServer = function (pai) {
            this.addPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.m_PengPAIVec.push(pai);
        };
        /**
         * 检测是否能杠
         * @param pai
         * @param isSelfHad 是自己摸得牌，还是别人打的
         * @return
         *
         */
        CMJ.prototype.checkGangPai = function (pai, isSelfHad) {
            if (isSelfHad === void 0) { isSelfHad = true; }
            var p_Type = pai.m_Type;
            var p_Value = pai.m_Value;
            this.m_TempGangPAIVec = new Array();
            var tempArr = this.m_MyPAIVec[p_Type];
            var iSize = tempArr[p_Value];
            var t_Gang;
            if (isSelfHad) {
                if (iSize >= 4) {
                    t_Gang = new StPAI();
                    t_Gang.m_Type = p_Type;
                    t_Gang.m_Value = p_Value;
                    this.m_TempGangPAIVec.push(t_Gang);
                }
                // 检测已经碰的牌中是否能补杠
                for (var i = 0; i < this.m_PengPAIVec.length; i++) {
                    var st = this.m_PengPAIVec[i];
                    if (st.m_Type == p_Type && st.m_Value == p_Value) {
                        t_Gang = new StPAI();
                        t_Gang.m_Type = p_Type;
                        t_Gang.m_Value = p_Value;
                        this.m_TempGangPAIVec.push(t_Gang);
                        break;
                    }
                }
                //可能有4张的开始没有杠，想等后面再杠的
                for (i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                    tempArr = this.m_MyPAIVec[i];
                    if (tempArr[0] < 4)
                        continue;
                    for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                        iSize = tempArr[j];
                        if (iSize >= 4) {
                            t_Gang = new StPAI();
                            t_Gang.m_Type = p_Type;
                            t_Gang.m_Value = p_Value;
                            this.m_TempGangPAIVec.push(t_Gang);
                        }
                    }
                }
            }
            else {
                if (iSize >= 3) {
                    t_Gang = new StPAI();
                    t_Gang.m_Type = p_Type;
                    t_Gang.m_Value = p_Value;
                    this.m_TempGangPAIVec.push(t_Gang);
                }
            }
            if (this.m_TempGangPAIVec.length > 0) {
                return true;
            }
            return false;
        };
        //杠牌  
        CMJ.prototype.doGangPai = function (pai) {
            var tempPai = null;
            for (var i = 0; i < this.m_TempGangPAIVec.length; i++) {
                tempPai = this.m_TempGangPAIVec[i];
                if (tempPai.m_Type == pai.m_Type && tempPai.m_Value == pai.m_Value) {
                    this.delPai(tempPai, false);
                    this.delPai(tempPai, false);
                    this.delPai(tempPai, false);
                    this.delPai(tempPai, false);
                    this.m_GangPAIVec.push(tempPai);
                    // 检测已经碰的牌中是否能补杠
                    for (var j = 0; j < this.m_PengPAIVec.length; j++) {
                        var st = this.m_PengPAIVec[j];
                        if (st.m_Type == tempPai.m_Type && st.m_Value == tempPai.m_Value) {
                            this.m_PengPAIVec.splice(j, 1);
                            return true;
                        }
                    }
                    return true;
                }
            }
            return false;
        };
        //杠牌  
        CMJ.prototype.doGangPaiServer = function (pai) {
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.delPai(pai, false);
            this.m_GangPAIVec.push(pai);
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
        //检测胡  
        CMJ.prototype.checkHU = function (pai, isSelfFetch) {
            if (isSelfFetch === void 0) { isSelfFetch = false; }
            // console.log("当前抓的牌为：",this.cmjManager.traceSinglePai(pai.m_Type,pai.m_Value));
            this.addPai(pai, false, isSelfFetch);
            var flag = false;
            var hunPai = this.cmjManager.getHunPai();
            if (this.getOutHunPaiNum(hunPai) > 0) {
                flag = this.checkHunHuManager.checkHu(this);
            }
            else {
                flag = this.checkHuManager.checkHu(this);
            }
            this.delPai(pai, false);
            return flag;
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