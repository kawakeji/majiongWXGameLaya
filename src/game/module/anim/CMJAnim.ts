/**
* name 
*/
module MjGame
{
    export class CMJAnim
    {
        anim: Laya.Animation;
        compCb: Function;
        parentView:View;
        animPath:string;
        constructor(parentView: Laya.View, animPath:string)
        {
            this.parentView = parentView;
            this.animPath = animPath;
            this.anim = new Laya.Animation();
            //加载动画文件
            this.anim.loadAnimation(this.animPath);

            this.anim.on(Laya.Event.COMPLETE, this, this.onComplete);

            this.parentView.addChild(this.anim);
            //播放Animation动画
        }

        onComplete()
        {
            this.anim.stop();
            this.anim.visible = false;
            if (this.compCb)
            {
                this.compCb.call(null, []);
            }
        }

        play(labelName: string, compCb: Function)
        {
            this.anim.visible = true;
            this.compCb = compCb;
            //添加到舞台
            this.anim.play(0, false, labelName);
        }
    }
}