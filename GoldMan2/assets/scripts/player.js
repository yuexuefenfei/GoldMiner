let clawJs = cc.Class({
    extends: cc.Component,

    properties: {
        angleSpeed:0,
        maxAngle:0,
        ropeSpeed:0,
        catchSpeed:0,
        ropeN:cc.Node,
        clawN:cc.Node,
        //左边夹子
        clawL:cc.Node,
        //右边夹子
        clawR:cc.Node,
        clawMgr:cc.Node,
        clawStone:cc.Sprite
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //创建动画步骤
        // 1、添加动画组件(用于播放动画文件)
        // 2、创建并编辑动画文件

        //通过脚本控制动画播放
        //脚本组件
        //通过节点取脚本组件node.getComponent();
        this.animCom = this.node.getComponent(cc.Animation);
        //this.animCom.play('dig');
        this.state = cc.dm.code.StateValue.State_None;
        this.changeState(cc.dm.code.StateValue.Idle);
    },

    start () {

    },
    //改变state值，切换状态
    changeState(state){
        if (this.state === state) {
            return;
        }
        this.state = state;
        let STATE = cc.dm.code.StateValue;
        if (STATE.Idle === this.state) {
            this.animCom.play('appear');
            this.clawL.rotation = 0;
            this.clawR.rotation = 0;
            this.clawStone.spriteFrame = null;
        }
        else if(STATE.Drop === this.state){
            this.animCom.play('dig');
        }
        else if (STATE.Back === this.state) {
            this.ropeSpeed = -this.ropeSpeed
        }
        else if (STATE.Catch === this.state) {
            //cc.RotateTo(持续时间, 旋转到多少度);

            // cc.moveTo()
            // cc.moveBy()
            // cc.rotateTo
            // cc.rotateBy
            //序列动作
            //cc.sequence(action1,action2,...);
            //cc.callFun();

            let leftAction = cc.rotateTo(0.2, -15);
            let rightAction = cc.rotateTo(0.2, 15);

            let callFun = cc.callFunc(function(){
                this.changeState(STATE.Back);
            }.bind(this));

            let seqAction = cc.sequence(leftAction, callFun);
            this.clawL.runAction(seqAction);
            this.clawR.runAction(rightAction);
        }
    },

    update (dt) {
        let STATE = cc.dm.code.StateValue;
        if (STATE.Idle ===  this.state) {
            //旋转
            this.clawMgr.rotation += this.angleSpeed*dt;
            if (this.clawMgr.rotation >= this.maxAngle) {
                this.angleSpeed = -this.angleSpeed;
            }
            if (this.clawMgr.rotation <= -this.maxAngle) {
                this.angleSpeed = -this.angleSpeed;
            }
        }
        else if (STATE.Drop === this.state) {
            //放勾
            let deltaS = this.ropeSpeed*dt;
            this.ropeN.height += deltaS;          
            this.clawN.y -= deltaS;
        }
        else if (STATE.Back === this.state) {
            let deltaS = this.ropeSpeed*dt;
            this.ropeN.height += deltaS;          
            this.clawN.y -= deltaS;
            if (this.ropeN.height <= 50) {
                this.ropeN.height = 50;
                this.ropeSpeed = -this.ropeSpeed;
                this.changeState(cc.dm.code.StateValue.Idle);
            }
        }
        // else if (STATE.Catch === this.state) {
        //     //夹矿石
        //     this.clawL.rotation -= this.catchSpeed * dt;
        //     this.clawR.rotation += this.catchSpeed * dt;
        //     if ((this.clawL.rotation <= -15) 
        //         || (this.clawR.rotation >= 15)) {
        //         this.changeState(STATE.Back);
        //     }
        // }
    },
});

module.exports = clawJs;