/**
 * @description 实现嵌套对象属性的访问
 * @param {*} data 
 * @param {*} attr 
 * @returns 
 */
const parseNestedData = (data, attr) => {
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

console.log(parseNestedData(data, 'a.b.c.gg'));