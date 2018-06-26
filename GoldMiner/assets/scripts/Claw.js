let STATE = require('code');
//let player = require('ClawJs');
cc.Class({
    extends: cc.Component,

    properties: {
        clowStone:cc.Sprite,
        //clawN:cc.Node

        
    },

    // LIFE-CYCLE CALLBACKS:
    onCollisionEnter: function (other, self) {
        

        //通过组件取节点
        let otherSprite = other.node.getComponent(cc.Sprite);
        
        
        if(0 === other.tag){
            //绳子缩回
            this.ClawNode.changeState(STATE.StateValue.Back);
        }
        if(0 !== other.tag){
            let backSpeed = other.node.getComponent('Stone');
            //player.ropeSpeed = backSpeed.backSpeed;
            this.ClawNode.changeState(STATE.StateValue.Catch);
            this.clowStone.spriteFrame = otherSprite.spriteFrame;
            other.node.destroy();
        }
        if(1 === other.tag){//gold
           
        }
        if(2 === other.tag){//stone

        }
        if(3 === other.tag){//goldBag

        }
        if(4 === other.tag){//bone

        }
        if(5 === other.tag){//diamond

        }
        
        console.log("检测到碰撞");
        console.log( other.node.name);
    },
    // onLoad () {},

    start () {
        //this.clawNodeJs = this.node.parent.getComponent('clawNode');
        let playerN = cc.find('Canvas/player')
        this.ClawNode = playerN.getComponent('Player');


    },

    // update (dt) {},
});
