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
		let lenCounter = 0;

		while ((stack[stack.length - 1] !== ')' || stack.length === 0) && j < len) {

			if (s.charAt(j) === '(') {
				stack.push(s.charAt(j));
			} else {
				if (stack.length) {
					stack.pop();
				} else {
					stack.push(s.charAt(j));
				}
			}

			lenCounter = j - i + 1;
			++j;
		}

		if (stack.length) {
			max = Math.max(max, lenCounter - stack.length);
		} else {
			max = Math.max(max, lenCounter);
		}

		stack.length = 0;

		++i;
		j = i + 1;
	}

	return max;
};

// console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('()(()'));
