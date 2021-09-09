/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod
 * 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及
 * truncate(-2.7335) = -2
 */

/**
 * @description 两数相除
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);

    if (divisor === 1) {
        if (dividend >= 0) {
            return Math.min(MAX, dividend);
        }
        return Math.max(MIN, dividend);
    }

    if (divisor === -1) {
        if (dividend >= 0) {
            return Math.max(MIN, -dividend);
        }
        return Math.min(MAX, -dividend);
    }

    let res = 0;
    let newDividend = Math.abs(dividend);
    let newDivisor = Math.abs(divisor);

    while (newDividend - newDivisor >= 0) {
        ++res;
        newDividend -= newDivisor;
    }

    return dividend * divisor >= 0 ? res : -res;
};

/**
 * 测试用例：
 * console.log(divide(8.345, -3));
 */

/**
 * 本题核心： 位运算
 *
 * 反思：位运算更快？
 */
