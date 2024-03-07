/**
 * @description 爬楼梯
 * @param {number} n
 */
var climbStairs = function(n) {
    var p = 0;
    var q = 0;
    var r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

/**
 * 测试用例：
 * console.log(climbStairs(4));
 */

/**
 * 本题核心：动态规划
 *
 * 反思：f(n) = f(n - 1) + f(n - 2)，可简单利用变量存储方案数
 * 其他官方解法有：快速n次幂、通项公式法等
 */