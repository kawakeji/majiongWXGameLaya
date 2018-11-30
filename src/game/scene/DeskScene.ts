/*
* 游戏桌面场景;
*/
module MjGame{
    import StPAI = MjGame.StPAI;
    import CMJManager = MjGame.CMJManager;
    import CMJ = MjGame.CMJ;

    export class DeskScene extends ui.game.scene.DeskSceneUI{
        cardMainView:CardMainView;
        
        constructor() 
        {
            super();
            this.createCardMainView();
            this.scale(0.2,0.2);
        }

        createCardMainView()
        {
            this.cardMainView = new CardMainView(this);
            var socket = new NetWorkSocket();
        }
    }
}
