/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 */

/**
 * @description 最长有效括号
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	if (s.length <= 1) {
		return 0;
	}

	const len = s.length;
	const stack = [-1];

	let max = 0;
	let i = 0;

	while (i < len) {
		if (s.charAt(i) === '(') {
			stack.push(i);
		} else {
			stack.pop();
			if (stack.length) {
				max = Math.max(max, i - stack[stack.length - 1]);
			} else {
				stack.push(i);
			}
		}
		++i;
	}

	return max;
};

/**
 * 测试用例：
 * console.log(longestValidParentheses('()(()'));
 */

/**
 * 本题核心： 栈、动态规划
 *
 * 反思：栈不止可以存value，有时候存index也是一种思想
 */

/**
 * @description 最长有效括号(动态规划)
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	if (s.length <= 1) {
		return 0;
	}

	const len = s.length;
	const dp = new Array(len).fill(0);
	let max = 0;

	for (let i = 0; i < len; ++i) {
		if (s.charAt(i) === ')' && i - 1 >= 0) {
			if (s.charAt(i - 1) === '(') {
				if (i - 2 < 0) {
					dp[i] = 2;
				} else {
					dp[i] = dp[i - 2] + 2;
				}
			}

			if (s.charAt(i - 1) === ')') {
				if (i - dp[i - 1] - 1 >= 0 && s.charAt(i - dp[i - 1] - 1) === '(') {
					if (i - dp[i - 1] - 2 >= 0) {
						dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
					} else {
						dp[i] = dp[i - 1] + 2;
					}
				}
			}

			max = Math.max(max, dp[i]);
		}
	}

	return max;
}

console.log(longestValidParentheses('()(()'));
