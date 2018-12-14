/**
* name 
*/
module MjGame{
	export class AlertManager{
		constructor(){

		}

        private static instance:AlertManager;
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        public static getInstance():AlertManager
        {
            if(!this.instance)
            {
                this.instance = new AlertManager();
            }
            return this.instance;
        }        

        public showAlert(msg:string,closeCb?:Function):void
        {
            var alert:AlertDialog = new AlertDialog(msg,closeCb);
            alert.show();
        }               
	}
}