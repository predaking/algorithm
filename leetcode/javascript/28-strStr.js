/**
 * 实现 strStr() 函数。
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的
 * 第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 *
 * 说明：
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java
 * 的 indexOf() 定义相符。
 */

/**
 * @description 实现 strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    let position = -1;

    const len1 = haystack.length;
    const len2 = needle.length;

    for (let i = 0; i < len1; ++i) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            if (haystack.slice(i, len2 + i) === needle) {
                position = i;
                break;
            }
        }
    }

    return position;
};

/**
 * 测试用例：
 * console.log(strStr('hello', 'll'));
 */

/**
 * 本题核心： 比较字符串不能直接利用 = 比较吗？
 *
 * 反思：无
 */
