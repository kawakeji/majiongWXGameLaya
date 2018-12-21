var MjGame;
(function (MjGame) {
    /*
        吃牌的结构体
        m_ChiPai1:number;             //吃牌
        m_ChiPai2:number;           //吃牌
        m_ChiPai3:number;           //吃牌
        m_byChiIndex:number;           //被吃牌的位置
        m_byChiSeat:number;           //被吃牌的座位信息
    */
    var StCHI = /** @class */ (function () {
        function StCHI(m_ChiPai1, m_ChiPai2, m_ChiPai3, m_byChiIndex, m_byChiSeat) {
            this.m_ChiPai1 = m_ChiPai1;
            this.m_ChiPai2 = m_ChiPai2;
            this.m_ChiPai3 = m_ChiPai3;
            this.m_byChiIndex = m_byChiIndex;
            this.m_byChiSeat = m_byChiSeat;
        }
        return StCHI;
    }());
    MjGame.StCHI = StCHI;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=StCHI.js.map