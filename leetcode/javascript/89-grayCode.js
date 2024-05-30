/**
 * n 位格雷码序列 是一个由 2n 个整数组成的序列，其中：
 * 每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）
 * 第一个整数是 0
 * 一个整数在序列中出现 不超过一次
 * 每对 相邻 整数的二进制表示 恰好一位不同 ，且
 * 第一个 和 最后一个 整数的二进制表示 恰好一位不同
 * 给你一个整数 n ，返回任一有效的 n 位格雷码序列 。
 */

/**
 * @description 格雷编码
 * @param {number} n
 */
var grayCode = function(n) {
    const arr = [0, 1];
    if (n === 1) {
        return arr;
    }

    const len = Math.pow(2, n);

    while (arr.length < len) {
        const maxLen = arr.length * 2;
        const _len = arr.length;
        for (let j = _len; j < maxLen; ++j) {
            arr.push((arr[2 * _len - 1 - j] + _len));
        }
    }

    return arr;
};

/**
 * 测试用例：
 * console.log(grayCode(2));
 */

/**
 * 本题核心：无
 * 
 * 反思：当成找规律题来做了。先看n为1/2/3的情况，找出相应的规律。
 * 官方解法为公式法，需要注意的是公式推导过程。
 */

/**
 * @description 官方解法
 * @param {number} n
 */
var grayCode = function(n) {
    const arr = [];
    for (let i = 0; i < Math.pow(2, n); ++i) {
        arr.push((i / 2) ^ i);
    }
    return arr;
}
