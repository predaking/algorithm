/**
 * 装饰者模式
 * 概念：在不改变对象自身的基础上，在运行期间动态地增加职责的方式
 * 1、可通过AOP实现
 */

/**
 * 装饰者模式（例：飞机升级）
 */
var plane = function () {};

plane.prototype.fire = function () {
    console.log("发射普通导弹");
}

var missilePlane = function (plane) {
    this.plane = plane;
}

missilePlane.prototype.fire = function () {
    this.plane.fire();
    console.log("发射导弹");
}

var atomPlane = function (plane) {
    this.plane = plane;
}

atomPlane.prototype.fire = function () {
    this.plane.fire();
    console.log("发射原子弹");
}

var plane = new plane();

plane = new missilePlane(plane);

plane = new atomPlane(plane);

plane.fire();

/**
 * 装饰者模式-AOP实现（例：登录操作统计上报）
 */
Function.prototype.after = function (afterFn) {
    var self = this;
    return function () {
        var ret = self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
}

var showLogin = function () {
    console.log("打开登录弹窗");
}

var log = function () {
    console.log("操作后进行统计上报: " + this.getAttribute('tag'));
}

var btn = document.getElementById('button');

btn.onclick = showLogin.after(log);
