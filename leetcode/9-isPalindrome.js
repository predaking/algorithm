/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 */

/**
 * @description 回文数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	return String(x) === String(x).split('').reverse().join('');
};

/**
 * 测试用例：
 * console.log(isPalindrome(34455443));
 */

/**
 * 本题核心： 类型转换
 *
 * 反思：无
 */

/**
 * @description 常规做法
 * @param {number} x
 */
var isPalindrome = function(x) {
	var str = String(x);
	var headIndex = 0;
	var lastIndex = str.length - 1;

	while (headIndex <= lastIndex) {
		if (str.charAt(headIndex++) !== str.charAt(lastIndex--)) {
			return false;
		}
	}

	return true;
};
