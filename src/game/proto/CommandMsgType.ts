module MjGame{
	export class CommandMsgType
	{
		constructor()
		{
		}
		
		//==================服务器到客户端协议=============================
		public static LOGIN_S:number = 1001;
		public static LOGOUT_S:number = 1003;
		public static PLAYER_LEAVE_S:number = 1005;
		public static OTHER_PLAYER_ENTER_ROOM_S:number = 1007;
		public static OTHER_PLAYER_LEAVE_ROOM_S:number = 1009;
		public static START_GAME_S:number = 1011;
		public static ADD_PAI_S:number = 1013;
		public static DEL_PAI_S:number = 1015;
		public static CHI_PAI_S:number = 1017;
		public static PENG_PAI_S:number = 1019;
		public static GANG_PAI_S:number = 1021;
		public static HU_PAI_S:number = 1023;
		public static UPDATE_CUR_PLAYER_S:number = 1025;
		//准备吃，碰，杠，胡
		public static READY_OPERATION_S:number = 1027;
		//重新开始
		public static RE_READY_S:number = 1029;
		//黄庄了
		public static HUANG_ZHUANG_S:number = 1031;
		//===================客户端请求服务器协议=========================
		public static LOGIN_C:number = 1002;
		public static LOGOUT_C:number = 1004;
		public static PLAYER_LEAVE_C:number = 1006;
		public static DEL_PAI_C:number = 1008;
		public static CHI_PAI_C:number = 1010;
		public static PENG_PAI_C:number = 1012;
		public static GANG_PAI_C:number = 1014;
		public static HU_PAI_C:number = 1016;
		//放弃吃，碰，杠，胡
		public static QUIT_OPERATION_C:number = 1020;
		//重新开始
		public static RE_READY_C:number = 1022;
	}
}
