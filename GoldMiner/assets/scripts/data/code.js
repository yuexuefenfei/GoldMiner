let code ={};

code.StateValue = cc.Enum({
    Node: -1,//
    Idle: -1,//绳子旋转
    Drop: -1,//放绳子
    Back: -1,//收回绳子
    Catch: -1,//夹东西
});

module.exports = code;

