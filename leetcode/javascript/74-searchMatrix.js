/**
 * 给你一个满足下述两条属性的 m x n 整数矩阵：
 * 每行中的整数从左到右按非严格递增顺序排列。 
 * 每行的第一个整数大于前一行的最后一个整数。
 * 给你一个整数 target ，如果 target 在矩阵
 * 中，返回 true ；否则，返回 false 。
 */

/**
 * @description 搜索二维矩阵
 * @param {number[][]} matrix
 * @param {number} target
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let leftIndex = 0;
    let rightIndex = m - 1;
    let mid = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex < rightIndex) {
        if (target < matrix[mid][0]) {
            rightIndex = Math.floor((leftIndex + rightIndex) / 2) - 1;
        } else if (target > matrix[mid][0]) {
            leftIndex = Math.floor((leftIndex + rightIndex) / 2) + 1;
        } else {
            return true;
        }
    }

    let rowIndex = leftIndex;
    leftIndex = 0;
    rightIndex = n - 1;
    mid = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex < rightIndex) {
        if (target < matrix[rowIndex][mid]) {
            rightIndex = Math.floor((leftIndex + rightIndex) / 2) - 1;
        } else if (target > matrix[rowIndex][mid]) {
            leftIndex = Math.floor((leftIndex + rightIndex) / 2) + 1;
        } else {
            return true;
        }
    }

    return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 34))

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