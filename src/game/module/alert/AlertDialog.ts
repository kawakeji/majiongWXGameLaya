/**
* name 
*/
module MjGame{
	export class AlertDialog extends ui.game.dialog.AlertDialogUI{
        closeCb:Function;
		constructor(content:string,closeCb:Function){
			super();
            this.closeCb = closeCb;
			this.initView(content);
			this.closeBtn.on(Laya.Event.CLICK,this,this.onClose);
		}

		initView(content):void
		{
			this.contentLabel.text = content;
		}

		onClose()
		{
            if(this.closeCb )
            {
                this.closeCb.call(null,[]);
            }
			this.removeSelf();
		}
	}
}