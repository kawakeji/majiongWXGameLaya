/**
* name 
*/
module MjGame{
	export class EventManager extends Laya.EventDispatcher{
		constructor(){
			super();
		}

		private static instance:EventManager;
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        public static getInstance():EventManager
        {
            if(!this.instance)
            {
                this.instance = new EventManager();
            }
            return this.instance;
        }
	}
}