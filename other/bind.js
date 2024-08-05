Function.prototype.bind = function (context, ...args) {
    const self = this;
    return function F() {
        return self.apply(context, [...args, ...arguments]);
    }
}

const obj = {
    a: 1,
    bar: function (a, b) {
        return this.a + a + b;
    }
}

const obj2 = {
    a: 2,
    bar: function () {
        return this.a;
    }
}

const Foo = function (a, b) {
    this.a = a;
    this.b = b;
};

const foo = new Foo(1, 2);

foo.bar = function (...args) {
    console.log('Foo.bar: ', ...args);
}

console.log('debug: ', obj.bar.bind(Foo, 5)(9));
