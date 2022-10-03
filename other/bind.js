/**
 * @description 自定义实现bind
 */
Function.prototype.bind = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var Fn = function () {};

    var resultFn = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof Fn ? this : context, args.concat(bindArgs));
    }

    Fn.prototype = this.prototype;
    resultFn.prototype = new Fn();
    return resultFn;
}

var value = 2;

var foo = {
    value: 1,
    bar: bar.bind(null)
};

function bar() {
    console.log(this.value);
}

foo.bar() // 2

