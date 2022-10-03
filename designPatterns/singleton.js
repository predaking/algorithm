/**
 * 单例模式
 * 概念：特定条件下只维持一个实例
 * 1、防止重复创建不必要的对象占用资源
 * 2、防止重复创建带来不一致性的错误
 */

/**
 * 简单版
 */
var Singleton = function (name) {
    this.name = name;
    this.instance = null;
}

Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

var instance1 = Singleton.getInstance('Tom1');
var instance2 = Singleton.getInstance('Tom2');

console.log(instance1, instance2, instance1 === instance2);

/**
 * 通用惰性单例（例：弹窗modal）
 */
var customSingleton = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

var createDom = function () {
    // TODO: 创建必要的dom并返回
};

// TODO: 为触发点绑定点击事件并在事件内部调用createDom