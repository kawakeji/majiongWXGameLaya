// 有癞子的胡牌判断
var MjGame;
(function (MjGame) {
    var CheckHunHuManager = /** @class */ (function () {
        function CheckHunHuManager() {
            this.cmjManager = MjGame.CMJManager.getInstance();
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        CheckHunHuManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new CheckHunHuManager();
            }
            return this.instance;
        };
        CheckHunHuManager.prototype.checkHu = function (cmj) {
            cmj.m_GoodInfoArr = [];
            var flag = false;
            var hunPai = this.cmjManager.getHunPai();
            var curHunNum = cmj.getHunPaiNum(hunPai);
            console.log("当前癞子为：", MjGame.CMJManager.getInstance().traceSinglePai(hunPai.m_Type, hunPai.m_Value));
            console.log("当前拥有的的癞子数：", curHunNum);
            flag = this.checkPingHu(cmj, hunPai, curHunNum);
            if (flag == true) {
                cmj.m_GoodInfoArr.push(MjGame.GlobalConfig.MAI_BAO_HU);
            }
            return flag;
        };
        //判断是否胡牌的函数
        CheckHunHuManager.prototype.checkPingHu = function (cmj, hunPai, curHunNum) {
            var allPai = cmj.copyMyHandPaiArr();
            var ndHunArr = new Array();
            for (var i = 0; i < 5; i++) {
                var subArr = allPai[i].concat([]);
                if (hunPai.m_Type == i && subArr) {
                    // 去掉手牌中的癞子
                    subArr[hunPai.m_Value] = 0;
                    subArr[0] = subArr[0] - subArr[hunPai.m_Value];
                }
                ndHunArr[i] = this.getNeedHunInSub(subArr, 4, 0);
            }
            console.log("胡牌需要的癞子数：", ndHunArr);
            var flag = false;
            //将在中发白中
            //如果需要的混小于等于当前的则计算将在将在万中需要的混的个数
            var ndHunAll = ndHunArr[1] + ndHunArr[2] + ndHunArr[3] + ndHunArr[4];
            if (ndHunAll <= curHunNum) {
                var hasNum = curHunNum - ndHunAll;
                flag = this.canHu(allPai[0], hasNum);
                if (flag == true) {
                    return true;
                }
            }
            //将在风中
            //如果需要的混小于等于当前的则计算将在将在万中需要的混的个数
            var ndHunAll = ndHunArr[0] + ndHunArr[2] + ndHunArr[3] + ndHunArr[4];
            if (ndHunAll <= curHunNum) {
                var hasNum = curHunNum - ndHunAll;
                flag = this.canHu(allPai[1], hasNum);
                if (flag == true) {
                    return true;
                }
            }
            //将在万中
            //如果需要的混小于等于当前的则计算将在将在万中需要的混的个数
            var ndHunAll = ndHunArr[0] + ndHunArr[1] + ndHunArr[3] + ndHunArr[4];
            if (ndHunAll <= curHunNum) {
                var hasNum = curHunNum - ndHunAll;
                flag = this.canHu(allPai[2], hasNum);
                if (flag == true) {
                    return true;
                }
            }
            //将在条中
            //如果需要的混小于等于当前的则计算将在将在万中需要的混的个数
            var ndHunAll = ndHunArr[1] + ndHunArr[2] + ndHunArr[0] + ndHunArr[4];
            if (ndHunAll <= curHunNum) {
                var hasNum = curHunNum - ndHunAll;
                flag = this.canHu(allPai[3], hasNum);
                if (flag == true) {
                    return true;
                }
            }
            //将在饼中
            //如果需要的混小于等于当前的则计算将在将在万中需要的混的个数
            var ndHunAll = ndHunArr[1] + ndHunArr[2] + ndHunArr[3] + ndHunArr[0];
            if (ndHunAll <= curHunNum) {
                var hasNum = curHunNum - ndHunAll;
                flag = this.canHu(allPai[4], hasNum);
                if (flag == true) {
                    return true;
                }
            }
            return flag;
        };
        CheckHunHuManager.prototype.getNeedHunInSub = function (subArr, needHunCount, hNum) {
            if (needHunCount == 0) {
                return needHunCount;
            }
            if (hNum >= needHunCount) {
                return needHunCount;
            }
            var lenSubArr = subArr[0];
            if (lenSubArr == 0) {
                needHunCount = Math.min(hNum, needHunCount);
                return needHunCount;
            }
            else if (lenSubArr == 1) {
                needHunCount = Math.min(hNum + 2, needHunCount);
                return needHunCount;
            }
            else if (lenSubArr == 2) {
                var p_Arr = this.getSubValueArr(subArr);
                if ((p_Arr[1] - p_Arr[0]) <= 2) {
                    needHunCount = Math.min(hNum + 1, needHunCount);
                }
                return needHunCount;
            }
            else if (lenSubArr >= 3) {
                var p_Arr = this.getSubValueArr(subArr);
                if ((hNum + 2) < needHunCount) {
                    subArr[p_Arr[0]] = subArr[p_Arr[0]] - 1;
                    subArr[0] = subArr[0] - 1;
                    needHunCount = this.getNeedHunInSub(subArr, needHunCount, hNum + 2);
                    subArr[p_Arr[0]] = subArr[p_Arr[0]] + 1;
                    subArr[0] = subArr[0] + 1;
                }
                if ((hNum + 1) < needHunCount) {
                    for (var i = 0; i < lenSubArr; i++) {
                        if ((hNum + 1) >= needHunCount) {
                            break;
                        }
                        if ((i + 1) != lenSubArr) {
                            if (p_Arr[i] == p_Arr[i + 1]) {
                                continue;
                            }
                        }
                        if ((p_Arr[i] - p_Arr[0]) < 3) {
                            subArr[p_Arr[0]] = subArr[p_Arr[0]] - 1;
                            subArr[p_Arr[1]] = subArr[p_Arr[1]] - 1;
                            subArr[0] = subArr[0] - 2;
                            needHunCount = this.getNeedHunInSub(subArr, needHunCount, hNum + 1);
                            subArr[p_Arr[0]] = subArr[p_Arr[0]] + 1;
                            subArr[p_Arr[1]] = subArr[p_Arr[1]] + 1;
                            subArr[0] = subArr[0] + 2;
                        }
                        else {
                            break;
                        }
                    }
                }
                for (var i = 0; i < lenSubArr; i++) {
                    if (hNum >= needHunCount) {
                        break;
                    }
                    if ((i + 2) != lenSubArr) {
                        if (p_Arr[i] == p_Arr[i + 2]) {
                            continue;
                        }
                    }
                    for (var j = i + 1; j < lenSubArr; j++) {
                        if (hNum >= needHunCount) {
                            break;
                        }
                        if ((j + 1) < lenSubArr) {
                            if (p_Arr[j] == p_Arr[j + 1]) {
                                continue;
                            }
                        }
                        var mjVal1 = p_Arr[0];
                        var mjVal2 = p_Arr[i];
                        var mjVal3 = p_Arr[j];
                        if (this.test3Combine(mjVal1, mjVal2, mjVal3)) {
                            subArr[mjVal1] = subArr[mjVal1] - 1;
                            subArr[mjVal2] = subArr[mjVal2] - 1;
                            subArr[mjVal3] = subArr[mjVal3] - 1;
                            subArr[0] = subArr[0] - 3;
                            needHunCount = this.getNeedHunInSub(subArr, needHunCount, hNum);
                            subArr[mjVal1] = subArr[mjVal1] + 1;
                            subArr[mjVal2] = subArr[mjVal2] + 1;
                            subArr[mjVal3] = subArr[mjVal3] + 1;
                            subArr[0] = subArr[0] + 3;
                        }
                    }
                }
                return needHunCount;
            }
            return needHunCount;
        };
        CheckHunHuManager.prototype.test3Combine = function (mjVal1, mjVal2, mjVal3) {
            if ((mjVal1 == mjVal2) && (mjVal2 == mjVal3)) {
                return true;
            }
            if (((mjVal1 + 1) == mjVal2) && ((mjVal2 + 1) == mjVal3)) {
                return true;
            }
            return false;
        };
        CheckHunHuManager.prototype.canHu = function (subArr, hunNum) {
            var needHunCount = 0;
            var tempArr = subArr.concat([]);
            var arrLen = tempArr[0];
            var p_Arr = this.getSubValueArr(tempArr);
            if (arrLen <= 0) {
                if (hunNum >= 2) {
                    return true;
                }
                return false;
            }
            for (var i = 0; i < arrLen; ++i) {
                if (i == (arrLen - 1)) {
                    if (hunNum > 0) {
                        tempArr[p_Arr[i]] = tempArr[p_Arr[i]] - 1;
                        tempArr[0] = tempArr[0] - 1;
                        needHunCount = this.getNeedHunInSub(tempArr, 4, 0);
                        if (needHunCount <= hunNum) {
                            return true;
                        }
                        hunNum = hunNum + 1;
                        tempArr[p_Arr[i]] = tempArr[p_Arr[i]] + 1;
                        tempArr[0] = tempArr[0] + 1;
                    }
                }
                else {
                    if ((i + 2) == arrLen || (p_Arr[i]) != (p_Arr[i + 2])) {
                        if (p_Arr[i] == p_Arr[i + 1]) {
                            tempArr[p_Arr[i]] = tempArr[p_Arr[i]] - 1;
                            tempArr[p_Arr[i + 1]] = tempArr[p_Arr[i + 1]] - 1;
                            tempArr[0] = tempArr[0] - 2;
                            needHunCount = this.getNeedHunInSub(tempArr, 4, 0);
                            if (needHunCount <= hunNum) {
                                return true;
                            }
                            tempArr[p_Arr[i]] = tempArr[p_Arr[i]] + 1;
                            tempArr[p_Arr[i + 1]] = tempArr[p_Arr[i + 1]] + 1;
                            tempArr[0] = tempArr[0] + 2;
                        }
                    }
                    if ((hunNum > 0) && (p_Arr[i] != p_Arr[i + 1])) {
                        hunNum = hunNum - 1;
                        tempArr[p_Arr[i]] = tempArr[p_Arr[i]] - 1;
                        tempArr[0] = tempArr[0] - 1;
                        needHunCount = this.getNeedHunInSub(tempArr, 4, 0);
                        if (needHunCount <= hunNum) {
                            return true;
                        }
                        hunNum = hunNum + 1;
                        tempArr[p_Arr[i]] = tempArr[p_Arr[i]] + 1;
                        tempArr[0] = tempArr[0] + 1;
                    }
                }
            }
            return false;
        };
        CheckHunHuManager.prototype.getSubValueArr = function (subArr) {
            var p_Arr = [];
            for (var i = 1; i < MjGame.GlobalConfig.CARD_VALUE_NUM; ++i) {
                for (var j = 0; j < subArr[i]; ++j) {
                    p_Arr.push(i);
                }
            }
            return p_Arr;
        };
        return CheckHunHuManager;
    }());
    MjGame.CheckHunHuManager = CheckHunHuManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CheckHunHuManager.js.map