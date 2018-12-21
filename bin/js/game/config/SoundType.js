/**
* name
*/
var MjGame;
(function (MjGame) {
    var SoundType = /** @class */ (function () {
        function SoundType() {
        }
        SoundType.PASS = "pass";
        SoundType.START_GAME = "startgame";
        SoundType.OUT_CARD = "outcard";
        SoundType.MOVE_CARD = "move";
        SoundType.TIME = "time";
        SoundType.MAIN = "game/sound/main.mp3";
        SoundType.BG_SOUND = "game/sound/bg.mp3";
        return SoundType;
    }());
    MjGame.SoundType = SoundType;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=SoundType.js.map