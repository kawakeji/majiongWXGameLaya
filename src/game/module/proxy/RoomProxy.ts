/**
* name 
*/
module MjGame{
	export class RoomProxy extends BaseProxy{
		constructor(){
			super();
			this.addProtos();
		}

		addProtos():void
		{
			SocketManager.getInstance().addProto(ProtocolType.ON_ADD_Room,function (data)
			{
				
			})
			SocketManager.getInstance().addProto(ProtocolType.ON_LEAVE_ROOM,function (data)
			{
				
			})

            SocketManager.getInstance().addProto(ProtocolType.ROOM_JOINROOM,function (data)
			{
                if (data.error)
                {
                    AlertManager.getInstance().showAlert(data.error);
                }
			})

            SocketManager.getInstance().addProto(ProtocolType.ON_ROOMMATE_LEAVE_ROOM,function (data)
			{
                if (data.playerId)
                {
                    RoomManager.getInstance().removePlayer(data.playerId);
                    EventManager.getInstance().event(BaseEvent.PLAYER_LEAVE_ROOM,data.playerId);
                }
			})

            SocketManager.getInstance().addProto(ProtocolType.ON_DISBAND_ROOM,function (data)
			{
                EventManager.getInstance().event(BaseEvent.DISBAND_ROOM);
			})


			this.addUpdateRoomListener()
            this.addStartGameListener()
            
		}

        addUpdateRoomListener()
        {
            SocketManager.getInstance().addProto(ProtocolType.ON_UPDATE_ROOM,function (data)
			{
                if (data.playerVOs)
                {
                    for (var index = 0; index < data.playerVOs.length; index++) 
                    {
                        var element = data.playerVOs[index];
                        var player:PlayerVO = new PlayerVO();
                        player.playerId = element.playerId;
                        player.username = element.username;
                        player.roomId = element.roomId;
                        player.position = element.position;
                        player.isRoomOwner = element.isRoomOwner;
                        player.isDealer = element.isDealer;
                        player.isReady = element.isReady;
                        Log.print("ON_UPDATE_ROOM ==> player:",util.toString(player))
                        if (player.isRoomOwner)
                        {
                            RoomManager.getInstance().roomOwnerPlayer = player;
                        }
                        if (player.username == PlayerManager.getInstance().selfUsername)
                        {
                            PlayerManager.getInstance().selfPlayerVO = player;
                        }
                        RoomManager.getInstance().addPlayer(player);
                    }

                    EventManager.getInstance().event(BaseEvent.PLAYER_ENTER_ROOM);
                }
			})
        }

        addStartGameListener()
        {
            SocketManager.getInstance().addProto(ProtocolType.ON_START_GAME,function(data)
            {
                let players:any = data.players;
                let hunPai:StPAI = data.hunPai;
                if(players)
                {
                    for (var playerId in players) 
                    {
                        if (players.hasOwnProperty(playerId)) 
                        {
                            var player:PlayerVO = RoomManager.getInstance().getPlayer(Number(playerId));
                            if (player)
                            {
                                player.cmj.m_MyPAIVec = players[playerId];
                                if (hunPai)
                                {
                                    player.cmj.setHunPai(hunPai);
                                }
                            }
                        }
                    }

                    EventManager.getInstance().event(BaseEvent.START_GAME);
                }
            })
        }

		removeProtos():void
		{

		}
	}
}