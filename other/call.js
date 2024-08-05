/**
 * @description 自定义实现call方法（若禁用es6方法，则可以通过eval处理参数调用）
 */
Function.prototype.call = function (context = window, ...args) {
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

var obj = {
    a: 3,
}

var a = 5;

function add (a, b) {
    return a + b + this.a;
}

console.log(add.call(obj, 1, 2));