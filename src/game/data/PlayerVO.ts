module MjGame {
	export class PlayerVO {
        constructor()
        {
            this.playerId = 0;
            this.roomId = 0;
            this.isRoomOwner = false;
            this.isDealer = false;
            this.isReady = false;
            this.position = 0;
            this.cmj = new CMJ();
        }

		playerId: number;

		username: string;

		roomId: number;

		isRoomOwner: boolean;

		isDealer: boolean;

        isReady:boolean;

		position: number;

		cmj: CMJ;

	}
}