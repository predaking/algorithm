/**
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共
 * 子序列 ，返回 0 。
 *
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删
 * 除某些字符（也可以不删除任何字符）后组成的新字符串。
 *
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 */

/**
 * @description 最长公共子序列
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	if (!text1.length || !text2.length) {
		return 0;
	}

	let max = 0;

	const len1 = text1.length;
	const len2 = text2.length;

	const dp = Array(len1 + 1);

	for (let i = 0; i <= len1; ++i) {
		dp[i] = Array(len2 + 1).fill(0);
	}

	dp[0][0] = 0;

	for (let i = 1; i <= len1; ++i) {
		for (let j = 1; j <= len2; ++j) {
			if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
			max = Math.max(dp[i][j], max);
		}
	}

	return max;
};

/**
 * 测试用例：
 * console.log(longestCommonSubsequence('abcde', 'ace'));
 */

/**
 * 本题核心： 动态规划
 *
 * 反思：动态规划典型题，注意点有：
 * 1、提前创建并初始化好dp二维数组，以及处理好边界初始值
 * 2、双重循环，从1开始，本题最大的难点在于子序列可能不连续，因此动态转移方程需要多考虑一个角度
 * 3、结果并非从dp中直接获得，需要比较每次的结果从而找出最大值
 */
