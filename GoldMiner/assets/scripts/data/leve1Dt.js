
let levelDt = {
    getDataById:function(id){
        for (let i = 0; i < this.datas.length; i++) {
            let data = this.datas[i];
            if (data.id === id) {
                return data;
            }
        }
        return null;
    },
    getSize:function(){
        return this.datas.length;
    },
    datas:[
        {
            id:2001,
            passScore: 200,
            time: 120,
            //bg:'level-background-0.png',
           // stoneMgr:''

        },
        {
            id:2002,
            passScore: 200,
            time: 120,
            //bg:'level-background-1.png',
            //stoneMgr:''
        },
    ],
}

module.exports = levelDt;
