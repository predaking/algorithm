/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 */

/**
 * @description 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	const res = [];

	const backTrack = function (current, numOfLeft, numOfRight) {
		if (current.length === n * 2) {
			return res.push(current);
		}

		if (numOfLeft < n) {
			current += '(';
			backTrack(current, numOfLeft + 1, numOfRight);
			current = current.slice(0, -1);
		}

		if (numOfRight < numOfLeft) {
			current += ')';
			backTrack(current, numOfLeft, numOfRight + 1);
			current = current.slice(0, -1);
		}
	}

	backTrack('', 0, 0);

	return res;
};

/**
 * 测试用例：
 * console.log(generateParenthesis(3));
 */

/**
 * 本题核心： 回溯
 *
 * 反思：思考回溯后退步处理
 */
