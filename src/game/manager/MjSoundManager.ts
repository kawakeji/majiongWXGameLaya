/**
* name 
*/
module MjGame
{
    var SoundManager = Laya.SoundManager;
    export class MjSoundManager
    {
        constructor()
        {

        }
        // 性别 true 男孩，false 女孩
        gender:boolean = true;
        speakSoundNumDic={'chi':3,'peng':4,'gang':4,'hu':5};
        private static instance: MjSoundManager;
        public static getInstance(): MjSoundManager
        {
            if (!this.instance)
            {
                this.instance = new MjSoundManager();
            }
            return this.instance;
        }

        playCommonSound(soundName:string)
        {
            var url:string = "game/sound/common/" + soundName + ".mp3";
            this.playSound(url);
        }

        playOutCardSound(stPai:StPAI)
        {
            var type:string = "pai";
            var value:string = stPai.m_Type + "" + stPai.m_Value;
            this.playSpeakSound(type,value);
        }

        playOperationSound(type:string)
        {
            this.playSpeakSound(type,this.randomSoundNum(type))
        }

        playSpeakSound(type:string,value:string)
        {
            var url:string = "game/sound/"+this.getGenderName()+"/" + type + "/" + value + ".mp3";
            this.playSound(url);
        }

        playMusic(url:string,loop?:number)
        {
            if (GlobalConfig.IS_PLAY_SOUND)
            {
                SoundManager.playMusic(url, loop, new Handler(this, this.onComplete));
            }
        }

        playSound(url:string)
        {
            if (GlobalConfig.IS_PLAY_SOUND)
            {
                SoundManager.playSound(url, 1, new Handler(this, this.onComplete));
            }
        }

        stopMusic()
        {
            SoundManager.stopMusic();
        }

        stopSound(url:string)
        {
            SoundManager.stopSound(url);
        }

        stopAll()
        {
            SoundManager.stopAll();
        }

        stopAllSound()
        {
            SoundManager.stopAllSound();
            SoundManager.musicVolume
            SoundManager.musicMuted
        }

        adjustMusicVolume(value:number)
        {
            SoundManager.musicVolume = value;
        }

        adjustSoundVolume(value:number)
        {
            SoundManager.soundVolume = value;
        }

        musicMuted(value:boolean)
        {
            SoundManager.musicMuted = value;
        }

        soundMuted(value:boolean)
        {
            SoundManager.soundMuted = value;
        }

        onComplete()
        {
        }

        getGenderName()
        {
            if(this.gender)
            {
                return "boy";
            }
            else
            {
                return "girl";
            }
        }

        randomSoundNum(type:string):string
        {
            var count:number = this.speakSoundNumDic[type];
            count = count ? count:0;
            return Math.floor(Math.random() * count) + "";
        }
    }
}