/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或
 * 者 x ** 0.5 。 
 */

/**
 * @description x 的平方根 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1) {
        return 1;
    }

    let start = 0;
    let end = x;
    let mid = Math.floor((start + end) / 2);
    
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (mid * mid < x) {
            start = (mid === start ? mid + 1 : mid);
        } else if (mid * mid > x) {
            end = (mid === end ? mid - 1 : mid);
        } else {
            break;
        }
    }

    return mid;
};

/**
 * 测试用例：
 * console.log(mySqrt(1));
 */

/**
 * 本题核心：二分查找、数学计算
 *
 * 反思：常规思路二分查找，需要注意边界处理防止死循环；另外官方还有通过对数换底
 * 的思路直接计算结果；还有牛顿迭代法（原理较难，参考官方题解）
 */