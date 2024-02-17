/**
 * 一个机器人位于一个 m x n 网格的左上角 
 * （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。
 * 机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */

/**
 * @description 不同路径
 * @param {number} m
 * @param {number} n
 */
var uniquePaths = function(m, n) {
    var dp = Array(m).fill(1).map(() => Array(n).fill(1));

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

/**
 * 测试用例：
 * console.log(uniquePaths(3, 7));
 */

/**
 * 本题核心：动态规划、排列组合
 *
 * 反思：因到达目的地只有向右或者向左，因此结果就是这两种方案的和，
 * 以此类推不难推出公式，这便是动态规划。然而顺着该思路最容易想到
 * 的是递归的方式，尝试之后发现会超时，因为过程中会产生大量的重复
 * 计算。因此只能利用空间换时间，通过建立二维数组存储到达每个节点
 * 的方案数。当然可以利用一维数组进一步优化空间。最后一种是排列组
 * 合数学法。
 */

/**
 * @description 递归法
 * @param {number} m
 * @param {number} n
 */
var uniquePaths = function (m, n) {
    if (m === 1 || n === 1) {
        return 1;
    }

    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}

/**
 * m >= 1, n <= 100
 * f(m, n) = f(m - 1, n) + f(m, n - 1)
 * 
 * f(m - 1, n) = f(m - 2, n) + f(m - 1, n - 1)
 * 
 * m = 1, n >= 1
 * f(m, n) = 1
 * 
 * m >= 1, n = 1
 * f(m, n) = 1
 * 
 * f(0, 0) = 1
 * f(1, n) = 1
 * f(m, 1) = 1
 * 
 * f(2, 2) = f(1, 2) + f(2, 1) = 2
 * f(3, 2) = f(2, 2) + f(3, 1) = 2 + 1 = 3
 * f(2, 3) = f(1, 3) + f(2, 2) = 1 + 2 = 3
 * f(3, 3) = f(2, 3) + f(3, 2) = 6
 * f(4, 3) = f(3, 3) + f(4, 2) = 6 + f(3, 2) + f(4, 1) = 6 + 3 + 1 = 10
 */