/*
	吃牌的结构体
	m_stPai:number;             //杠牌  
	m_byPengSeat:number;           //被碰的人的位置，默认为-1 就是暗杠
*/
module MjGame
{
    export class StPeng
    {
        constructor(public m_stPai?:StPAI,public m_byPengSeat:number = -1){}
    }
}

