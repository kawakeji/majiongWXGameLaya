module MjGame
{
    export class Constants
    {
        public static ROOM_OK:number = 1;
        public static ROOM_FAILED:number = 0;
        // yes / no
        public static ROOM_YES:number = 1;
        public static ROOM_NO:number = 0;

        
        public static ROOM_ID_NONE: number = 0; // player without ROOM(not in any ROOM)
        public static ROOM_PLAYER_ID_NONE: number = 0; // none player id in a ROOM(placeholder)
        public static ROOM_AREA_ID_NONE: number = 0; // none area id (placeholder)
        public static ROOM_USER_ID_NONE: number = 0; // none user id (placeholder)
        public static ROOM_SERVER_ID_NONE: number = 0; // none server id (placeholder)
        public static ROOM_PLAYER_INFO_NONE: string = ''; // none player info	(placeholder)

        public static JOIN_ROOM_RET_CODE_OK: number = 1;	// join ok
        public static JOIN_ROOM_RET_CODE_NO_POSITION: number = -1;	// there is no position
        public static JOIN_ROOM_RET_CODE_ALREADY_IN_ROOM: number = -2;	// already in the ROOM
        public static JOIN_ROOM_RET_CODE_IN_OTHER_TEA: number = -3;	// already in other ROOM
        public static JOIN_ROOM_RET_CODE_SYS_ERROR: number = -4;	// system error

        // 服务器推送过来的操作类型
        public static O_TYPE_NULL:number = 0;
        public static O_TYPE_HU:number = 1;
        public static O_TYPE_GANG:number = 2;
        public static O_TYPE_PENG:number = 3;
        public static O_TYPE_CHI:number = 4;
        public static O_TYPE_DA:number = 5;
    }
}