/**
* name 
*/
module MjGame{
	export class ServerHandEvent{
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
		/**
		 * 开始游戏 
		 */		
		public static START_GAME:string = "start_game";
		/**
		 * 更新正在操作的玩家 
		 */		
		public static UPDATE_CUR_PLAYER:string = "update_cur_player";
		/**
		 * 发一张牌 
		 */		
		public static ADD_PAI:string = "add_pai";
		/**
		 * 打一张牌 
		 */		
		public static DEL_PAI:string = "del_pai";
		public static CHI_PAI:string = "chi_pai";
		public static PENG_PAI:string = "peng_pai";
		public static GANG_PAI:string = "gang_pai";
		public static HU_PAI:string = "hu_pai";
		
		public static OPERATION:string = "operation";
		/**
		 * 有玩家准备了 
		 */		
		public static STATUS_CHANGE:string = "status_change";
		/**
		 * 黄庄了 
		 */		
		public static HUANG_ZHUANG:string = "huang_zhuang";
        /**
         * 倒计时
         */
		public static TIME_OUT:string = "time_out";
        /**
         * 更新当前的出的牌
         */
		public static UPDATE_CUR_OUT_PAI:string = "update_cur_out_pai";
		
	}
}