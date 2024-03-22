/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符
 * 数量。如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 示例 1：
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 */

/**
 * @description 最小覆盖子串
 * @param {string} s
 * @param {string} t
 */
var minWindow = function(s, t) {

};

/**
 * 测试用例：
 * console.log(sortColors([2, 0, 2, 1, 1, 0]))
 */

/**
 * 本题核心：计数法
 *
 * 反思：dp[i][j] = dp[i - 1][j]
 */