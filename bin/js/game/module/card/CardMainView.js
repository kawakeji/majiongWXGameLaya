/**
* name
*/
var MjGame;
(function (MjGame) {
    var CardMainView = /** @class */ (function () {
        // myHandCardCm:HandCardCm;
        function CardMainView(deskScene) {
            this.deskScene = deskScene;
            this.handCardCmArr = [];
            this.outCardCmArr = [];
            this.handCardParentViewArr = [this.deskScene.downView, this.deskScene.rightView, this.deskScene.upView, this.deskScene.leftView];
            this.outCardParentViewArr = [this.deskScene.outDownView, this.deskScene.outRightView, this.deskScene.outUpView, this.deskScene.outLeftView];
            this.initView();
        }
        CardMainView.prototype.initView = function () {
            this.startGame();
            //          var cmj = new CMJ();
            //          var testPaiArr = [[1,1],[1,1],[1,1],[1,2],[1,2],[1,2],[1,3],[1,3],[1,3],[1,4],[1,4],[1,4],[2,1]];
            //          for (var index = 0; index < testPaiArr.length; index++) 
            //          {
            //              var element = testPaiArr[index];
            //              var stPai = new StPAI(element[0],element[1]);
            //              cmj.addPai(stPai);
            // 	// cmj.m_OutPAIVec.push(stPai);
            //              // cmj.m_OutPAIVec.push(stPai);
            //              // cmj.m_OutPAIVec.push(stPai);
            //          }
            //          // for (var index = 0; index < 13; index++) {
            //          //     var stPaiEx = CMJManager.getInstance().getAPai();
            //          //     console.log(stPaiEx.m_NewPai);
            //          //     console.log(stPaiEx.m_NewPai.m_Type);
            //          //     console.log(stPaiEx.m_NewPai.m_Value);
            //          //     cmj.addPai(stPaiEx.m_NewPai);
            //          // }
            //          var stPai14 = new StPAI(2,1);
            // cmj.m_OutPAIVec.push(stPai14);
            //          console.log('当前手牌：' + CMJManager.getInstance().traceAllPai(cmj.m_MyPAIVec));
            //          console.log('当前手牌数：' + cmj.getCurPaiNum());
            //          console.log('是否胡牌：',cmj.checkHU(stPai14,true));
            //          console.log('胡牌结果：',cmj.traceGoodInfo());
            //          this.createHandCardViews(cmj);
            // this.createOutCardViews(cmj);
        };
        CardMainView.prototype.startGame = function () {
            MjGame.CMJManager.getInstance().initPai();
            MjGame.CMJManager.getInstance().xiPai();
            MjGame.CMJManager.getInstance().randomHunPai();
            this.updateCardViews();
        };
        CardMainView.prototype.updateCardViews = function () {
            var playerVOs = MjGame.SinglePlayManager.getInstance().createPlayers();
            var myPlayer;
            var otherPlayers = [];
            for (var i = 0; i < playerVOs.length; i++) {
                var playerVO = playerVOs[i];
                var outCardCm = new MjGame.OutCardCm(this.outCardParentViewArr[playerVO.position], playerVO.position);
                var handCardcm = new MjGame.HandCardCm(this.handCardParentViewArr[playerVO.position], outCardCm, playerVO.position);
                handCardcm.updateHandCard(playerVO.cmj, false);
                if (playerVO.position == MjGame.GlobalConfig.DOWN_POS) {
                    myPlayer = handCardcm;
                }
                else {
                    otherPlayers.push(handCardcm);
                }
                this.handCardCmArr.push(handCardcm);
            }
            MjGame.SinglePlayManager.getInstance().startGame(myPlayer, otherPlayers);
        };
        return CardMainView;
    }());
    MjGame.CardMainView = CardMainView;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CardMainView.js.map