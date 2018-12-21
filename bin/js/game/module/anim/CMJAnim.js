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
            this.anim.visible = false;
            this.parentView.addChild(this.anim);
            //播放Animation动画
        }
        CMJAnim.prototype.onComplete = function () {
            if (this.compCb) {
                this.anim.stop();
                this.anim.visible = false;
                this.compCb.call(null, []);
            }
        };
        CMJAnim.prototype.play = function (labelName, compCb, isLoop) {
            if (isLoop === void 0) { isLoop = false; }
            this.anim.visible = true;
            this.compCb = compCb;
            //添加到舞台
            this.anim.play(0, isLoop, labelName);
        };
        CMJAnim.prototype.pos = function (x, y) {
            this.anim.pos(x, y);
        };
        Object.defineProperty(CMJAnim.prototype, "visible", {
            get: function () {
                return this.anim.visible;
            },
            set: function (val) {
                this.anim.visible = val;
            },
            enumerable: true,
            configurable: true
        });
        return CMJAnim;
    }());
    MjGame.CMJAnim = CMJAnim;
})(MjGame || (MjGame = {}));
//# sourceMappingURL=CMJAnim.js.map