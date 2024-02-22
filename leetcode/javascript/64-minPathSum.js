/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，
 * 使得路径上的数字总和为最小。说明：每次只能向下或者向右移动一步。
 */

/**
 * @description 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;

    if (m === 0) {
        return 0;
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i === 0 && j === 0) {
                continue;
            }
            if (j === 0) {
                grid[i][0] += grid[i - 1][0];
                continue;
            }
            if (i === 0) {
                grid[0][j] += grid[0][j - 1];
                continue;
            }
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    return grid[m - 1][n - 1];
};

/**
 * 测试用例：
 * console.table(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
 */

/**
 * 本题核心：动态规划
 *
 * 反思：本题即便不了解动态规划也是很容易想到如何一步一步获得当前最短路径
 */
