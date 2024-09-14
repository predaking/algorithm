/**
 * 深拷贝(考虑null，正则的情况)
 * @method deepClone
 * @param {object} obj
 * @param hash
 */
const deepClone = function (obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (hash.get(obj)) {
        return hash.get(obj);
    }

    const res = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key], hash);
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

