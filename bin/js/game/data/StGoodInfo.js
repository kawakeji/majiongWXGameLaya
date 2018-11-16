/*
    胡牌的结构体
    m_GoodType:number;           //胡牌的类型
    m_GoodValue:number;           //胡牌的倍数
    m_GoodName:string;            //胡牌的名字
*/
var MjGame;
(function (MjGame) {
    var StGoodInfo = /** @class */ (function () {
        function StGoodInfo(m_GoodType, m_GoodValue, m_GoodName) {
            if (m_GoodType === void 0) { m_GoodType = 0; }
            if (m_GoodValue === void 0) { m_GoodValue = 0; }
            if (m_GoodName === void 0) { m_GoodName = ''; }
            this.m_GoodType = m_GoodType;
            this.m_GoodValue = m_GoodValue;
            this.m_GoodName = m_GoodName;
        }
        return StGoodInfo;
    }());
    MjGame.StGoodInfo = StGoodInfo;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=StGoodInfo.js.map