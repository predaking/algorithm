/**
 * js 中的六种继承
 * 一、原型链继承
 * 二、借用构造函数继承
 * 三、组合式继承
 * 四、原型式继承
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
 */
function Child1 (name) {
	this.name = name;
}

// 注意： 以下两行顺序不同造成的结果不同，child1的构造函数不同
const child1 = new Child1('child');

Child1.prototype = new Parent('parent1', 50);

/**
 * 二、借用构造函数继承
 * @description 通过在子类构造函数中调用父类构造函数
 * 优点： 可以传参到父类构造函数
 * 缺点： 实例继承不了父类的原型属性，也不属于父类的实例
 * @param {string} name
 */
function Child2 (name) {
	Parent.call(this, 'parent2', 60);
	this.name = name;
}

const child2 = new Child2('child2');

/**
 * 三、组合式继承
 * @description 结合原型链继承与借用构造函数继承
 * 优点： 可以传参到父类构造参数，可以继承父类的原型属性
 * 缺点： 调用了两次父类构造函数
 * @param {string} name
 */
function Child3 (name) {
	Parent.call(this, 'parent3', 70);
	this.name = name;
}

Child3.prototype = new Parent();

const child3 = new Child3('child3');

/**
 * 四、原型式继承
 * @description 函数中包含对象，返回函数的调用，属性随意添加
 * 优点： 复制一个对象，用函数包装
 * 缺点： 无法复用，新实例属性都是后面加的
 * @param {string} name
 */
function Child4 (obj) {
	function Fn() {}
	Fn.prototype = obj;
	return new Fn();
}

const child4 = Child4(new Parent('parent4', 90));

child4.name = 'child4';

/**
 * 五、寄生式继承
 * @description 通过函数添加属性
 * 优点： 把添加属性的操作放到函数中，返回值为新对象
 * 缺点： 无法复用
 * @param {object} obj
 */
function Child5 (obj) {
	function Fn() {}
	Fn.prototype = obj;
	return new Fn();
}

function subChild (obj) {
	const subObj = Child5(obj);
	subObj.name = 'sub';
	return subObj;
}

const child5 = subChild(new Parent('parent5', 100));

/**
 * 六、寄生组合式继承
 * @description 最常用
 * @param {object} obj
 */
function Child6 (obj) {
	function Fn() {}
	Fn.prototype = obj;
	return new Fn();
}

const child6 = Child6(Parent.prototype);

function Sub () {
	Parent.call(this, 'Parent6', 110);
}

// 顺序同上，也有构造函数不一致问题，需要手动修复
Sub.prototype = child6;

const sub = new Sub();

child6.constructor = Sub;

console.log(sub.constructor);
