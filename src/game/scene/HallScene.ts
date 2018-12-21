/**
* 大厅 
*/
module MjGame
{
	export class HallScene extends ui.game.scene.HallSceneUI 
	{
		constructor(){
			super();
			this.addEvent();
            // MjSoundManager.getInstance().playMusic(SoundType.MAIN);
		}

        addEvent()
        {
            this.createRoomBtn.on(Laya.Event.CLICK,this,this.onCreateRoom);
			this.enterRoomBtn.on(Laya.Event.CLICK,this,this.onEnterRoom);
            EventManager.getInstance().on(BaseEvent.PLAYER_ENTER_ROOM,this,this.onPlayerEnter)
        }

        removeEvent()
        {
            EventManager.getInstance().off(BaseEvent.PLAYER_ENTER_ROOM,this,this.onPlayerEnter);
        }

        onCreateRoom(data):void
        {
            SocketManager.getInstance().request(ProtocolType.ROOM_CREATEROOM,{usename:"logen"});    
        }

		onEnterRoom():void
		{
			var roomNumInputView:RoomNumInput = new RoomNumInput();
			roomNumInputView.show();
		}

        onPlayerEnter()
        {
            var roomScene:RoomScene = new RoomScene();
            Laya.stage.addChild(roomScene);
            this.removeEvent();
            this.removeSelf();
        }
	}
}