/*
* 游戏桌面场景;
*/

// import {StPAI} from '../data/StPAI'
// import {CMJ} from './data/CMJ'
// import {CMJManager} from '../core/CMJManager'
// import {CMJ} from '../data/CMJ'
import Dictionary = MjGame.Dictionary;
module MjGame{
    import StPAI = MjGame.StPAI;
    import CMJManager = MjGame.CMJManager;
    import CMJ = MjGame.CMJ;


    export class DeskScene extends ui.game.scene.DeskSceneUI{
        constructor() {
            super();
            this.test2();
        }

        test2 (){
            CMJManager.getInstance().initPai();
            CMJManager.getInstance().xiPai();
            CMJManager.getInstance().randomHunPai();
            var cmj = new CMJ();
            var testPaiArr = [[1,1],[1,1],[1,1],[1,2],[1,2],[1,2],[1,3],[1,3],[1,3],[1,4],[1,4],[1,4],[2,1]];
            for (var index = 0; index < testPaiArr.length; index++) {
                var element = testPaiArr[index];
                 var stPai = new StPAI(element[0],element[1]);
                cmj.addPai(stPai);
            }

            
            // for (var index = 0; index < 13; index++) {
            //     var stPaiEx = CMJManager.getInstance().getAPai();
            //     console.log(stPaiEx.m_NewPai);
            //     console.log(stPaiEx.m_NewPai.m_Type);
            //     console.log(stPaiEx.m_NewPai.m_Value);
            //     cmj.addPai(stPaiEx.m_NewPai);

            // }

            var stPai14 = new StPAI(2,1);

            console.log('当前手牌：' + CMJManager.getInstance().traceAllPai(cmj.m_MyPAIVec));
            console.log('当前手牌数：' + cmj.getCurPaiNum());
            console.log('是否胡牌：',cmj.checkHU(stPai14,true));
            console.log('胡牌结果：',cmj.traceGoodInfo());

            var handCardcm = new HandCardCm();
            handCardcm.createHandCard(cmj,this);
        }
    }
}
