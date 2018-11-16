/*
    胡牌的结构体
    m_GoodType:number;           //胡牌的类型
    m_GoodValue:number;           //胡牌的倍数   
    m_GoodName:string;            //胡牌的名字
*/
module MjGame{
    import StPAI = MjGame.StPAI;
    export class StGoodInfo
    {
        constructor(public m_GoodType:number = 0,public m_GoodValue:number = 0,public m_GoodName:string = ''){}
    }
}