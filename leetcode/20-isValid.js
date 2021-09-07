/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */

/**
 * @description 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const stack = [];

	if (s.length % 2) {
		return false;
	}

	const map = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);

	for (let i = 0; i < s.length; ++i) {
		const cur = s.charAt(i);

		if (map.has(cur)) {
			stack.push(cur);
		} else {
			if (cur === map.get(stack[stack.length - 1])) {
				stack.pop();
			} else {
				stack.push(cur);
			}
		}
	}

	return !stack.length;
};

/**
 * 测试用例：
 * console.log(isValid('()[]{}'));
 */

/**
 * 本题核心： 栈
 *
 * 反思：奇数个直接返回false，不需要用下标的循环可以用let...of的形式
 */
