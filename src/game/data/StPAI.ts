/*
    牌的结构体
    m_Type:number;             //牌类型  
    m_Value:number;           //牌字   
    isGang:boolean;           //是否是杠牌
*/

module MjGame{
    export class StPAI
    {
        constructor(public m_Type?:number,public m_Value?:number,public isGang:boolean = false){}
    }
}
