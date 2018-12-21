module MjGame{
	import StPAI = MjGame.StPAI;
    /*
        吃牌的结构体
        m_ChiPai1:number;             //吃牌  
        m_ChiPai2:number;           //吃牌 
        m_ChiPai3:number;           //吃牌 
        m_byChiIndex:number;           //被吃牌的位置
        m_byChiSeat:number;           //被吃牌的座位信息
    */
	export class StCHI
	{
		constructor(public m_ChiPai1?:StPAI,public m_ChiPai2?:StPAI,public m_ChiPai3?:StPAI,public m_byChiIndex?:number,public m_byChiSeat?:number){}
	}
}
