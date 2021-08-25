/**
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	var rex = new RegExp(`^${p}$`, 'g');
	return rex.test(s);
};

/**
 * 测试用例：
 * console.log(isMatch('aa', 'a'));
 */

/**
 * 本题核心： 正则表达式
 *
 * 反思：本题目的是让手动实现正则表达式，而非直接调用
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	var index = 0;
	var sLen = s.length;
	var pLen = p.length;

	
};

console.log(isMatch('aaa', 'ab*a*c*a'));

/**
 * ..
 * .*
 * *.
 * .\w
 * *\w
 * \w.
 * \w*
 */
