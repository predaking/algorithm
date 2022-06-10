/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1：
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 * 示例 2：
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 *
 * 解释：输入不存在公共前缀。
 */

/**
 * @description 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (!strs.length) {
		return '';
	}

	var maxSubStr = '';
	var marketStr = strs[0];
	var len = marketStr.length;

	for (let i = 0; i < len; ++i) {
		if (
			strs.every(str => str.charAt(i) === marketStr[i])
		) {
			maxSubStr += marketStr.charAt(i);
		} else {
			break;
		}
	}

	return maxSubStr;
};

/**
 * 测试用例：
 * console.log(longestCommonPrefix(["flower","flow","flight"]));
 */

/**
 * 本题核心： 无
 *
 * 反思：无
 */
