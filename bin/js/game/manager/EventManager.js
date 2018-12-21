var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
    var EventManager = /** @class */ (function (_super) {
        __extends(EventManager, _super);
        function EventManager() {
            return _super.call(this) || this;
        }
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        EventManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new EventManager();
            }
            return this.instance;
        };
        return EventManager;
    }(Laya.EventDispatcher));
    MjGame.EventManager = EventManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=EventManager.js.map