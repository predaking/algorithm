/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

/**
 * @description 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    var plus = false;

    for (let i = len - 1; i >= 0; --i) {
        if (i === len - 1 || plus) {
            if (digits[i] + 1 > 9) {
                digits[i] = 0;
                plus = true;
                if (i === 0) {
                    digits.unshift(1);
                }
            } else {
                digits[i] += 1;
                plus = false;
            }
        }
    }

    return digits;
};

/**
 * 测试用例：
 * console.log(plusOne([9, 9, 9, 9]));
 */

/**
 * 本题核心：数学进位
 *
 * 反思：只有在低位或者需要进位的时候才需要进位判断
 */