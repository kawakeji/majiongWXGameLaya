/**
* name 
*/
module MjGame
{
    export class RoomManager
    {
        playerVOs: Array<PlayerVO>;
        roomVO:RoomVO;
        private static instance: RoomManager;
        public static getInstance(): RoomManager
        {
            if (!this.instance)
            {
                this.instance = new RoomManager();
            }
            return this.instance;
        }
        constructor()
        {
            this.playerVOs = new Array();
            this.roomVO = new RoomVO();
        }

        public addPlayer(player: PlayerVO)
        {
            this.removePlayer(player.playerId);
            this.playerVOs.push(player);
        }

        isPlayerInRoom(playerId)
        {
            for (let index = 0; index < this.playerVOs.length; index++)
            {
                let player: PlayerVO = this.playerVOs[index];
                if (player.playerId !== Constants.ROOM_PLAYER_ID_NONE && player.playerId === playerId)
                {
                    return true;
                }
            }
            return false;
        }

        public removePlayer(playerId)
        {
            for (let index = 0; index < this.playerVOs.length; index++)
            {
                let player: PlayerVO = this.playerVOs[index];
                if (player.playerId === playerId)
                {
                    this.playerVOs.splice(index,1);
                }
            }
        }

        public getPlayer(playerId:number)
        {
            for (let index = 0; index < this.playerVOs.length; index++)
            {
                let player: PlayerVO = this.playerVOs[index];
                if (player.playerId === playerId)
                {
                    return player;
                }
            }
        }

        public getPlayerByPos(pos:number)
        {
            for (let index = 0; index < this.playerVOs.length; index++)
            {
                let player: PlayerVO = this.playerVOs[index];
                if (player.position === pos)
                {
                    return player;
                }
            }
        }

        setRoomOwner(roomOwnerPLayer:PlayerVO):void
        {
            if (this.roomVO)
            {
                this.roomVO.roomOwnerPlayer = roomOwnerPLayer;
            }
        }

        get roomId():number
        {
            if (this.roomVO)
            {
                return this.roomVO.roomId;
            }
            return 0;
        }

    }
}