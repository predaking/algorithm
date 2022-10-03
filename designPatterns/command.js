/**
 * 命令模式
 * 概念：向某些对象发送请求时，请求发送者不清楚谁是接收者，以及不清楚被请求者执行的操作是什么，
 * 该模式正是为了消除二者的耦合关系而来
 * 1、可实现撤销功能（新增属性用于存放上一条命令）
 * 2、可实现回放功能（新增队列用于存放已执行的命令，回放时依次执行队列里记录的命令）
 * 3、结合发布订阅模式实现排队等待功能
 * 4、宏命令（批量执行命令）
 */

/**
 * 命令模式（例：设置菜单）
 */
var setCommand = function (btn, command) {
    btn.onclick = function () {
        command.execute();
    }
};

var MenuBar = {
    refresh: function () {
        console.log('refresh');
    }
}

var SubMenu = {
    add: function () {
        console.log('add');
    },
    del: function () {
        console.log('del');
    }
}

var RefreshCommand = function (receiver) {
    this.receiver = receiver;
}

RefreshCommand.prototype.execute = function () {
    this.receiver.refresh();
}

var AddCommand = function (receiver) {
    this.receiver = receiver;
}

AddCommand.prototype.execute = function () {
    this.receiver.add();
}

var refreshCommand = new RefreshCommand(MenuBar);
var addCommand = new AddCommand(SubMenu);

setCommand(btn1, refreshCommand);
setCommand(btn2, addCommand);
