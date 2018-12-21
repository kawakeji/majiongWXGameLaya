/**
* name 
*/
module MjGame{
	export class RoomNumInput extends ui.game.dialog.RoomNumInputUI{
		private NumPath:String = "game/roomNumInput/";
		private inputNumArr:Array<Laya.Image>;
		private PosArr:Array<number> = [40,106,172,238,304,370];
		private isEnter:boolean = false;
		constructor(){
			super();
			this.inputNumArr = [];
			this.initEvent()
		}

		initEvent()
		{
			for(var i = 0; i < 10; i++)
			{
				this['num' + i].on(Laya.Event.CLICK,this,this.onClickNum);
				this['num' + i].num = i;
			}

			this.reInputBtn.on(Laya.Event.CLICK,this,this.onReInput);
			this.delBtn.on(Laya.Event.CLICK,this,this.onDel);
			this.closeBtn.on(Laya.Event.CLICK,this,this.onClose);
		}

		onClickNum(event:Event)
		{
			var target:any = event.currentTarget;
			this.addInputNum(target.num);
		}

		onReInput()
		{
			for (var index = this.inputNumArr.length; index > 0; index--)
			{
				this.removeInputNum();
			}
			this.inputNumArr = [];
		}

		onDel()
		{
			this.removeInputNum();
		}

		onClose()
		{
			this.removeSelf();
		}

		addInputNum(num)
		{
			var curLen:number = this.inputNumArr.length;
			if(!this.checkIsCanEnter(curLen))
			{
				var img:Laya.Image = new Laya.Image();
				img.skin = this.NumPath + num + ".png";
				img['num'] = num;
				img.pos(this.PosArr[curLen],96);
				this.addChild(img);
				this.inputNumArr.push(img);
				this.checkIsCanEnter(curLen + 1);
			}
		}

		removeInputNum()
		{
            this.isEnter = false;
            if (this.inputNumArr.length <= 0) return ;
			var img:Laya.Image = this.inputNumArr.pop();
            if (img)
            {
                img.removeSelf();
            }
		}

		checkIsCanEnter(curLen:number)
		{
			if (this.isEnter)
			{
				Log.print("正在进入房间，请稍后~");
				return false;
			}
			if (curLen== 6)
			{
				this.isEnter = true;
				Log.print("进入房间：",this.getRoomNum());
				SocketManager.getInstance().request(ProtocolType.ROOM_JOINROOM,{roomId:this.getRoomNum()});
                this.removeSelf();
				return true;
			}
			return false;
		}

		getRoomNum():number
		{
			var roomNum:string = "";
			for (var index = 0; index < this.inputNumArr.length; index++) 
			{
				var element:any = this.inputNumArr[index];
				roomNum = roomNum + element.num;
			}
			return Number(roomNum);
		}
	}
}