window.StateValue = cc.Enum({
    None:-1,
    Idle:-1,
    Drop:-1,
    Back:-1,
});

let clawJs = cc.Class({
    extends: cc.Component,

    properties: {
        angleSpeed:0,
        maxAngle:0,
        ropeSpeed:0,
        clawN:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ropeN = this.node.getChildByName('rope');
        //this.isDrop = false;
        this.state = window.StateValue.None;
        this.changeState(window.StateValue.Idle);
    },

    start () {

    },
    //改变state值，切换状态
    changeState(state){
        if (this.state === state) {
            return;
        }
        this.state = state;
        if (window.StateValue.Back === this.state) {
            this.ropeSpeed = -this.ropeSpeed
        }
    },

    update (dt) {
        if (window.StateValue.Idle ===  this.state) {
            //旋转
            this.node.rotation += this.angleSpeed*dt;
            if (this.node.rotation >= this.maxAngle) {
                this.angleSpeed = -this.angleSpeed;
            }
            if (this.node.rotation <= -this.maxAngle) {
                this.angleSpeed = -this.angleSpeed;
            }
        }
        else if (window.StateValue.Drop === this.state) {
            //放勾
            let deltaS = this.ropeSpeed*dt;
            this.ropeN.height += deltaS;          
            this.clawN.y -= deltaS;
        }
        else if (window.StateValue.Back === this.state) {
            let deltaS = this.ropeSpeed*dt;
            this.ropeN.height += deltaS;          
            this.clawN.y -= deltaS;
        }
    },
});

module.exports = clawJs;