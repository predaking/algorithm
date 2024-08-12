Function.prototype.bind = function (context, ...args) {
    let func = this;
    const F = function () {
        // 如果是构造函数调用，那就不能改变this，需和原有bind行为保持一致
        self = this instanceof F ? this : context;
        return func.apply(self, [...args, ...arguments]);
    };

    // 保证原型链正常
    F.prototype = func.prototype;

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



