/**
 * 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联
 * 形成的子串的起始位置。
 *
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的
 * 顺序。
 */

/**
 * @description 串联所有单词的子串
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	if (!words.length) {
		return [];
	}

	const res = [];
	const unitLen = words[0].length;
	const subStrLen = words.length * unitLen;
	const maxIndex = s.length - subStrLen;
	const wordsCounter = {};

	words.forEach(item => {
		if (!wordsCounter.hasOwnProperty(item)) {
			wordsCounter[item] = 1;
		} else {
			++wordsCounter[item];
		}
	});

	for (let i = 0; i <= maxIndex; ++i) {
		const tmpStr = s.slice(i, i + subStrLen);
		const tmpCounter = {...wordsCounter};

		let j = 0;

		while (j < subStrLen) {
			const unitStr = tmpStr.slice(j, j + unitLen);

			if (!tmpCounter.hasOwnProperty(unitStr)) {
				break;
			}

			if (tmpCounter[unitStr] === 0) {
				break;
			}

			--tmpCounter[unitStr];
			j += unitLen;
		}

		if (j === subStrLen) {
			res.push(i);
		}
	}

	return res;
};

/**
 * 测试用例：
 * console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]));
 */

/**
 * 本题核心： 滑动窗口
 *
 * 反思：利用对象key的唯一性去重，比map更易于赋值给其他变量
 */
