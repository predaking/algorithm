/**
 * 模板方法模式
 * 概念：在抽象父类中封装子类的算法框架，包括实现一些方法或封装子类的所有方法的执行顺序
 * 1、子类实现中相同的部分放到父类，不同的部分由子类自己实现
 * 2、特殊子类算法可通过钩子函数改变模板方法的逻辑顺序
 * 3、通过在父类方法中抛出错误的形式强制子类重写方法
 */

/**
 * 模板方法模式（例：冲咖啡或茶）
 */
var Beverage = function () {};

Beverage.prototype.boilWater = function () {
    console.log('保水煮沸');
}

Beverage.prototype.brew = function () {
    throw new Error('子类必须重写brew方法');
}

Beverage.prototype.pourInCup = function () {
    throw new Error('子类必须重写pourInCup方法');
}

Beverage.prototype.addCondiments = function () {
    throw new Error('子类必须重写addCondiments方法');
}

Beverage.prototype.customerWantsCondiments = function () {
    return true;
}

Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
        this.addCondiments();
    }
}

var CoffeeHook = function () {};

CoffeeHook.prototype = new Beverage();

CoffeeHook.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
}

CoffeeHook.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子');
}

CoffeeHook.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
}

CoffeeHook.prototype.customerWantsCondiments = function () {
    return window.confirm('请问需要调料吗？');
}

var coffeeHook = new CoffeeHook();
coffeeHook.init();
