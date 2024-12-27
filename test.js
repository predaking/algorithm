/** new */
const Foo = function (value) {
    this.value = value;
}

const _new = function (fn, ...args) {
    const obj = Object.create(fn.prototype);
    const result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
}

// console.log('foo.value: ', _new(Foo, 123));

/** apply */
Function.prototype._apply = function (context, args) {
    context = context || globalThis;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

const foo1 = function (value) {
    return this.a + value;
}

const obj = {
    a: 1,
}

// console.log(foo1._apply(obj, [1]), foo1(1));

/** bind */
Function.prototype._bind = function () {
    const args = Array.prototype.slice.call(arguments, 1);
    const context = arguments[0];
    const self = this;

    const F = function () {
        const _args = Array.prototype.slice.apply(arguments);
        return self.apply(this instanceof F ? this : context, [...args, ..._args]);
    }

    F.prototype = Object.create(self.prototype);

    return F;
}

const Foo1 = Foo._bind(obj);
// console.log(new Foo1(2));

const _isInstanceOf = (instance, Fn) => {
    if (typeof instance !== 'object' || instance === null) {
        return false;
    }

    while (true) {
        const _proto = Object.getPrototypeOf(instance);
        if (_proto === Fn.prototype) {
            return true;
        }
        if (!_proto) {
            return false;
        }
        instance = _proto;
    }
}

const foo = new Foo(1);

// console.log(_isInstanceOf(null, Object));

/** deepClone */
const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const res = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key]);
        }
    }

    return res;
}

const obj1 = {
    a: 2,
    b: [3, function(){}, new Date(), {
        value: 'bb',
        syl: Symbol('1')
    }],
    c: {
        d: /\d+/,
        e: undefined,
        f: 'fff',
        g: null
    }
};

// console.log(deepClone(obj1));

/** flatten */
const flatten = (arr, level = 1) => {
    if (level === 0) {
        return arr;
    }

    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            return prev.concat(flatten(cur, level - 1));
        }
        return prev.concat(cur);
    }, []);
};

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// console.log(flatten(arr, Infinity));

/** curry */
const curryAdd = function () {
    const args1 = Array.from(arguments);

    let args = [...args1];

    const add = function () {
        const args2 = Array.from(arguments);
        if (args2.length) {
            args.push(...args2);
            return add;
        }
        return _add(args);
    }

    const _add = function () {
        return args.reduce((prev, cur) => prev + cur, 0);
    }

    return add;
}

// console.log(curryAdd(4, 3)(2)());

const quickSort = (arr) => {
    const len = arr.length;
    if (!len) {
        return arr;
    }

    const pivot = arr[0];
    let low = 0;
    let high = len - 1;

    const patition = (pivot, low, high) => {
        while (arr[high] > pivot) {
            high--;
        }

        [arr[low], arr[high]] = [arr[high], arr[low]];

        while (arr[low] < pivot) {
            low++;
        }

        []
    }
}





