module MjGame{
	import StPAI = MjGame.StPAI;
	/*
		吃牌的结构体
		m_Type:number;             //牌类型  
		m_Value1:number;           //牌字  
		m_Value2:number;           //牌字  
		m_Value3:number;           //牌字 
		byChiIndex:number;         //被吃的那张牌的索引 
	*/
	export class StCHI
	{
		constructor(public m_Type?:number,public m_Value1?:number,public m_Value2?:number,public m_Value3?:number,public byChiIndex?:number){}
	}
}
