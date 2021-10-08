/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也
 * 表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 */

/**
 * @description 字符串相乘
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    const len1 = num1.length;
    const len2 = num2.length;

    const arr = new Array(len1 + len2).fill(0);

    let carry = 0;

    for (let i = len1 - 1; i >= 0; --i) {

        for (let j = len2 - 1; j >= 0; --j) {
            let tmp = num1[i] * num2[j] + carry;
            carry = Math.floor(tmp / 10);
            arr[len2 - j - 1 + len1 - i - 1] += tmp % 10;
        }

        if (carry) {
            arr[len2 + len1 - i - 1] += carry;
        }

        carry = 0;
    }

    for (let i = 0; i < arr.length; ++i) {
        arr[i] += carry;
        carry = Math.floor(arr[i] / 10);
        arr[i] = arr[i] % 10;
    }

    return arr.reverse().join('').replace(/^0*/, '');
};

/**
 * 测试用例：
 * console.log(multiply("456", "123"));
 */

/**
 * 本题核心： 大数处理
 *
 * 反思：对于大数处理，大多数语言直接计算精度往往不准确，因此对于乘法需要转换思维，利用累加得到
 * 结果，其中每次累加的结果存到一个确认长度的数组中
 */
