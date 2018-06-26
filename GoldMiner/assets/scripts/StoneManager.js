
cc.Class({
    extends: cc.Component,

    properties: {
        //stonePrefab: [cc.Prefab],
        stonePrefab: cc.Prefab,
    },

   

    onLoad () {
        // for(let i = 0; i< 10; i++){
        // let index = Math.floor(4*Math.random());
        // let prefab = this.stonePrefab[index];
        let prefab = this.stonePrefab;
        let stone = cc.instantiate(prefab);
        //     //位置-450 < x < 450, -300 < y < 50
        stone.parent = this.node;
        //stone.x = -450 + Math.random() * 900;
        //stone.y = -300 + Math.random() * 350;
            
        // }
    },

    start () {

    },

    // update (dt) {},
});
