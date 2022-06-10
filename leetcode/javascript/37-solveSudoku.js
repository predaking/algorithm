/**
 * 编写一个程序，通过填充空格来解决数独问题。
 *
 * 数独的解法需 遵循如下规则：
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 */

/**
 * @description 解数独
 * @param {character[][]} board
 */
var solveSudoku = function(board) {

	const MAX = 9;

	// 校验当前填入值是否合法
	const isValid = (row, col, cur) => {
		const MAX = 9;

		 for (let i = 0; i < MAX; ++i) {
			 if (board[row][i] === String(cur)) {
				 return false;
			 }
		 }

		 for (let i = 0; i < MAX; ++i) {
			 if (board[i][col] === String(cur)) {
				 return false;
			 }
		 }

		 const left = Math.floor(row / 3) * 3;
		 const top = Math.floor(col / 3) * 3;

		 for (let i = left; i < left + 3; ++i) {
			 for (let j = top; j < top + 3; ++j) {
				 if (board[i][j] === String(cur)) {
					 return false;
				 }
			 }
		 }

		 return true;
	}

	const backTrack = (row, col) => {
		if (col === MAX) {
			return backTrack(row + 1, 0);
		}

		if (row === MAX) {
			return true;
		}

		if (board[row][col] !== '.') {
			return backTrack(row, col + 1);
		}

		for (let i = 1; i <= MAX; ++i) {
			if (!isValid(row, col, i)) {
				continue;
			}

			board[row][col] = String(i);

			if (backTrack(row, col + 1)) {
				return true;
			} else {
				board[row][col] = '.';
			}
		}
	}

	backTrack(0, 0);

	return board;
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
 * 本题核心： 回溯
 *
 * 反思：注意回溯时的条件
 */
