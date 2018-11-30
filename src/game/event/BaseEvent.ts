/**
* name 
*/
module MjGame{
	export class BaseEvent{
		/**
		 * 胡牌了 
		 */		
		public static HU:string = "hu";
		/**
		 * 开始游戏 
		 */		
		public static START_GAME:string = "start_game";
		/**
		 * 玩家加入房间
		 */		
		public static PLAYER_ENTER_ROOM:string = "player_enter_room";
		/**
		 * 玩家离开房间
		 */		
		public static PLAYER_LEAVE_ROOM:string = "player_leave_room";
		/**
		 * 玩家自己进入房间 
		 */		
		public static SELF_ENTER_ROOM:string = "self_enter_room";
		/**
		 * 登录失败
		 */		
		public static LOGIN_FAIL:string = "login_fail";
	}
}