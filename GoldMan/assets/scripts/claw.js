cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
        this.clawNodeJs = this.node.parent.getComponent('clawNode');
    },

    onCollisionEnter(other, self){
        //console.log('碰到了！');
        this.clawNodeJs.changeState(window.StateValue.Back);
    }

    // update (dt) {},
});
