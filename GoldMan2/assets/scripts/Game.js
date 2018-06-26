cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 1、打开碰撞系统
        // 2、碰撞形状
        // 3、谁跟谁能碰(分组)
        // 4、处理碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    },

    start () {

    },

    // update (dt) {},
});
