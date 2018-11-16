var MjGame;
(function (MjGame) {
    var StPAI = MjGame.StPAI;
    /*
        吃牌的结构体
        m_Type:number;             //牌类型
        m_Value1:number;           //牌字
        m_Value2:number;           //牌字
        m_Value3:number;           //牌字
        byChiIndex:number;         //被吃的那张牌的索引
    */
    var StCHI = /** @class */ (function () {
        function StCHI(m_Type, m_Value1, m_Value2, m_Value3, byChiIndex) {
            this.m_Type = m_Type;
            this.m_Value1 = m_Value1;
            this.m_Value2 = m_Value2;
            this.m_Value3 = m_Value3;
            this.byChiIndex = byChiIndex;
        }
        StCHI.prototype.getPai = function (index) {
            var pai = new StPAI();
            pai.m_Type = this.m_Type;
            if (index == 2) {
                pai.m_Value = this.m_Value2;
            }
            else if (index == 3) {
                pai.m_Value = this.m_Value3;
            }
            else {
                pai.m_Value = this.m_Value1;
            }
            return pai;
        };
        return StCHI;
    }());
    MjGame.StCHI = StCHI;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=StCHI.js.map