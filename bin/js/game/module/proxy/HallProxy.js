var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var MjGame;
(function (MjGame) {
    var HallProxy = /** @class */ (function (_super) {
        __extends(HallProxy, _super);
        function HallProxy() {
            var _this = _super.call(this) || this;
            _this.addProtos();
            return _this;
        }
        HallProxy.prototype.addProtos = function () {
        };
        HallProxy.prototype.removeProtos = function () {
        };
        return HallProxy;
    }(MjGame.BaseProxy));
    MjGame.HallProxy = HallProxy;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=HallProxy.js.map