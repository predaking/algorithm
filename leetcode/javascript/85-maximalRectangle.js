/**
 * 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，
 * 找出只包含 1 的最大矩形，并返回其面积。
 */

/**
 * @description 最大矩形
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var largestRectangleArea = function (heights) {
        const len = heights.length;
        let max = 0;
        const stack = [];
    
        for (let i = 0; i < len; ++i) {
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

    let max = 0;
    var arr = Array(matrix[0].length).fill(0);
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] === '0') {
                arr[j] = 0;
            } else {
                arr[j] += 1;
            }
        }
        max = Math.max(largestRectangleArea(arr), max);
    }

    return max;
};

/**
 * 测试用例：
 * console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
 */

/**
 * 本题核心：单调栈
 * 
 * 反思：紧密结合题目84，很巧妙的利用了单调栈的思路，只是需要主要
 * 遇到0的时候因为不会围成全是1的矩形，因此要将历史累加的高度清零
 */


