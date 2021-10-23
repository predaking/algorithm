/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 *
 * 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。
 *
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/**
 * @description 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const countObj = {};
	const len = strs.length;
	const res = [];

	for (let i = 0; i < len; ++i) {
		const countKey = strs[i].split('').sort().join('');

		if (!countObj.hasOwnProperty(countKey)) {
			countObj[countKey] = [];
		}

		countObj[countKey].push(strs[i]);
	}

	return Object.values(countObj);
};

/**
 * 测试用例：
 * console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
 */

/**
 * 本题核心： 字符串排序
 *
 * 反思：字符串排序先要拆成数组，排序后再组合为字符串，非必要情况不要用最好
 */
