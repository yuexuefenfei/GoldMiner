cc.Class({
    extends: cc.Component,

    properties: {
        clawStone:cc.Sprite,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
        let playerN = cc.find('Canvas/player')
        this.player = playerN.getComponent('player');
    },

    onCollisionEnter(other, self){
        //console.log('碰到了！');
        
        if (1 === other.tag) {
            this.player.changeState(cc.dm.code.StateValue.Back);
        }
        if (2 === other.tag) {
            //碰到石头
            this.player.changeState(cc.dm.code.StateValue.Catch);
            //console.log('碰到石头了！');
            //other(碰撞组件)所在的节点下的Sprite组件的spriteFrame

            //通过组件取节点
            let otherSprite = other.node.getComponent(cc.Sprite);
            this.clawStone.spriteFrame = otherSprite.spriteFrame;
            //this.node
            other.node.destroy();
        }
    }

    // update (dt) {},
});
