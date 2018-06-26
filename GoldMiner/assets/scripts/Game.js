
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    

    onLoad () {
        // 1、打开碰撞系统
        // 2、碰撞形状
        // 3、谁跟谁能碰(分组)
        // 4、处理碰撞
        //var manager = cc.director.getCollisionManager();
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    },


    start(){

    },

    //update (dt) {},
});
