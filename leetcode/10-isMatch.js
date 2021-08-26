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
	// 正则匹配
	// var rex = new RegExp(`^${p}$`, 'g');
	// return rex.test(s);
	var matchArr = [];

	// 初始化二维数组，初始值均为false，且长度均加一
	for (let i = 0; i <= s.length; i++) {
		matchArr.push([]);
		for (let j = 0; j <= p.length; j++) {
			matchArr[i][j] = false;
		}
	}

	// 边界条件
	matchArr[0][0] = true;

	var matchTail = function (i, j) {
		if (i === 0) {
			return false;
		}

		return (s.charAt(i - 1) === p.charAt(j - 1)) || p.charAt(j - 1) === '.';
	}

	for (let i = 0; i <= s.length; i++) {
		for (let j = 1; j <= p.length; j++) {
			if (p.charAt(j - 1) === '*') {
				matchArr[i][j] = matchArr[i][j - 2];
				if (matchTail(i, j - 1)) {
					matchArr[i][j] = (matchArr[i][j] || matchArr[i - 1][j]);
				}
			} else {
				if (matchTail(i, j)) {
					matchArr[i][j] = matchArr[i - 1][j - 1];
				}
			}
		}
	}

	return matchArr[s.length][p.length];
};

/**
 * 测试用例：
 * console.log(isMatch('aa', 'a*'));
 */

/**
 * 本题核心： 动态规划、二维数组
 *
 * 反思：动态规划的核心是找准状态转移方程及边界条件
 * p[j] === '*'
 * 		if s[i] === p[j - 1] then f[i][j] === f[i - 1][j] || f[i][j] === f[i][j - 2]
 * 		if s[i] !== p[j - 1] then f[i][j] === f[i][j - 2]
 * p[j] !== '*'
 * 		if p[j] === '.' || s[i] === p[j] then f[i][j] === f[i - 1][j - 1]
 */
