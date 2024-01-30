/**
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然
 * 有序且不重叠（如果有必要的话，可以合并区间）。
 */

/**
 * @description 插入区间
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const stack = [];
    while (true) {
        if (!intervals.length) {
            return stack.concat([newInterval]);
        }
        if (newInterval[1] < intervals[0][0]) {
            intervals.unshift(newInterval);
            return stack.concat(intervals);
        }

        if (newInterval[0] > intervals[0][1]) {
            stack.push(intervals.shift());
            continue;
        }

        const tmp = [Math.min(newInterval[0], intervals[0][0]), Math.max(newInterval[1], intervals[0][1])];
        newInterval = tmp;
        intervals.shift();
    }
};

/**
 * 测试用例：
 * console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
 */

/**
 * 本题核心： 队列 + 栈思想
 *
 * 反思：遇到问题首先将思路往常规的数据结构上靠拢，这样往往能更巧妙的破解答案
 */