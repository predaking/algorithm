/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
 * 如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”
 * 单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不
 * 允许被重复使用。
 */

/**
 * @description 单词搜索
 * @param {character[][]} board
 * @param {string} word
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const arr = Array(m).fill(0).map(() => Array(n).fill(0));
    const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const backTrack = (_i, _j, index) => {
        if (board[_i][_j] !== word[index]) {
            return false;
        } else if (index === word.length - 1) {
            return true;
        }

        arr[_i][_j] = 1;
        let res = false;
        for (let [x, y] of direction) {
            let _x = x + _i;
            let _y = y + _j;

            if (_x >= 0 && _x < m && _y >= 0 && _y < n) {
                if (!arr[_x][_y]) {
                    const _res = backTrack(_x, _y, index + 1);
                    if (_res) {
                        res = true;
                        break;
                    }
                }
            }
        }

        arr[_i][_j] = 0;
        return res;
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            const flag = backTrack(i, j, 0);
            if (flag) {
                return true;
            }
        }
    }

    return false;
};

/**
 * 测试用例：
 * console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCC'))
 */

/**
 * 本题核心：回溯
 *
 * 反思：核心思想在于用二维数组存储遍历痕迹，这也是本题回溯的核心。
 * 另外可用一个方向数组存储可遍历点，处理起来更方便
 */
