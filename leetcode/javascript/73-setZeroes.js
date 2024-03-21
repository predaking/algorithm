/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，
 * 则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 */

/**
 * @description 矩阵置零
 * @param {number[][]} matrix
 */
var setZeroes = function (matrix) {
    const zeroList = [];

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] === 0) {
                zeroList.push([i, j]);
            }
        }
    }

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (zeroList.some(item => item[0] === i) || zeroList.some(item => item[1] === j)) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

/**
 * 测试用例：
 * console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
 */

/**
 * 本题核心：无
 *
 * 反思：基本的先遍历 + 标记，后遍历 + 修改。原题解有O(1)空间复杂度的方式，
 * 即用第一行第一列来标记存储是否有0，然而如评论所说，为了这点儿空间，代码可
 * 读性变差了。各有道理吧，看注重什么了。
 */