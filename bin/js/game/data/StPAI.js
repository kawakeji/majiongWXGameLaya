/*
    牌的结构体
    m_Type:number;             //牌类型
    m_Value:number;           //牌字
    isGang:boolean;           //是否是杠牌
*/
var MjGame;
(function (MjGame) {
    var StPAI = /** @class */ (function () {
        function StPAI(m_Type, m_Value, isGang) {
            if (isGang === void 0) { isGang = false; }
            this.m_Type = m_Type;
            this.m_Value = m_Value;
            this.isGang = isGang;
        }
        return StPAI;
    }());
    MjGame.StPAI = StPAI;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=StPAI.js.map