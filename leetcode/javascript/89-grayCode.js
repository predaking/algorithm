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
 * @return {number[]}
 */
var grayCode = function(n) {
    const arr = Array(2 * n).fill(0);

    for (let i = 0; i < n; ++i) {
        arr[i] = (Math.pow(2, i) - 1);
        arr[n + i] = (Math.pow(2, n) - Math.pow(2, i));
    }

    return arr;
};

console.log(grayCode(3));

// [0,1,3,2,6,7,5,4]

/**
 * 测试用例：
 * console.log(grayCode(2));
 */

/**
 * 本题核心：记忆化搜索、动态规划
 * 
 * 反思：状态转移方程很难想出，如果本题限制没有重复字符就好办了。
 */

