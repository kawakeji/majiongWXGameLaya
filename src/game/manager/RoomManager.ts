/**
* name 
*/
module MjGame
{
    export class RoomManager
    {
        playerVOs: Array<PlayerVO>;
        roomOwnerPlayer:PlayerVO;
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

        get roomId():number
        {
            if (this.roomOwnerPlayer)
            {
                return this.roomOwnerPlayer.roomId;
            }
            return 0;
        }
    }
}