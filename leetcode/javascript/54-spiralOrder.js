/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

/**
 * @description 螺旋矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var m = matrix.length; // 剩余最大行数
    var n = matrix[0].length; // 剩余最大列数

    var row = 0; // 行起始数
    var col = 0; // 列起始数

    var rowMid = m / 2;

    var res = [];
    var sum = m * n;

    var i = 0;
    var j = 0;

    while (res.length < sum) {
        res.push(matrix[i][j]);

        // 先判断到了最后一列
        if (j === n - 1) {
            // 最后一行向左走
            if (i === m - 1) {
                j--;
                continue;
            }

            // 不是最后一行向下走
            if (i < m - 1) {
                i++;
                continue;
            }
        }

        // 到了第一列
        if (j === col) {
            // 第一行向右走
            if (i === row) {
                j++;
                continue;
            }

            // 一圈走完缩小圈子继续向右开始走
            if (i === row + 1) {
                col++;
                row++;
                m--;
                n--;
                j++;
                continue;
            }

            // 其他行向上走
            if (i > row) {
                i--;
                continue;
            }
        }

        // 到了其它列
        if (j > col && j < n - 1) {
            // 下半部分向左走，上半部分向右走
            if (i >= rowMid) {
                j--;
            } else {
                j++;
            }
        }
    }

    return res;
};

/**
 * 测试用例：
 * console.log(spiralOrder([[2, 5, 8],[4, 0, -1]]));
 */

/**
 * 本题核心： 无
 *
 * 反思：常规绕圈子做法，烦的是每一步的走向指针得搞对，不能越界。走过的圈子通过缩小始末下标消除
 */


