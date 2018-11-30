/**
* name 
*/
module MjGame{
	export class ClientHandEvent{
		/**
		 * 等待出牌 
		 */		
		public static WAITING_OUT_MJ:string = "waiting_out_mj";
		/**
		 * 等待吃操作 
		 */		
		public static WAITING_OPERATION_CHI:string = "waiting_operation_chi";
		/**
		 * 等待碰操作 
		 */		
		public static WAITING_OPERATION_PENG:string = "waiting_operation_peng";
		/**
		 * 等待杠操作 
		 */		
		public static WAITING_OPERATION_GANG:string = "waiting_operation_gang";
		/**
		 * 等待胡操作 
		 */		
		public static WAITING_OPERATION_HU:string = "waiting_operation_hu";
		/**
		 * 取消操作 
		 */		
		public static QUIT_OPERATION:string = "quit_operation";
		/**
		 * 显示出牌按钮 
		 */	
		public static SHOW_OUT_BTN:string = "show_out_btn";
	}
}