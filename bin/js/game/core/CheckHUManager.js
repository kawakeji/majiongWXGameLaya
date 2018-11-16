var MjGame;
(function (MjGame) {
    var CheckHUManager = /** @class */ (function () {
        function CheckHUManager() {
            this.cmjManager = MjGame.CMJManager.getInstance();
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        CheckHUManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new CheckHUManager();
            }
            return this.instance;
        };
        CheckHUManager.prototype.checkHu = function (cmj) {
            cmj.m_GoodInfoArr = [];
            var flag = false;
            if (this.checkDuiDuiHu(cmj)) {
                if (this.checkTianHu(cmj)) { }
                else if (this.checkDiHu(cmj)) { }
                this.checkZiMoHu(cmj);
                flag = true;
            }
            else if (this.checkPengPengHu(cmj)) {
                if (this.checkTianHu(cmj)) { }
                else if (this.checkDiHu(cmj)) { }
                else if (this.checkDanDiaoHu(cmj)) { }
                if (this.checkGangShangKaiHuaHu(cmj)) { }
                else {
                    this.checkZiMoHu(cmj);
                }
                flag = true;
            }
            else if (this.checkDanDiaoHu(cmj)) {
                if (this.checkGangShangKaiHuaHu(cmj)) { }
                else {
                    this.checkZiMoHu(cmj);
                }
                flag = true;
            }
            else if (this.checkLanHu(cmj)) {
                if (this.checkTianHu(cmj)) { }
                else if (this.checkDiHu(cmj)) { }
                this.checkZiMoHu(cmj);
                flag = true;
            }
            else if (this.checkPingHu(cmj)) {
                if (this.checkTianHu(cmj)) { }
                else if (this.checkDiHu(cmj)) { }
                else if (this.checkDanDiaoHu(cmj)) { }
                if (this.checkGangShangKaiHuaHu(cmj)) { }
                else if (this.checkZiMoHu(cmj)) { }
                else {
                    cmj.m_GoodInfoArr = new Array();
                    cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.PING_HU);
                }
                flag = true;
            }
            return flag;
        };
        CheckHUManager.prototype.checkTianHu = function (cmj) {
            if (this.cmjManager.remainNum == MjGame.GlobalConfig.ALL_CARD_NUM - MjGame.GlobalConfig.HAND_CARD_NUM * 4 - 1 && cmj.m_Dealer == true) {
                cmj.m_GoodInfoArr = new Array();
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.TIAN_HU);
                return true;
            }
            return false;
        };
        CheckHUManager.prototype.checkDiHu = function (cmj) {
            if (this.cmjManager.remainNum == MjGame.GlobalConfig.ALL_CARD_NUM - MjGame.GlobalConfig.HAND_CARD_NUM * 4 - 1 && cmj.m_Dealer == false) {
                cmj.m_GoodInfoArr = new Array();
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.DI_HU);
                return true;
            }
            return false;
        };
        CheckHUManager.prototype.checkDuiDuiHu = function (cmj) {
            if (cmj.m_ChiPAIVec.length > 0 || cmj.m_PengPAIVec.length > 0 || cmj.m_GangPAIVec.length > 0) {
                return false;
            }
            var tempArr;
            var paiValue;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = cmj.m_MyPAIVec[i];
                for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                    paiValue = tempArr[j];
                    if (paiValue <= 0) {
                        continue;
                    }
                    if (paiValue != 2) {
                        return false;
                    }
                }
            }
            cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.DUI_DUI_HU);
            return true;
        };
        // 碰碰胡
        CheckHUManager.prototype.checkPengPengHu = function (cmj) {
            if (cmj.m_ChiPAIVec.length > 0) {
                return false;
            }
            var tempArr;
            var paiValue;
            var hasJiang = false;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = cmj.m_MyPAIVec[i];
                for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                    paiValue = tempArr[j];
                    if (paiValue <= 0) {
                        continue;
                    }
                    if (hasJiang && paiValue == 2) {
                        return false;
                    }
                    if (paiValue == 2) {
                        hasJiang = true;
                    }
                    if (paiValue < 2) {
                        return false;
                    }
                }
            }
            cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.PENG_PENG_HU);
            return true;
        };
        // 烂胡
        CheckHUManager.prototype.checkLanHu = function (cmj) {
            if (cmj.m_ChiPAIVec.length > 0 || cmj.m_PengPAIVec.length > 0 || cmj.m_GangPAIVec.length > 0) {
                return false;
            }
            var tempArr;
            var paiValue;
            var xingNum = 0;
            var ziPaiPos = -100;
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                tempArr = cmj.m_MyPAIVec[i];
                ziPaiPos = -100;
                for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                    paiValue = tempArr[j];
                    if (paiValue <= 0) {
                        continue;
                    }
                    if (paiValue > 1) {
                        return false;
                    }
                    if (i == MjGame.GlobalConfig.MJPAI_ZFB || i == MjGame.GlobalConfig.MJPAI_FENG) {
                        xingNum++;
                    }
                    else {
                        if (j - ziPaiPos <= 2) {
                            return false;
                        }
                        ziPaiPos = j;
                    }
                }
            }
            var flag = this.checkQiXingHu(cmj, xingNum);
            if (flag == false) {
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.LAN_HU);
            }
            return true;
        };
        // 七星
        CheckHUManager.prototype.checkQiXingHu = function (cmj, xingNum) {
            if (xingNum == 7) {
                cmj.m_GoodInfoArr = new Array();
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.QI_XING_HU);
                return true;
            }
            return false;
        };
        // 单吊
        CheckHUManager.prototype.checkDanDiaoHu = function (cmj) {
            var count = cmj.getCurPaiNum();
            if (count == 2) {
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.DAN_DIAO_HU);
                return true;
            }
            return false;
        };
        // 杠上开花
        CheckHUManager.prototype.checkGangShangKaiHuaHu = function (cmj) {
            // 在胡了的情况下，拿到的最后一张牌是杠上来的就算杠上开花
            if (cmj.m_LastPAI.isGang == true) {
                if (cmj.m_LastPAIIsSelf == true) {
                    cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.GANG_SHANG_KAI_HUA_HU);
                }
                else {
                    cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.GANG_SHANG_FANG_PAO_HU);
                }
                return true;
            }
            return false;
        };
        CheckHUManager.prototype.checkZiMoHu = function (cmj) {
            if (cmj.m_LastPAIIsSelf == true) {
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.ZI_MO_HU);
                return true;
            }
            return false;
        };
        //判断是否胡牌的函数
        CheckHUManager.prototype.checkPingHu = function (cmj) {
            var allPai = cmj.copyMyHandPaiArr();
            var jiangPos = -1; //“将”的位置
            var yuShu = 0; //余数
            var jiangExisted = false;
            //是否满足3,3,3,3,2模型
            for (var i = 0; i < 5; i++) {
                yuShu = allPai[i][0] % 3;
                if (yuShu == 1) {
                    return false;
                }
                if (yuShu == 2) {
                    if (jiangExisted) {
                        return false;
                    }
                    jiangPos = i;
                    jiangExisted = true;
                }
            }
            for (i = 0; i < 5; i++) {
                if (i != jiangPos) {
                    if (!this.analyze(allPai[i])) {
                        return false;
                    }
                }
            }
            //该类牌中要包含将,因为要对将进行轮询,效率较低,放在最后
            var success = false; //指示除掉“将”后能否通过
            for (var j = 1; j < 10; j++) //对列进行操作,用j表示
             {
                if (allPai[jiangPos][j] >= 2) {
                    //除去这2张将牌
                    allPai[jiangPos][j] -= 2;
                    allPai[jiangPos][0] -= 2;
                    if (this.analyze(allPai[jiangPos])) {
                        success = true;
                    }
                    //还原这2张将牌
                    allPai[jiangPos][j] += 2;
                    allPai[jiangPos][0] += 2;
                    if (success)
                        break;
                }
            }
            return success;
        };
        //分解成“刻”“顺”组合
        CheckHUManager.prototype.analyze = function (aKindPai) {
            if (aKindPai[0] == 0) {
                return true;
            }
            //寻找第一张牌
            for (var j = 1; j < 10; j++) {
                if (aKindPai[j] != 0) {
                    break;
                }
            }
            var result;
            if (aKindPai[j] >= 3) //作为刻牌
             {
                //除去这3张刻牌
                aKindPai[j] -= 3;
                aKindPai[0] -= 3;
                result = this.analyze(aKindPai);
                //还原这3张刻牌
                aKindPai[j] += 3;
                aKindPai[0] += 3;
                return result;
            }
            //作为顺牌
            if ((j < 8) && (aKindPai[j + 1] > 0) && (aKindPai[j + 2] > 0)) {
                //除去这3张顺牌
                aKindPai[j]--;
                aKindPai[j + 1]--;
                aKindPai[j + 2]--;
                aKindPai[0] -= 3;
                result = this.analyze(aKindPai);
                //还原这3张顺牌
                aKindPai[j]++;
                aKindPai[j + 1]++;
                aKindPai[j + 2]++;
                aKindPai[0] += 3;
                return result;
            }
            return false;
        };
        return CheckHUManager;
    }());
    MjGame.CheckHUManager = CheckHUManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CheckHUManager.js.map