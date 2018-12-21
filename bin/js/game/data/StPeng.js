/*
    吃牌的结构体
    m_stPai:number;             //杠牌
    m_byPengSeat:number;           //被碰的人的位置，默认为-1 就是暗杠
*/
var MjGame;
(function (MjGame) {
    var StPeng = /** @class */ (function () {
        function StPeng(m_stPai, m_byPengSeat) {
            if (m_byPengSeat === void 0) { m_byPengSeat = -1; }
            this.m_stPai = m_stPai;
            this.m_byPengSeat = m_byPengSeat;
        }
        return StPeng;
    }());
    MjGame.StPeng = StPeng;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=StPeng.js.map