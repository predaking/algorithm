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

console.log(flatArray([1, 2, [3, 4, [6], 8, [9, [10, 11, [12, 13, 14]]]]]))
