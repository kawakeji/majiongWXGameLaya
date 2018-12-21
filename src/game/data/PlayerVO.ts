module MjGame {
	export class PlayerVO {
        constructor()
        {
            this.playerId = 0;
            this.roomId = 0;
            this.isRoomOwner = false;
            this.isDealer = false;
            this.status = 0;
            this.position = 0;
            this.cmj = new CMJ();
        }

		playerId: number;

		username: string;

		roomId: number;

		isRoomOwner: boolean;

		isDealer: boolean;

        status:number;

		position: number;

		cmj: CMJ;

	}
}