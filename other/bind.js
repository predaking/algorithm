Function.prototype.bind = function (context, ...args) {
    let func = this;
    const F = function () {
        // 如果是构造函数调用，那就不能改变this，需和原有bind行为保持一致
        self = this instanceof F ? this : context;
        return func.apply(self, [...args, ...arguments]);
    };

    // 保证通过new产生的实例能正确访问原型链上的属性与方法，同时还要保证修改其中任意一个不会影响到另一个
    F.prototype = Object.create(func.prototype);

    return F;
}

const Person = function (age, name) {
    this.age = age;
    this.name = name;
}

Person.prototype.intro = function () {
    console.log(`I'm ${this.name}, ${this.age} years old`);
}

const bindPerson = Person.bind(null, 12);
const person = new bindPerson('foo');

person.intro();





