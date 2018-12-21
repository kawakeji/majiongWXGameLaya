/**
* name
*/
var MjGame;
(function (MjGame) {
    var SoundManager = Laya.SoundManager;
    var MjSoundManager = /** @class */ (function () {
        function MjSoundManager() {
            // 性别 true 男孩，false 女孩
            this.gender = true;
            this.speakSoundNumDic = { 'chi': 3, 'peng': 4, 'gang': 4, 'hu': 5 };
        }
        MjSoundManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new MjSoundManager();
            }
            return this.instance;
        };
        MjSoundManager.prototype.playCommonSound = function (soundName) {
            var url = "game/sound/common/" + soundName + ".mp3";
            this.playSound(url);
        };
        MjSoundManager.prototype.playOutCardSound = function (stPai) {
            var type = "pai";
            var value = stPai.m_Type + "" + stPai.m_Value;
            this.playSpeakSound(type, value);
        };
        MjSoundManager.prototype.playOperationSound = function (type) {
            this.playSpeakSound(type, this.randomSoundNum(type));
        };
        MjSoundManager.prototype.playSpeakSound = function (type, value) {
            var url = "game/sound/" + this.getGenderName() + "/" + type + "/" + value + ".mp3";
            this.playSound(url);
        };
        MjSoundManager.prototype.playMusic = function (url, loop) {
            SoundManager.playMusic(url, loop, new Handler(this, this.onComplete));
        };
        MjSoundManager.prototype.playSound = function (url) {
            SoundManager.playSound(url, 1, new Handler(this, this.onComplete));
        };
        MjSoundManager.prototype.stopMusic = function () {
            SoundManager.stopMusic();
        };
        MjSoundManager.prototype.stopSound = function (url) {
            SoundManager.stopSound(url);
        };
        MjSoundManager.prototype.stopAll = function () {
            SoundManager.stopAll();
        };
        MjSoundManager.prototype.stopAllSound = function () {
            SoundManager.stopAllSound();
            SoundManager.musicVolume;
            SoundManager.musicMuted;
        };
        MjSoundManager.prototype.adjustMusicVolume = function (value) {
            SoundManager.musicVolume = value;
        };
        MjSoundManager.prototype.adjustSoundVolume = function (value) {
            SoundManager.soundVolume = value;
        };
        MjSoundManager.prototype.musicMuted = function (value) {
            SoundManager.musicMuted = value;
        };
        MjSoundManager.prototype.soundMuted = function (value) {
            SoundManager.soundMuted = value;
        };
        MjSoundManager.prototype.onComplete = function () {
        };
        MjSoundManager.prototype.getGenderName = function () {
            if (this.gender) {
                return "boy";
            }
            else {
                return "girl";
            }
        };
        MjSoundManager.prototype.randomSoundNum = function (type) {
            var count = this.speakSoundNumDic[type];
            count = count ? count : 0;
            return Math.floor(Math.random() * count) + "";
        };
        return MjSoundManager;
    }());
    MjGame.MjSoundManager = MjSoundManager;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=MjSoundManager.js.map