let stoneDts = {
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
            id:1001,
            name:'垃圾1',
            score:0,
            pullSpeed:100,
        },
        {
            id:1002,
            name:'垃圾2',
            score:0,
            pullSpeed:50
        },
        {
            id:1003,
            name:'gold1',
            score:50,
            pullSpeed:100
        },
        {
            id:1004,
            name:"gold2",
            score:100,
            pullSpeed:50
        },
        {
            id:1005,
            name:'diamand',
            score:150,
            pullSpeed:150
        }
    ],
}

module.exports = stoneDts;