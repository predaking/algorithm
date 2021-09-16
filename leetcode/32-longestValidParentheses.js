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
	const stack = [];

	let max = 0;
	let i = 0, j = i + 1;

	while (i < len) {
		stack.push(s.charAt(i));

		while (stack[stack.length - 1] !== ')' && j < len) {
			if (s.charAt(j) === '(') {
				stack.push(s.charAt(j));
			} else {
				stack.pop();
			}

			max = Math.max(j - i + 1, max);
			++j;
		}

		stack.length = 0;

		++i;
		j = i + 1;
	}

	return max;
};

console.log(longestValidParentheses(')()('));
