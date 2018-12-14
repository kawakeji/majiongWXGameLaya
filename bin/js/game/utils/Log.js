/**
* name
*/
var MjGame;
(function (MjGame) {
    var Log = /** @class */ (function () {
        function Log() {
        }
        Log.print = function () {
            var Params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                Params[_i] = arguments[_i];
            }
            console.log(Params);
        };
        Log.traceSinglePai = function (mType, mValue) {
            var str = "";
            if (mType == MjGame.GlobalConfig.MJPAI_ZFB) {
                if (mValue == 1) {
                    str += "中,";
                }
                else if (mValue == 2) {
                    str += "發,";
                }
                else if (mValue == 3) {
                    str += "白,";
                }
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_FENG) {
                if (mValue == 1) {
                    str += "东,";
                }
                else if (mValue == 2) {
                    str += "南,";
                }
                else if (mValue == 3) {
                    str += "西,";
                }
                else if (mValue == 4) {
                    str += "北,";
                }
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_WAN) {
                str += mValue + "万,";
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_TIAO) {
                str += mValue + "条,";
            }
            else if (mType == MjGame.GlobalConfig.MJPAI_BING) {
                str += mValue + "饼,";
            }
            return str;
        };
        Log.traceAllPai = function (compositionAllArr) {
            var str = "";
            for (var i = 0; i < MjGame.GlobalConfig.CARD_TYPE_NUM; i++) {
                for (var j = 1; j < MjGame.GlobalConfig.CARD_VALUE_NUM; j++) {
                    if (compositionAllArr[i][j] > 0) {
                        for (var k = 0; k < compositionAllArr[i][j]; k++) {
                            str = str + this.traceSinglePai(i, j);
                        }
                    }
                }
            }
            return str;
        };
        return Log;
    }());
    MjGame.Log = Log;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=Log.js.map