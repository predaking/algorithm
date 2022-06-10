/**
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 *
 * 注意：
 *
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 */

/**
 * @description 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const MAX = 9;

    const isValid = (row, col) => {
        const set = new Array(MAX + 1).fill(0);

        for (let i = 0; i < MAX; ++i) {
            if (board[row][i] !== '.') {
                if (set[+board[row][i]]) {
                    return false;
                } else {
                    ++set[+board[row][i]];
                }
            }
        }

        set.fill(0);

        for (let i = 0; i < MAX; ++i) {
            if (board[i][col] !== '.') {
                if (set[+board[i][col]]) {
                    return false;
                } else {
                    ++set[+board[i][col]];
                }
            }
        }

        set.fill(0);

        const rowBlock = Math.floor(row / 3);
        const colBlock = Math.floor(col / 3);

        for (let i = rowBlock * 3; i < rowBlock * 3 + 3; ++i) {
            for (let j = colBlock * 3; j < colBlock * 3 + 3; ++j) {
                if (board[i][j] !== '.') {
                    if (set[board[i][j]]) {
                        return false;
                    } else {
                        ++set[board[i][j]];
                    }
                }
            }
        }

        return true;
    }

    for (let i = 0; i < MAX; ++i) {
        for (let j = 0; j < MAX; ++j) {
            if (board[i][j] === '.') {
                continue;
            }

            if (!isValid(i, j)) {
                return false;
            }
        }
    }

    return true;
};

/**
 * 测试用例：
 * console.log(
     isValidSudoku(
         [
             ["5","3",".",".","7",".",".",".","."],
             ["6",".",".","1","9","5",".",".","."],
             [".","9","8",".",".",".",".","6","."],
             ["8",".",".",".","6",".",".",".","3"],
             ["4",".",".","8",".","3",".",".","1"],
             ["7",".",".",".","2",".",".",".","6"],
             [".","6",".",".",".",".","2","8","."],
             [".",".",".","4","1","9",".",".","5"],
             [".",".",".",".","8",".",".","7","9"]
         ]
     )
 );
 */

/**
 * 本题核心： 计数查重
 *
 * 反思：审清题目最重要，注意边界
 */
