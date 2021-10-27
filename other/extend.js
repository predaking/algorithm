/**
 * js 中的六种继承
 * 一、原型链继承
 * 二、借用构造函数继承
 */

function Parent (name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function () {
		return this.name;
	}
}

Parent.prototype.getParentAge = function () {
	return this.age;
}

/**
 * 一、原型链继承
 * @description 让新实例的原型等于父类的实例
 * 缺点： 实例之间会共享属性，修改了父类属性会影响其他实例
 * @param {string} name
 * @constructor Child1()
 */
function Child1 (name) {
	this.name = name;
}

Child1.prototype = new Parent('parent1', 50);

const child = new Child1('child');

/**
 * 二、借用构造函数继承
 * @description 通过在子类构造函数中调用父类构造函数
 * 优点： 可以传参到父类构造函数
 * 缺点： 实例继承不了父类的原型属性，也不属于父类的实例
 * @param {string} name
 * @constructor Child2()
 */
function Child2 (name) {
	Parent.call(this, 'parent2', 60);
	this.name = name;
}

const child2 = new Child2('child2');

console.log(child2);
