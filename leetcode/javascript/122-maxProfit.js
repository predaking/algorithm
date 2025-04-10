/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 
 * 一股 股票。你也可以先购买，然后在 同一天 出售。返回 你能获得的 最大 利润 。
 */

/**
 * @description 买卖股票的最佳时机 II
 * @param {number[]} prices
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

        if (prices[i] < stack[stack.length - 1]) {
            max += stack[stack.length - 1] - stack[0];
            stack.length = 0;
        }

        stack.push(prices[i]);
    }

    if (stack.length) {
        max += stack[stack.length - 1] - stack[0];
    }
    
    return max;
};

/**
 * 测试用例：
 * console.log(maxProfit([7, 1, 5, 3, 6, 4]));
 */

/**
 * 本题核心：单调栈
 *
 * 反思：基于上一题，每逢开始下降就计算一次利润，并清空栈，将下降点作为栈底推入
 */


