const deepClone = obj => {
    if (typeof obj !== 'object') {
        return obj;
    }

    const res = Array.isArray(obj) ? [] : {};

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                if (obj[key] === null) {
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

const obj = {
    a: {
        c: /a/,
        d: undefined,
        b: null
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
    d: [1, 3]
}

// obj.__proto__ = Object;

console.log(deepClone(obj));
