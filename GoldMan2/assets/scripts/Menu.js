cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // window.dataMgr = {};
        // window.dataMgr.stoneDts = require('stoneDts');

        cc.dm = {};
        cc.dm.stoneDts = require('stoneDts');
        cc.dm.code = require('code');
    },

    start () {

    },

    onBtnStart(){
        cc.director.loadScene('Game');
    }

    // update (dt) {},
});
