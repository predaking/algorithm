/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是
 * 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两
 * 个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以
 * 移动到下一行的下标 i 或 i + 1 。
 */

/**
 * @description 三角形最小路径和
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length;
    let sum = Infinity;

    const dp = Array(len).fill(0).map(() => Array(len).fill(0));

    for (let i = 0; i < len; ++i) {
        for (let j = 0; j <= i; ++j) {
            if (i === 0) {
                dp[i][j] = triangle[i][j];
                continue;
            }
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j];
                continue;
            }
            if (i === j) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
                continue;
            }
            dp[i][j] = (Math.min(dp[i - 1][j - 1], dp[i - 1][j])) + triangle[i][j];
        }
    }

    for (let i = 0; i < dp[len - 1].length; ++i) {
        sum = Math.min(sum, dp[len - 1][i]);
    }

    return sum;
};

/**
 * 测试用例：
 * console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
 *    2
 *   3 4
 *  6 5 7
 * 4 1 8 3
 * 
 *    0
 *   1 2
 *  3 4 5
 * 6 7 8 9
 */

/**
 * 本题核心：动态规划、回溯
 *
 * 反思：动态规划需考虑到i === j的情况及边界情况；回溯虽然也能解决该问题，
 * 但是极端情况下如面对全0三角形时，时间复杂度呈指数级增长，很容易超时
 */