var MjGame;
(function (MjGame) {
    var util = /** @class */ (function () {
        function util() {
        }
        util.toString = function (obj) {
            var str = "";
            var type = typeof (obj);
            if (type == "object") {
                for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (obj.hasOwnProperty(key)) {
                        str = str + key + ":" + obj[key] + "\n";
                    }
                }
            }
            else if (type == "string" || type == 'number' || type == "boolean") {
                str = str + obj;
            }
            return str;
        };
        /**
         * 获取客户端相对位置，默认在下方是 0 ，右边是 1 依次类推
         * 这个地方会修改玩家的服务器对应的position
         */
        util.getClientRefPos = function (serverPos, selfServerPos) {
            var offPos = (serverPos - selfServerPos);
            return offPos < 0 ? MjGame.GlobalConfig.MAX_MEMBER_NUM + offPos : offPos;
        };
        util.getByChiPai = function (stChi, index) {
            if (!index) {
                index = stChi.byChiIndex;
            }
            var pai = new MjGame.StPAI();
            pai.m_Type = stChi.m_Type;
            if (index == 2) {
                pai.m_Value = stChi.m_Value2;
            }
            else if (index == 3) {
                pai.m_Value = stChi.m_Value3;
            }
            else {
                pai.m_Value = stChi.m_Value1;
            }
            return pai;
        };
        return util;
    }());
    MjGame.util = util;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=util.js.map