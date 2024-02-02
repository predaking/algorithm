/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，
 * 且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var res = Array(n).fill(0).map(() => Array(n).fill(0))

    var i = 0, j = 0;
    var direction = 0;
    const ltr = 0, ttb = 1, rtl = 2, btt = 3;

    for (let count = 1; count <= n * n; ++count) {
        res[i][j] = count;

        switch (direction) {
            case ltr: 
                if (j === n - 1) {
                    i++;
                    direction = ttb;
                } else {
                    if (res[i][j + 1] > 0) {
                        direction = ttb;
                        i++;
                    } else {
                        j++;
                    }
                }
                break;
            case ttb:
                if (i === n - 1) {
                    j--;
                    direction = rtl;
                } else {
                    if (res[i + 1][j] > 0) {
                        direction = rtl;
                        j--;
                    } else {
                        i++;
                    }
                }
                break;
            case rtl:
                if (j === 0) {
                    i--;
                    direction = btt;
                } else {
                    if (res[i][j - 1] > 0) {
                        direction = btt;
                        i--;
                    } else {
                        j--;
                    }
                }
                break;
            case btt:
                if (i === 0) {
                    j++;
                    direction = ltr;
                } else {
                    if (res[i - 1][j] > 0) {
                        direction = ltr;
                        j++;
                    } else {
                        i--;
                    }
                }
                break;
            default: break;
        }
    }

    return res;
};

/**
 * 测试用例：
 * console.table(generateMatrix(5));
 */

/**
 * 本题核心：状态机
 *
 * 反思：注意状态之间的转化关系
 */