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
        cardMainView:CardMainView;
        operationView:OperationView;
        constructor() 
        {
            super();
            this.createCardMainView();
        }

        createCardMainView()
        {
            this.cardMainView = new CardMainView(this);

            this.operationView = new OperationView();
            this.addChild(this.operationView);
        }

    }
}
