/**
* 房间数据 
*/
module MjGame{
	export class RoomVO{
		constructor(){

		}
        // 房间ID
        public roomId:number;
        // 剩余的回合数量
        public roomRoundNum:number;
        // 癞子的牌型
        public roomHunPai:StPAI;
        // 房间拥有者
        public roomOwnerPlayer:PlayerVO;
	}
}