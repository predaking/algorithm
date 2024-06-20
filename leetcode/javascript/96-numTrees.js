/**
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 
 * 有多少种？返回满足题意的二叉搜索树的种数。
 */

/**
 * @description 不同的二叉搜索树
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const res = Array(n + 1).fill(0);

    res[0] = 1;
    res[1] = 1;

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            res[i] += res[j - 1] * res[i - j];
        }
    }

    return res[n];
};

/**
 * 测试用例：
 * console.log(numTrees(3)); // 5
 */

/**
 * 本题核心： 动态规划
 * 
 * 反思：n个节点的搜索树个数可分为分别以每个节点为根节点的左子树个数 * 右子树个数的
 * 笛卡尔积的累加和。即：f(i, n) = f(i - 1, n) * f(n - i, n)。该序列也是著名
 * 的卡特兰数。可以通过C(n) = 2 * (2n + 1) / (n + 2) * C(n - 1)的递推公式快
 * 速求解。
 */