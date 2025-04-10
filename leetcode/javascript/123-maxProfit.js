/**
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * @description 买卖股票的最佳时机 III
 * @param {number[]} prices
 */
var maxProfit = function(prices) {
    const len = prices.length;
    if (!len) {
        return 0;
    }

    let min = Infinity;
    let max = 0;
    let left = [];
    let right = [];

    for (let l = 0; l < len; ++l) {
        let r = len - l - 1;
        min = Math.min(min, prices[l]);
        max = Math.max(max, prices[r]);
        left[l] = prices[l] - min;
        right[r] = max - prices[r];
    }

    max = 0;
    let sum = 0;

    for (let i = 0; i < len; ++i) {
        max = Math.max(left[i], max);
        sum = Math.max(sum, max + right[i]);
    }

    return sum;
};

/**
 * 测试用例：
 * console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
 */

/**
 * 本题核心：双指针
 *
 * 反思：先算出每个节点左右的最大值，最后再累加比较选出最大的，很巧妙的思路
 */


