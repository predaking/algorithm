/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

/**
 * @description 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if (s.length <= 1) {
        return s;
    }

	var longestPalindrome = '';
	var isPalindrome = false;
	var len = s.length;
	var subStr = '';

	// 长度为奇数的回文串处理
	for (let i = 1; i < len; i++) {
		var headIndex = i, lastIndex = i;
		while (headIndex >= 0 && lastIndex < len) {
			if (s[headIndex] === s[lastIndex]) {
				isPalindrome = true;
				headIndex--;
				lastIndex++;
			}
			else {
				break;
			}
		}

		if (isPalindrome) {
			subStr = s.slice(headIndex + 1, lastIndex);

			if (subStr.length > longestPalindrome.length) {
				longestPalindrome = subStr;
			}
		}

		isPalindrome = false;
	}

	// 长度为偶数的回文串处理
	for (let i = 0; i < len; i++) {
		var headIndex = i, lastIndex = i + 1;
		while (headIndex >= 0 && lastIndex < len) {
			if (s[headIndex] === s[lastIndex]) {
				isPalindrome = true;
				headIndex--;
				lastIndex++;
			}
			else {
				break;
			}
		}

		if (isPalindrome) {
			subStr = s.slice(headIndex + 1, lastIndex);
			if (subStr.length > longestPalindrome.length) {
				longestPalindrome = subStr;
			}
		}

		isPalindrome = false;
	}

	return longestPalindrome;
};

/**
 * 测试用例：
 * console.log(longestPalindrome('aacabdkacaa'));
 */

/**
 * 本题核心： 动态规划
 *
 * 反思：寻找回文子串要不从长度为1两边扩展判断，要不从两边向中间逐步判断，这种常规做法逃离不了
 * O(n^2)的时间复杂度，但是需要注意分奇偶两种情况来判断，可以写成函数。
 */
