/**
 * @description 自定义扁平化数组(reduce)
 * @param {array} arr 
 */
var flatArray = function (arr) {
    return arr.reduce((res, cur) => {
        return res.concat(Array.isArray(cur) ? flatArray(cur) : cur)
    }, []);
}

/**
 * @description 自定义扁平化数组(some + while)
 * @param {array} arr 
 */
var flatArray = function (arr) {
    while (arr.some(value => Array.isArray(value))) {
        arr = [].concat(...arr);
    }
    return arr;
}

var flatArray = function (depth = 1) {
    let arr = Array.prototype.slice.call(this);
    if (depth === 0) {
        return arr;
    }
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return [...pre, ...flatArray.call(cur, depth - 1)];
        } else {
            return [...pre, cur];
        }
    }, []);
}

const flatObj = (obj) => {
    if (!obj) {
        return obj;
    }

    for (let [k, v] of Object.entries(obj)) {
        
    }
}

Array.prototype.flatArray = flatArray;

Object.prototype.flatObj = flatObj;

const arr = [1, 2, [3, 4, [6], 8, [9, [10, 11, [12, 13, 14]]]]];

console.log(arr.flatArray(Infinity));




