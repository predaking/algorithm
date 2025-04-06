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
    const tmp = [];
    const lenX = triangle.length;
    let min = Infinity;
    let sum = 0;

    const backTrack = (x, y, xIndex) => {
        if (tmp.length === lenX) {
            min = Math.min(min, sum);
            return;
        }

        for (let j = 0; j < triangle[xIndex].length; ++j) {
            for (let i = x; i < lenX; ++i) {
                const val = triangle[i][j];
                if (val === undefined) {
                    continue;
                }
                tmp.push(val);
                sum += val;
                backTrack(i + 1, j, xIndex);
                tmp.pop();
                sum -= val;
            }
            if (xIndex + 1 < triangle.length) {
                xIndex += 1;
            }
        }
    }

    backTrack(0, 0, 0);

    return min;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

/**
 * 测试用例：
 * console.log(getRow(5));
 */

/**
 * 本题核心：无
 *
 * 反思：理解杨辉三角的几条特性有助于拓展思维 
 */