/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * @description 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var quene = [];
	var maxLen = 0; // 初始值不能设置为1，考虑空串输入

	for (let i = 0; i < s.length; i++) {
		// includes方法时间复杂度为O(n)，不建议使用
		if (!quene.includes(s[i])) {
			quene.push(s[i]);
			maxLen = Math.max(maxLen, quene.length);
		} else {
			quene.shift();
			i--;
		}
	}

	return maxLen;
};

/**
 * 测试用例：
 * console.log(lengthOfLongestSubstring('jbpnbwwd'));
 */

/**
 * 本题核心： 队列、滑动窗口
 *
 * 反思：js数组查询值的includes方法时间复杂度为O(n)，优先考虑使用Set结构；另外严谨起见，获取
 * 字符串中的字符最好不要用下标而是charAt方法
 */

/**
 * 官方做法：
 */
 var lengthOfLongestSubstring = function(s) {
 	var set = new Set();
	var maxLen = 0;
	var len = s.length;
	var tailIndex = -1; // 初始值要置为-1

	for (let i = 0; i < len; i++) {
		// 子串起始位置逐步向右
		if (i > 0) {
			set.delete(s.charAt(i - 1));
		}

		// tailIndex 子串结束位置只会增大不会减小
		while(tailIndex + 1 < len && !set.has(s.charAt(tailIndex + 1))) {
			set.add(s.charAt(tailIndex + 1));
			tailIndex++;
		}

		maxLen = Math.max(maxLen, tailIndex + 1 - i);
	}

	return maxLen;
 };
