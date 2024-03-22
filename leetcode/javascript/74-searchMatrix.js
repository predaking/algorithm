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

    while (leftIndex <= rightIndex) {
        let midValue = matrix[mid][0];
        if (target < midValue) {
            rightIndex = Math.floor((leftIndex + rightIndex) / 2) - 1;
        } else if (target > midValue) {
            leftIndex = Math.floor((leftIndex + rightIndex) / 2) + 1;
        } else {
            return true;
        }
        mid = Math.floor((leftIndex + rightIndex) / 2);
    }

    let rowIndex = leftIndex;

    if (leftIndex > m - 1 || (target < matrix[leftIndex][0] && leftIndex > 0)) {
        rowIndex = leftIndex - 1;
    }

    leftIndex = 0;
    rightIndex = n - 1;
    mid = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex <= rightIndex) {
        if (target < matrix[rowIndex][mid]) {
            rightIndex = Math.floor((leftIndex + rightIndex) / 2) - 1;
        } else if (target > matrix[rowIndex][mid]) {
            leftIndex = Math.floor((leftIndex + rightIndex) / 2) + 1;
        } else {
            return true;
        }
        mid = Math.floor((leftIndex + rightIndex) / 2);
    }

    return false;
};

/**
 * 测试用例：
 * console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 62))
 */

/**
 * 本题核心：二分查找
 *
 * 反思：一维数组查询某数用二分查找，二维数组道理一样，先锁定某个数在哪一行，
 * 接着再锁定在哪一列。过程中需要特别注意边界
 */