/*
* 游戏桌面场景;
*/
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
// import {StPAI} from '../data/StPAI'
// import {CMJ} from './data/CMJ'
// import {CMJManager} from '../core/CMJManager'
// import {CMJ} from '../data/CMJ'
var Dictionary = MjGame.Dictionary;
var MjGame;
(function (MjGame) {
    var StPAI = MjGame.StPAI;
    var CMJManager = MjGame.CMJManager;
    var CMJ = MjGame.CMJ;
    var DeskScene = /** @class */ (function (_super) {
        __extends(DeskScene, _super);
        function DeskScene() {
            var _this = _super.call(this) || this;
            _this.test2();
            return _this;
        }
        DeskScene.prototype.test2 = function () {
            CMJManager.getInstance().initPai();
            CMJManager.getInstance().xiPai();
            CMJManager.getInstance().randomHunPai();
            var cmj = new CMJ();
            var testPaiArr = [[1, 1], [1, 1], [1, 1], [1, 2], [1, 2], [1, 2], [1, 3], [1, 3], [1, 3], [1, 4], [1, 4], [1, 4], [2, 1]];
            for (var index = 0; index < testPaiArr.length; index++) {
                var element = testPaiArr[index];
                var stPai = new StPAI(element[0], element[1]);
                cmj.addPai(stPai);
            }
            // for (var index = 0; index < 13; index++) {
            //     var stPaiEx = CMJManager.getInstance().getAPai();
            //     console.log(stPaiEx.m_NewPai);
            //     console.log(stPaiEx.m_NewPai.m_Type);
            //     console.log(stPaiEx.m_NewPai.m_Value);
            //     cmj.addPai(stPaiEx.m_NewPai);
            // }
            var stPai14 = new StPAI(2, 1);
            console.log('当前手牌：' + CMJManager.getInstance().traceAllPai(cmj.m_MyPAIVec));
            console.log('当前手牌数：' + cmj.getCurPaiNum());
            console.log('是否胡牌：', cmj.checkHU(stPai14, true));
            console.log('胡牌结果：', cmj.traceGoodInfo());
            var handCardcm = new MjGame.HandCardCm();
            handCardcm.createHandCard(cmj, this);
        };
        return DeskScene;
    }(ui.game.scene.DeskSceneUI));
    MjGame.DeskScene = DeskScene;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=DeskScene.js.map