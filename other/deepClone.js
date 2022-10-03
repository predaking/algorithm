/**
 * 深拷贝(考虑null，正则的情况)
 * @method deepClone
 * @param {object} obj
 */
var deepClone = function (obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    const res = obj instanceof Array ? [] : {};

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                if (obj[key] === null || obj[key] instanceof RegExp) {
                    res[key] = obj[key];
                } else {
                    res[key] = deepClone(obj[key]);
                }
            } else {
                res[key] = obj[key];
            }
        }
    }

    return res;
}

function Foo() {
    this.name = 'foo';
    this.sayName = function () {
        return this.name;
    }
}

Foo.prototype.getName = function () {
    return this.name;
}

const foo = new Foo();

var obj = {
    a: {
        b: this,
        c: /a/,
        d: undefined,
        b: null,
        e: {}
    },
    b: function () {
        console.log(this.a)
    },
    c: [
        {
            a: 'c',
            b: /b/,
            c: undefined
        },
        'a',
        3
    ],
    d: [1, 3, {
        e: () => {
            console.log('e', this)
        }
    }],
    f: Symbol('f'),
    g: foo,
    h: this
}

// obj.__proto__ = Object;

console.log(deepClone(obj));

