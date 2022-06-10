/**
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

/**
 * @description N皇后
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var Q = 'Q';

    if (n === 1) {
        return [[Q]];
    }

    if (n === 2 || n === 3) {
        return [];
    }

    var square = new Array(n).fill('.').map(() => new Array(n).fill('.'));

    var res = [];

    var count = 0;

    /**
     * @description 判断当前即将放置的Q是否符合要求（该方法内部可以有更优的逻辑）
     * @param {number} row 行号
     * @param {number} col 列号
     */
    var judgeIsRightPos = function(row, col) {
        for (let i = row - 1; i >= 0; --i) {
            if (square[i][col] === Q) {
                return;
            }
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            if (square[i][j] === Q) {
                return;
            }
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
            if (square[i][j] === Q) {
                return;
            }
        }

        return true;
    }

    var backTrack = function(row, col) {
        if (count === n) {
            res.push(square.map(item => item.join('')));
            return;
        }

        for (let i = row; i < n; ++i) {
            for (var j = col; j < n; ++j) {
                const rightPos = judgeIsRightPos(i, j);

                if (rightPos) {
                    square[i][j] = Q;
                    count++;
                    backTrack(i + 1, 0);
                    square[i][j] = '.';
                    count--;
                } else {
                    // 到了最后一列还没有符合的位置说明当前链路废了，需要回溯到上一行
                    if (j === n - 1) {
                        return;
                    }
                    // 没到最后一列继续向右遍历
                    continue;
                }

            }
        }
    }

    backTrack(0, 0);

    return res;
};

/**
 * 测试用例：
 * console.log(solveNQueens(4))
 */

/**
 * 本题核心： 回溯、深度优先遍历(dfs)
 *
 * 反思：N皇后为典型的二维数组回溯案例，几个关键点：
 * 1、从左到右、从上到下一个一个放置Q
 * 2、每行放完一个Q结束，开始下一行
 * 3、每一行放置Q的时候均需结合前几行已放好的Q判断合不合适（不能同行同列、不能在对角线）
 * 4、如果不合适则回退一步，重新试探（同时将不合适的点再变回'.'符号）
 * 5、判断符不符合结果是通过一个Q的计数器来的
 * 6、另外特殊情况n为1、2、3的时候很容易想到结果，所以可以直接特判
 * 
 * 回溯法特点：
 * 1、内部定义回溯函数，并从起始位置开始调用
 * 2、回溯函数起始要判断条件符合情况
 * 3、在双重循环中试探每个点
 * 4、回溯结束后紧接着要做回退操作
 */