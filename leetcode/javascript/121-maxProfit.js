/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一
 * 个算法来计算你所能获取的最大利润。返回你可以从这笔交易中获取的最大利润。如果你不能获
 * 取任何利润，返回 0 。
 */

/**
 * @description 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    if (!len) {
        return 0;
    }

    let max = 0;
    const stack = [];

    for (let i = 0; i < len; ++i) {
        if (!stack.length) {
            stack.push(prices[i]);
            continue;
        }

        if (prices[i] < stack[0]) {
            max = Math.max(max, stack[stack.length - 1] - stack[0]);
            stack.length = 0;
        } else {
            max = Math.max(max, prices[i] - stack[0])
        }

        stack.push(prices[i]);
    }
    
    return max;
};

/**
 * 测试用例：
 * console.log(maxProfit([5, 7, 2, 6, 1, 3, 4]));
 */

/**
 * 本题核心：单调栈
 *
 * 反思：注意单调栈类问题的特性，首先要能想到用单调栈解决问题，其次利用好单调栈的技巧
 */


