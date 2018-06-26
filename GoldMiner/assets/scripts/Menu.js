
let menu = cc.Class({
    extends: cc.Component,

    properties: {
        input: cc.EditBox,
        bebinBtn: cc.Button,
        leve:0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.leve = parseInt(this.input.string);
        //鼠标点击事件 
        this.bebinBtn.node.on(cc.Node.EventType.MOUSE_DOWN, function(event){
            cc.director.loadScene('game');
            console.log("开始游戏");
        },this);
    },

    start () {

    },

    // update (dt) {},
});

module.exports = menu;