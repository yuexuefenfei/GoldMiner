cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {

    },

    onBtnStart(){
        cc.director.loadScene('Game');
    }

    // update (dt) {},
});
