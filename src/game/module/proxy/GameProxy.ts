/**
* name 
*/
module MjGame{
	export class GameProxy extends BaseProxy{
		constructor(){
			super();
			this.addProtos();
		}

		addProtos():void
		{
            SocketManager.getInstance().addProto(ProtocolType.ON_UPDATE_CUR_PLAYER,this.onUpdateCurPlayer);
			SocketManager.getInstance().addProto(ProtocolType.ON_ADD_PAI,this.onAddPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_DEL_PAI,this.onDelPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_CHI_PAI,this.onChiPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_PENG_PAI,this.onPengPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_GANG_PAI,this.onGangPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_HU_PAI,this.onHuPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_OPERATION,this.onOperation);
			SocketManager.getInstance().addProto(ProtocolType.ON_UPDATE_CUR_OUT_PAI,this.onUpdateCurPai);
			SocketManager.getInstance().addProto(ProtocolType.ON_STATUS_CHANGE,this.onStatusChange);
			SocketManager.getInstance().addProto(ProtocolType.ON_HUANG_ZHUANG,this.onHuangZhuang);
			SocketManager.getInstance().addProto(ProtocolType.ON_TIMEOUT,this.onTimeOut);
		}
		
		onUpdateCurPlayer(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.UPDATE_CUR_PLAYER,[data]);
		}

		onOperation(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.OPERATION,[data]);
		}
		
		onAddPai(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.ADD_PAI,[data]);
		}
		
		onDelPai(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.DEL_PAI,[data]);
		}
		
		onChiPai(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.CHI_PAI,[data]);
		}
		
		onPengPai(data:any):void
		{
            EventManager.getInstance().event(ServerHandEvent.PENG_PAI,[data]);
		}
		
		onGangPai(data:any):void
		{
            EventManager.getInstance().event(ServerHandEvent.GANG_PAI,[data]);
		}
		
		onHuPai(data:any):void
		{
            EventManager.getInstance().event(ServerHandEvent.HU_PAI,[data]);
		}
		
        onHuangZhuang(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.HUANG_ZHUANG);
		}

        onUpdateCurPai(data:any)
        {
            EventManager.getInstance().event(ServerHandEvent.UPDATE_CUR_OUT_PAI,[data]);
        }
		
		onStatusChange(data:any):void
		{
			EventManager.getInstance().event(ServerHandEvent.STATUS_CHANGE,[data]);
		}

        onTimeOut(data:any)
        {
            EventManager.getInstance().event(ServerHandEvent.TIME_OUT,[data]);
        }

		removeProtos():void
		{

		}

		sendDelPai(playerVO:PlayerVO,stPai:StPAI):void
		{
			var msg:any = {};
			msg.playerId = playerVO.playerId;
			msg.stPai = stPai;
			SocketManager.getInstance().request(ProtocolType.CMJ_DELPAI,msg);
		}
		
		sendQuitOperation(playerVO:PlayerVO,oType:number):void
		{
			var msg:any = {};
			msg.playerId = playerVO.playerId;
			msg.operationType = oType;
			SocketManager.getInstance().request(ProtocolType.CMJ_QUITOPERATIONI,msg);
		}
		
		sendHuToServer(playerVO:PlayerVO):void
		{
			var msg:any = {};
			msg.playerId = playerVO.playerId;
			SocketManager.getInstance().request(ProtocolType.CMJ_HU,msg);
		}

		sendChiToServer(playerVO:PlayerVO, index:number):void
		{
			var msg:any = {};
			msg.playerId = playerVO.playerId;
			msg.index = index;
			SocketManager.getInstance().request(ProtocolType.CMJ_CHIPAI,msg);
		}
		
		sendPengToServer(playerVO:PlayerVO):void
		{
			var msg:any = {};
			msg.playerId = playerVO.playerId;
			SocketManager.getInstance().request(ProtocolType.CMJ_PENGPAI,msg);
		}
		
		sendGangToServer(playerVO:PlayerVO):void
		{
			var msg:any = {};
			msg.playerId = playerVO.playerId;
			SocketManager.getInstance().request(ProtocolType.CMJ_GANGPAI,msg);
		}
		
        sendReadyToServer(playerVO:PlayerVO):void
        {
            var msg:any = {};
			msg.playerId = playerVO.playerId;
			msg.status = Constants.PLAYER_STATE_READY;
			SocketManager.getInstance().request(ProtocolType.CMJ_READY,msg);
        }

        sendTimeOut(playerVO:PlayerVO)
        {
            var msg:any = {};
			msg.playerId = playerVO.playerId;
			msg.isTimeOut = true;
			SocketManager.getInstance().request(ProtocolType.CMJ_TIMEOUT,msg);
        }
	}
}