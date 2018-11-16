module MjGame
{
    import StPAI = MjGame.StPAI;
    import CMJManager = MjGame.CMJManager;

    export class CheckHUBase
    {
        cmjManager:CMJManager = CMJManager.getInstance();
        
        constructor(){}

        checkHu(cmj:CMJ):boolean
        {
            return false;
        }

        protected checkDiHu(cmj:CMJ):boolean
        {
            return false;
        }

        protected checkDuiDuiHu(cmj:CMJ):boolean
        {
            return false;
        }

        // 碰碰胡
        protected checkPengPengHu(cmj:CMJ):boolean
        {
            return false;
        }

        // 烂胡
        protected checkLanHu(cmj:CMJ):boolean
        {
            return false;
        }

        // 七星
        protected checkQiXingHu(cmj:CMJ,xingNum:number):boolean
        {
            return false;
        }

        // 单吊
        protected checkDanDiaoHu(cmj:CMJ):boolean
        {
            return false;
        }

        // 杠上开花
        protected checkGangShangKaiHuaHu(cmj:CMJ):boolean
        {
            return false;
        }

        //判断是否胡牌的函数
        protected checkPingHu(cmj:CMJ):boolean
        {
            return false;
        }

        protected copyMyHandPaiArr(cmj:CMJ):Array<Array<number>>
        {
            var compositionAllArr:Array<Array<number>> = cmj.m_MyPAIVec.concat([]);
            return compositionAllArr;
        }

        // protected compositionData(cmj:CMJ):Array<Array<number>>
        // {
        //     var compositionTypeArr:Array<number> = [];
        //     var compositionAllArr:Array<Array<number>> = cmj.m_MyPAIVec.concat([]);
        //     compositionTypeArr=compositionAllArr[GlobalConfig.MJPAI_FENG].concat([]);
        //     var isStart:boolean=false;
        //     for (var j:number=1; j < GlobalConfig.CARD_VALUE_NUM - 1; j++)
        //     {
        //         isStart=compositionTypeArr[j] == 0 ? true : false;
        //         if (isStart)
        //         {
        //             compositionTypeArr[j]=compositionTypeArr[j + 1];
        //             compositionTypeArr[j + 1]=0;
        //         }
        //     }
        //     compositionAllArr[GlobalConfig.MJPAI_FENG]=compositionTypeArr;
        //     return compositionAllArr;
        // }

        
    }
}
