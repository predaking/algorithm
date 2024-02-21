/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 */

/**
 * @description 不同路径 II
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    var _obstacleGrid = Array(n).fill(0);

    _obstacleGrid[0] = obstacleGrid[0][0] === 1 ? 0 : 1; 

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (obstacleGrid[i][j] === 1) {
                _obstacleGrid[j] = 0;
                continue;
            } 
            if (i === 0 && j === 0) {
                continue;
            }
            _obstacleGrid[j] += (j > 0 ? _obstacleGrid[j - 1] : 0);
        }
    }

    return _obstacleGrid[n - 1];
};

/**
 * 测试用例：
 * console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
 */

/**
 * 本题核心：动态规划、滚动数组
 *
 * 反思：与上一题的思路一致，只不过在列状态转换方程时多了一种特殊情况，那就是遇到阻碍时，
 * 要将此时的方案数置为0。注意点主要包括：
 * 1、注意第一个位置方案数的设置，有障碍时直接为0；
 * 2、可以利用一维数组去存储方案，所谓的滚动数组，空间复杂度能达到O(n)，n位输入矩阵列数，
 * 也有人会直接在复用原数组进行存储，也是可以的。
 */