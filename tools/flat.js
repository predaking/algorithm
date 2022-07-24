/**
 * @description 自定义扁平化数组
 * @param {array} arr 
 */
const flatArray = arr => {
    return arr.reduce((res, cur) => {
        return res.concat(Array.isArray(cur) ? flatArray(cur) : cur)
    }, []);
}

console.log(flatArray([1, 2, [3, 4, [6], 8, [9, [10, 11, [12, 13, 14]]]]]))
