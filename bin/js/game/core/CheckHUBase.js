var MjGame;
(function (MjGame) {
    var CMJManager = MjGame.CMJManager;
    var CheckHUBase = /** @class */ (function () {
        function CheckHUBase() {
            this.cmjManager = CMJManager.getInstance();
        }
        CheckHUBase.prototype.checkHu = function (cmj) {
            return false;
        };
        CheckHUBase.prototype.checkDiHu = function (cmj) {
            return false;
        };
        CheckHUBase.prototype.checkDuiDuiHu = function (cmj) {
            return false;
        };
        // 碰碰胡
        CheckHUBase.prototype.checkPengPengHu = function (cmj) {
            return false;
        };
        // 烂胡
        CheckHUBase.prototype.checkLanHu = function (cmj) {
            return false;
        };
        // 七星
        CheckHUBase.prototype.checkQiXingHu = function (cmj, xingNum) {
            return false;
        };
        // 单吊
        CheckHUBase.prototype.checkDanDiaoHu = function (cmj) {
            return false;
        };
        // 杠上开花
        CheckHUBase.prototype.checkGangShangKaiHuaHu = function (cmj) {
            return false;
        };
        //判断是否胡牌的函数
        CheckHUBase.prototype.checkPingHu = function (cmj) {
            return false;
        };
        CheckHUBase.prototype.copyMyHandPaiArr = function (cmj) {
            var compositionAllArr = cmj.m_MyPAIVec.concat([]);
            return compositionAllArr;
        };
        return CheckHUBase;
    }());
    MjGame.CheckHUBase = CheckHUBase;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CheckHUBase.js.map