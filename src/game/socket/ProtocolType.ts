/**
* 协议号 定义类 
*/
module MjGame{
	export class ProtocolType{

        //=========================== client request type ==========================//
		public static CONNECT_RESULT:string = 'connect_result';
		public static CONNECT_ENTER:string = 'connector.entryHandler.enter';
		public static GATE_QUERYENTRY:string = 'gate.gateHandler.queryEntry';
		public static CHAT_SEND:string = 'chat.chatHandler.send';
		public static ROOM_CREATEROOM:string = 'area.roomHandler.createRoom';
		public static ROOM_JOINROOM:string = 'area.roomHandler.joinRoom';
		public static ROOM_STARTGAME:string = 'area.roomHandler.startGame';
		public static CMJ_DELPAI:string = 'area.cmjHandler.delPai';
		public static CMJ_QUITOPERATIONI:string = 'area.cmjHandler.quitOperation';
		public static CMJ_HU:string = 'area.cmjHandler.huPai';
		public static CMJ_CHIPAI:string = 'area.cmjHandler.chiPai';
		public static CMJ_PENGPAI:string = 'area.cmjHandler.pengPai';
		public static CMJ_GANGPAI:string = 'area.cmjHandler.gangPai';
		public static CMJ_READY:string = 'area.cmjHandler.ready';

		//======================== on server listen type============================//
		public static ON_ADD_Room:string = 'onAddRoom';
		public static ON_LEAVE_ROOM:string = 'onLeaveRoom';
		public static ON_UPDATE_ROOM:string = 'onUpdateRoom';
		public static ON_DISBAND_ROOM:string = 'onDisbandRoom';
		public static ON_ROOMMATE_LEAVE_ROOM:string = 'onRoommateLeaveRoom';
		public static ON_START_GAME:string = 'onStartGame';
		public static ON_CHAT:string = 'onChat';

        //========================= 操作类型 ======================================//
        public static ON_UPDATE_CUR_PLAYER:string = "onUpdateCurPlayer";
        public static ON_ADD_PAI:string = "onAddPai";
        public static ON_DEL_PAI:string = "onDelPai";
        public static ON_CHI_PAI:string = "onChiPai";
        public static ON_PENG_PAI:string = "onPengPai";
        public static ON_GANG_PAI:string = "onGangPai";
        public static ON_HU_PAI:string = "onHuPai";
        public static ON_OPERATION:string = "onOperation";
        public static ON_READY:string = "onReady";
        public static ON_HUANG_ZHUANG:string = "onHuangZhuang";
	}
}