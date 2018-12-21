/*
    吃牌的结构体
    m_stPai:number;             //杠牌
    m_Otype:number;           //杠的类型
    m_byGangSeat:number;           //被杠的人的位置，默认为-1 就是暗杠
*/
var MjGame;
(function (MjGame) {
    var StGang = /** @class */ (function () {
        function StGang(m_stPai, m_Otype, m_byGangSeat) {
            if (m_byGangSeat === void 0) { m_byGangSeat = -1; }
            this.m_stPai = m_stPai;
            this.m_Otype = m_Otype;
            this.m_byGangSeat = m_byGangSeat;
        }
        return StGang;
    }());
    MjGame.StGang = StGang;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=StGang.js.map