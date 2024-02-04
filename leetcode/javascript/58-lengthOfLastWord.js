/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。
 * 返回字符串中 最后一个 单词的长度。
 */

/**
 * @description 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var rs = 0;
    var len = s.length;

    for (let i = len - 1; i >= 0; --i) {
        if (s[i] !== ' ') {
            rs++;
        } else {
            if (rs === 0) {
                continue;
            } else {
                break;
            }
        }
    }

    return rs;
};

/**
 * 测试用例：
 * console.log(lengthOfLastWord('Hello World'));
 */

/**
 * 本题核心： 无
 *
 * 反思：注意''与' '的区别
 */