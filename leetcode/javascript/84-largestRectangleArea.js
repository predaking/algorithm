/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。
 * 每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */

/**
 * @description 柱状图中最大的矩形
 * @param {number[]} heights
 */
var largestRectangleArea = function (heights) {
    const len = heights.length;
    let max = 0;
    const stack = [];

    for (let i= 0; i < len; ++i) {
        let height = heights[i];
        if (!stack.length || heights[stack.at(-1)] <= height) {
            stack.push(i);
            continue;
        } else {
            while (heights[stack.at(-1)] > height) {
                const cur = stack.pop();
                const pre = stack.length ? stack.at(-1) : -1;
                max = Math.max(max, heights[cur] * (i - pre - 1));
            }
            stack.push(i);
        }
    }

    while (stack.length) {
        const curIndex = stack.pop();
        const pre = stack.length ? stack.at(-1) : -1;
        max = Math.max(max, heights[curIndex] * (len - pre - 1));
    }

    return max;
};


/**
 * 测试用例：
 * console.log(largestRectangleArea([1, 2, 4, 3, 5]));
 */

/**
 * 本题核心：单调栈
 * 
 * 反思：默认能直接想到的方法是针对每个元素同时向两边查找边界，并与现有面积
 * 比较哪个大并且覆盖，然而因O(n^2)的时间复杂度，所以容易超时。官方解法为
 * 单调栈，通过维护一个单调递增栈，当遇到比栈顶元素小的元素时，弹出栈顶元素
 * 并计算面积，直到栈顶元素小于当前元素，将当前元素入栈。这样可以保证栈内元素
 * 递增，且栈内元素的左右边界都是栈内元素。需要注意的是在遍历结束后，将栈内元素
 * 依次弹出并计算面积，这部分不容易理解。第一次接触单调栈一般不容易想到通过这种
 * 方式解决。
 */