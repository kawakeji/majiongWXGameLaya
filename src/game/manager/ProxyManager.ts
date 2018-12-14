/**
* name 
*/
module MjGame{
	export class ProxyManager{
		private static instance:ProxyManager;

		public static getInstance():ProxyManager
		{
			if(!this.instance)
			{
				this.instance = new ProxyManager();
			}
			return this.instance;
		}

		constructor()
		{
			this.initProxy();
		}

		public hallProxy:HallProxy;
        public roomProxy:RoomProxy;
        public gameProxy:GameProxy;

		initProxy():void
		{
			this.hallProxy = new HallProxy();
			this.roomProxy = new RoomProxy();
			this.gameProxy = new GameProxy();
		}

	}
}