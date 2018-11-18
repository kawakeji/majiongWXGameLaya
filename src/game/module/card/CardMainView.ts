/**
* name 
*/
module MjGame{
	export class CardMainView{
		deskScene:DeskScene;
		handCardCmArr:Array<HandCardCm>;
		outCardCmArr:Array<OutCardCm>;
		constructor(deskScene:DeskScene)
		{
			this.deskScene = deskScene;
			this.handCardCmArr = [];
			this.outCardCmArr = []
			this.initView();
		}

        initView()
        {
            CMJManager.getInstance().initPai();
            CMJManager.getInstance().xiPai();
            CMJManager.getInstance().randomHunPai();
            var cmj = new CMJ();
            var testPaiArr = [[1,1],[1,1],[1,1],[1,2],[1,2],[1,2],[1,3],[1,3],[1,3],[1,4],[1,4],[1,4],[2,1]];

            for (var index = 0; index < testPaiArr.length; index++) 
            {
                var element = testPaiArr[index];
                var stPai = new StPAI(element[0],element[1]);
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

            var stPai14 = new StPAI(2,1);
			cmj.m_OutPAIVec.push(stPai14);
            console.log('当前手牌：' + CMJManager.getInstance().traceAllPai(cmj.m_MyPAIVec));
            console.log('当前手牌数：' + cmj.getCurPaiNum());
            console.log('是否胡牌：',cmj.checkHU(stPai14,true));
            console.log('胡牌结果：',cmj.traceGoodInfo());
            this.createHandCardViews(cmj);
			this.createOutCardViews(cmj);

        }

        createHandCardViews(cmj:CMJ)
        {
            var handCardcm = new HandCardCm(this.deskScene.downView,GlobalConfig.DOWN_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);

            handCardcm = new HandCardCm(this.deskScene.rightView,GlobalConfig.RIGHT_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);

            handCardcm = new HandCardCm(this.deskScene.upView,GlobalConfig.UP_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);

            handCardcm = new HandCardCm(this.deskScene.leftView,GlobalConfig.LEFT_POS);
            handCardcm.createHandCard(cmj);
            this.handCardCmArr.push(handCardcm);
        }

        createOutCardViews(cmj:CMJ)
        {
            var outCardcm = new OutCardCm(this.deskScene.outDownView,GlobalConfig.DOWN_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);

            outCardcm = new OutCardCm(this.deskScene.outRightView,GlobalConfig.RIGHT_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);

            outCardcm = new OutCardCm(this.deskScene.outUpView,GlobalConfig.UP_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);

            outCardcm = new OutCardCm(this.deskScene.outLeftView,GlobalConfig.LEFT_POS);
            outCardcm.createOutCard(cmj);
            this.outCardCmArr.push(outCardcm);
        }
	}
}