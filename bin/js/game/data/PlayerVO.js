var MjGame;
(function (MjGame) {
    var PlayerVO = /** @class */ (function () {
        function PlayerVO() {
            this.playerId = 0;
            this.roomId = 0;
            this.isRoomOwner = false;
            this.isDealer = false;
            this.status = 0;
            this.position = 0;
            this.cmj = new MjGame.CMJ();
        }
        return PlayerVO;
    }());
    MjGame.PlayerVO = PlayerVO;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=PlayerVO.js.map