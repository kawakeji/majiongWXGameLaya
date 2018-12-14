/**
* name 
*/
module MjGame{
	export class PlayerManager{

		selfPlayerVO:PlayerVO;
        private _selfUsername:string;
		private static instance:PlayerManager;

		public static getInstance():PlayerManager
		{
			if(!this.instance)
			{
				this.instance = new PlayerManager();
			}
			return this.instance;
		}

		get selfUsername():string
		{
			return this._selfUsername;
		}

        set selfUsername(username:string)
		{
			this._selfUsername = username;
		}

	}
}