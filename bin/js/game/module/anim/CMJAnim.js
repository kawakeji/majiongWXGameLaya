/**
* name
*/
var MjGame;
(function (MjGame) {
    var CMJAnim = /** @class */ (function () {
        function CMJAnim(parentView, animPath) {
            this.parentView = parentView;
            this.animPath = animPath;
            this.anim = new Laya.Animation();
            //加载动画文件
            this.anim.loadAnimation(this.animPath);
            this.anim.on(Laya.Event.COMPLETE, this, this.onComplete);
            this.parentView.addChild(this.anim);
            //播放Animation动画
        }
        CMJAnim.prototype.onComplete = function () {
            this.anim.stop();
            this.anim.visible = false;
            if (this.compCb) {
                this.compCb.call(null, []);
            }
        };
        CMJAnim.prototype.play = function (labelName, compCb) {
            this.anim.visible = true;
            this.compCb = compCb;
            //添加到舞台
            this.anim.play(0, false, labelName);
        };
        return CMJAnim;
    }());
    MjGame.CMJAnim = CMJAnim;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CMJAnim.js.map