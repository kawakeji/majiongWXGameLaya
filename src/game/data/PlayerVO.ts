module MjGame
{
	export class PlayerVO
	{
		playerId:number;
		
		nickName:string;
		
		roomId:number;
		
		position:number;
		
		isSelf:boolean;
		
		cmj:CMJ;
		
		// updateCMJ(cmjBMsg:CMJBMsg)
		// {
		// 	cmj = new CMJ();
		// 	cmj.init();
		// 	cmj.m_Dealer = cmjBMsg.mDealer;
		// 	var intListMsg:IntListMsg;
		// 	for (var i:number = 0; i < cmjBMsg.mMyPAIVec.length; i++) 
		// 	{
		// 		intListMsg = cmjBMsg.mMyPAIVec[i];
		// 		for (var j:number = 0; j < intListMsg.value.length; j++) 
		// 		{
		// 			cmj.m_MyPAIVec[i][j] = intListMsg.value[j];
		// 		}
		// 	}
		// }
	}
}