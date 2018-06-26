
let STATE = require('code');

let ClawJs = cc.Class({
    extends: cc.Component,

    properties: {    
        AngleSpeed: 0,//绳子旋转角度
        MaxAngle : 0,//最大旋转角度
  
        //changeSpeed: 0,//原始绳子伸缩速度
        ropeSpeed:0,//绳子伸缩速度
        MinHeigt: 0,//绳子最小长度

        clawR: cc.Node,//右钩子
        clawL: cc.Node,//左钩子
        clawSpeed: 0,//抓取速度

        rope: cc.Node,//绳子
        claw: cc.Node,//钩子        
        touch: cc.Button,//点击按钮
        clawNode: cc.Node,//
        clowStone:cc.Sprite,//抓住的图片
    },

    //旋转
    rotation:function(dt){
        this.clawNode.rotation += this.AngleSpeed * dt;
        if(Math.abs(this.clawNode.rotation) > this.MaxAngle){
            this.AngleSpeed *= -1;
        }
    },

    //收缩动作
    elongate: function(dt){
        //绳子每次伸长的度量
        let delts = this.ropeSpeed * dt;
        //绳子伸长
        this.rope.height += delts;
        //钩子移动
        this.claw.y -= delts;

        //碰撞反向
        //缩回到一定值停止
        if(this.rope.height < this.MinHeigt){
           // getComponent(cc.Sprite)
           console.log(this.ropeSpeed);
            this.clowStone.getComponent(cc.Sprite).spriteFrame = null;
            //反向
            this.ropeSpeed = -this.ropeSpeed;
            console.log('改变后收缩速度'+this.ropeSpeed);
            //钩子抓取状态恢复
            this.clawL.rotation = 0;
            this.clawR.rotation = 0;
            //状态转换
            this.changeState(STATE.StateValue.Idle);
        }
    },

    //抓取动作
    catch: function(){
        // this.clawL.rotation += this.clawSpeed*dt;
        // this.clawR.rotation -= this.clawSpeed*dt;
        // if(this.clawL.rotation > 15 || this.clawR.rotation < -15){
        //     this.changeState(STATE.StateValue.Back);
        //     console.log('碰到东西，我抓取了');
        // }
        //cc.RotateTo(持续时间, 旋转到多少度);

        let actionL = cc.rotateTo(0.2, -30);
        let actionR = cc.rotateTo(0.2, 30);

        let callFun = cc.callFunc(function(){
            this.changeState(STATE.StateValue.Back);
        }.bind(this));

        let seqAction = cc.sequence(actionL, callFun);
        this.clawL.runAction(seqAction);
        this.clawR.runAction(actionR);
        console.log('碰到东西，我抓取了');
    },

    changeState: function(state){
        if(this.state === state){
            return;
        }
        this.state = state;
        if(STATE.StateValue.Drop === this.state){
            //this.ropeSpeed *= -1;
        }
        else if(STATE.StateValue.Back === this.state){
            this.ropeSpeed *= -1;
        }
        else if(STATE.StateValue.Catch === this.state){
            this.catch();
        }

    },

    onLoad () {
        
        this.state = STATE.StateValue.None;
        this.changeState(STATE.StateValue.Idle);
        
        //鼠标点击事件 
        this.touch.node.on(cc.Node.EventType.MOUSE_DOWN, function(event){
            //this.onTouch();
            this.changeState(STATE.StateValue.Drop);
            console.log("按钮按下,//放绳子");
        },this);
    },

    update (dt) {
        if(STATE.StateValue.Idle === this.state){
            this.rotation(dt);
        }
        else if(STATE.StateValue.Drop === this.state){
            this.elongate(dt);
        }
        else if(STATE.StateValue.Back === this.state){
            this.elongate(dt);
        }
    },
});

module.exports = ClawJs;
