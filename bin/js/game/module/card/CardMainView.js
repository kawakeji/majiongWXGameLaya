/**
* name
*/
var MjGame;
(function (MjGame) {
    var CardMainView = /** @class */ (function () {
        function CardMainView(deskScene) {
            this.deskScene = deskScene;
            this.handCardCmArr = [];
            this.outCardCmArr = [];
            this.initView();
        }
        CardMainView.prototype.initView = function () {
            MjGame.CMJManager.getInstance().initPai();
            MjGame.CMJManager.getInstance().xiPai();
            MjGame.CMJManager.getInstance().randomHunPai();
            var cmj = new MjGame.CMJ();
            var testPaiArr = [[1, 1], [1, 1], [1, 1], [1, 2], [1, 2], [1, 2], [1, 3], [1, 3], [1, 3], [1, 4], [1, 4], [1, 4], [2, 1]];
            for (var index = 0; index < testPaiArr.length; index++) {
                var element = testPaiArr[index];
                var stPai = new MjGame.StPAI(element[0], element[1]);
                cmj.addPai(stPai);
                // cmj.m_OutPAIVec.push(stPai);
                // cmj.m_OutPAIVec.push(stPai);
                // cmj.m_OutPAIVec.push(stPai);
            }
            // for (var index = 0; index < 13; index++) {
            //     var stPaiEx = CMJManager.getInstance().getAPai();
            //     console.log(stPaiEx.m_NewPai);
            //     console.log(stPaiEx.m_NewPai.m_Type);
            //     console.log(stPaiEx.m_NewPai.m_Value);
            //     cmj.addPai(stPaiEx.m_NewPai);
            // }
            var stPai14 = new MjGame.StPAI(2, 1);
            cmj.m_OutPAIVec.push(stPai14);
            console.log('当前手牌：' + MjGame.CMJManager.getInstance().traceAllPai(cmj.m_MyPAIVec));
            console.log('当前手牌数：' + cmj.getCurPaiNum());
            console.log('是否胡牌：', cmj.checkHU(stPai14, true));
            console.log('胡牌结果：', cmj.traceGoodInfo());
            this.createHandCardViews(cmj);
            this.createOutCardViews(cmj);
        };
        CardMainView.prototype.createHandCardViews = function (cmj) {
            var handCardcm = new MjGame.HandCardCm(this.deskScene.downView, MjGame.GlobalConfig.DOWN_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);
            handCardcm = new MjGame.HandCardCm(this.deskScene.rightView, MjGame.GlobalConfig.RIGHT_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);
            handCardcm = new MjGame.HandCardCm(this.deskScene.upView, MjGame.GlobalConfig.UP_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);
            handCardcm = new MjGame.HandCardCm(this.deskScene.leftView, MjGame.GlobalConfig.LEFT_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);
        };
        CardMainView.prototype.createOutCardViews = function (cmj) {
            var outCardcm = new MjGame.OutCardCm(this.deskScene.outDownView, MjGame.GlobalConfig.DOWN_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);
            outCardcm = new MjGame.OutCardCm(this.deskScene.outRightView, MjGame.GlobalConfig.RIGHT_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);
            outCardcm = new MjGame.OutCardCm(this.deskScene.outUpView, MjGame.GlobalConfig.UP_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);
            outCardcm = new MjGame.OutCardCm(this.deskScene.outLeftView, MjGame.GlobalConfig.LEFT_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);
        };
        return CardMainView;
    }());
    MjGame.CardMainView = CardMainView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CardMainView.js.map