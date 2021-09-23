/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

	const memo = [];
	const MAX = 9;
	let lastRow = 0;
	let lastCol = 0;

	for (let val of board) {
		memo.push([...val]);
	}

	// 校验当前填入值是否合法
	const isValid = (board, row, col, cur) => {
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

	const backTrack = (row, col, val) => {
		if (row === MAX) {
			if (col === MAX) {
				return board;
			}

			row--;
		}

		if (col === MAX) {
			return backTrack(row + 1, 0, 1);
		}

		if (board[row][col] !== '.') {
			return backTrack(row, col + 1, val);
		}

		const res = isValid(board, row, col, val);

		if (res) {
			board[row][col] = String(val);
			console.log(JSON.stringify(board));

			val = val === MAX ? 1 : val + 1;

			backTrack(row, col + 1, val);
		} else {
			if (val === MAX) {
				while (true) {
					col--;
					if (col < 0) {
						col = MAX - 1;
						row--;
					}

					if (memo[row][col] === '.') {
						let tmp = board[row][col];
						board[row][col] = '.';

						if (tmp !== String(MAX)) {
							backTrack(row, col, +tmp + 1);
							break;
						}
					}
				}
			} else {
				backTrack(row, col, val + 1);
			}
		}
	}

	backTrack(0, 0, 1);

	return board;
};

console.log(
	solveSudoku(
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
