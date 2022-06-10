/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 *
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转
 * 图像。
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 */

/**
 * @description 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	const sideLen = matrix.length;

	for (let i = 0; i < sideLen; ++i) {
		matrix[i].reverse();
	}

	for (let i = 0; i < sideLen; ++i) {
		for (let j = 0; j < sideLen - i; ++j) {
			const row = sideLen - i - 1;
			const col = sideLen - j - 1;
			[matrix[i][j], matrix[col][row]] = [matrix[col][row], matrix[i][j]];
		}
	}

	return matrix;
};

/**
 * 测试用例：
 * console.log(rotate([
 	[1, 2, 3],
 	[4, 5, 6],
 	[7, 8, 9]
 ]));
 */

/**
 * 本题核心： 矩阵对称
 *
 * 反思：矩阵转换要往轴对称&中心对称上靠，思维要开阔
 */
