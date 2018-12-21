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
            this.anim.visible = false;
            this.parentView.addChild(this.anim);
            //播放Animation动画
        }

        onComplete()
        {
            if (this.compCb)
            {
                this.anim.stop();
                this.anim.visible = false;
                this.compCb.call(null, []);
            }
        }

        play(labelName: string, compCb: Function, isLoop:boolean = false)
        {
            this.anim.visible = true;
            this.compCb = compCb;
            //添加到舞台
            this.anim.play(0, isLoop, labelName);
        }

        pos(x:number,y:number)
        {
            this.anim.pos(x,y)
        }

        set visible(val:boolean)
        {
            this.anim.visible = val;
        }

        get visible():boolean
        {
            return this.anim.visible;
        }
    }
}