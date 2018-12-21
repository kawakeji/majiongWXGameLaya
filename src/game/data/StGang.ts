/*
    吃牌的结构体
    m_stPai:number;             //杠牌  
    m_Otype:number;           //杠的类型
    m_byGangSeat:number;           //被杠的人的位置，默认为-1 就是暗杠
*/
module MjGame
{
    export class StGang
    {
        constructor(public m_stPai?:StPAI,public m_Otype?:number,public m_byGangSeat:number = -1){}
    }
}

