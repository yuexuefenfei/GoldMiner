let clawJs = require('claw');
cc.Class({
    extends: cc.Component,

    properties: {
        //clawN:cc.Node,
        clawJs:clawJs
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.node.on(事件类型, 回调函数, 绑定对象);
        //this.name = '触摸';
        //this.clawN = cc.find('Canvas/player/clawNode');
        //通过节点去脚本组件:node.getComponent('脚本名称')
        //通过脚本取节点:this.node
        //this.clawJs = this.clawN.getComponent('claw');
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart/*.bind(this)*/, this);
    },

    start () {

    },

    // update (dt) {},

    //this:谁调用，this指向的就是谁你！
    onTouchStart(){
        
        //console.log(this.name);
        // 1、拿到touch脚本对象
        // 2、touch脚本对象.isDrop = true;
        this.clawJs.changeState(window.StateValue.Drop);
    }
});
