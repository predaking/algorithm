/**
 * 状态模式
 * 概念：允许一个对象在其内部状态发生改变时改变它的行为
 * 1、状态类单独封装
 * 2、可结合模板方法模式定义抽象父类中的抽象方法
 * 3、可通过分析具体的状态转换频繁程度灵活的选择创建状态类的方式
 * 4、可结合享元模式共享状态对象
 * 5、可直接用字面量对象实现状态机（FSM-有限状态机）
 */

/**
 * 状态模式（例：开关灯）
 */
var State = function () {};

State.prototype.buttonWasPressed = function () {
    throw new Error("父类buttonWasPressed方法必须被重写");
}

var WeakLightState = function (light) {
    this.light = light;
}

WeakLightState.prototype = new State();

WeakLightState.prototype.buttonWasPressed = function () {
    console.log("切强光");
    this.light.setState(this.light.strongLightState);
};

var StrongLightState = function (light) {
    this.light = light;
}

StrongLightState.prototype = new State();

StrongLightState.prototype.buttonWasPressed = function () {
    console.log("关灯");
    this.light.setState(this.light.offLightState);
};

var OffLightState = function (light) {
    this.light = light;
}

OffLightState.prototype = new State();

OffLightState.prototype.buttonWasPressed = function () {
    console.log("切弱光");
    this.light.setState(this.light.weakLightState);
};

var Light = function () {
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.offLightState = new OffLightState(this);
    this.btn = null;
};

Light.prototype.init = function () {
    var self = this;
    this.currentState = this.offLightState;
    this.btn = document.createElement('button');
    this.btn.innerHTML = this.name;
    document.body.appendChild(this.btn);
    this.btn.onclick = function () {
        self.currentState.buttonWasPressed();
    };
};

Light.prototype.setState = function (newState) {
    this.currentState = newState;
}

var light = new Light();

light.init();