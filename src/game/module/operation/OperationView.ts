/**
* name 
*/
module MjGame{
	import Image = Laya.Image;
	export class OperationView extends ui.game.view.OperationUI
	{
		constructor(){
			super();
			this.init();
		}
		viewArr:Array<Image>;
		
		init()
		{
			this.viewArr = [this.chiBtn,this.pengBtn,this.gangBtn,this.huBtn,this.quitBtn];
		}
		
		refreshPos():void
		{
			var btn:Image;
			var oX:number;
			for (var i:number = 0; i < this.viewArr.length; i++) 
			{
				btn = this.viewArr[i];
				if(btn.visible == true)
				{
					btn.x = oX;
					oX += btn.width + 5;
				}
			}
		}
	}
}