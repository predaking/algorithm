const calc = (data, attr) => {
    return attr.split('.').reduce((pre, cur) => {
        const tmp = pre?.[cur];
        return tmp;
    }, data);
};

const data = {
    a: {
        b: {
            c: {
                d: 1
            }
        }
    },
    e: {
        f: {
            g: null
        }
    }
};

console.log(calc(data, 'a.b.c.gg'));