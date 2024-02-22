/**
 * 有效数字（按顺序）可以分成以下几个部分：
 * 一个 小数 或者 整数（可选）一个 'e' 或 'E' ，
 * 后面跟着一个 整数小数（按顺序）可以分成以下几个
 * 部分：（可选）一个符号字符（'+' 或 '-'）
 * 下述格式之一：
 * 至少一位数字，后面跟着一个点 '.'
 * 至少一位数字，后面跟着一个点 '.' ，后面再跟着至
 * 少一位数字
 * 一个点 '.' ，后面跟着至少一位数字
 * 整数（按顺序）可以分成以下几个部分：
 * （可选）一个符号字符（'+' 或 '-'）
 * 至少一位数字
 * 部分有效数字列举如下：["2", "0089", "-0.1", 
 * "+3.14", "4.", "-.9", "2e10", "-90E3", 
 * "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
 * 部分无效数字列举如下：["abc", "1a", "1e", "e3",
 * "99e2.5", "--6", "-+3", "95a54e53"]
 * 给你一个字符串 s ，如果 s 是一个 有效数字 ，
 * 请返回 true 。
 */

/**
 * @description 有效数字
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var res = true;
    var len = s.length;
    var hasSign = false;
    var hasDot = false;
    var hasE = false;

    for (let i = 0; i < s.length; ++i) {
        var code = s[i].codePointAt();
        if (i === 0) {
            if (s[0] === '+' || s[0] === '-') {
                continue;
            }
        }

        if (code >= 65 && code <= 97) {
            continue;
        }

        if (!hasDot && s[i] === '.') {
            continue;
        }

        if (!hasE && (s[i] === 'E' || s[i] === 'e')) {
            if (i + 1 < len) {
                
            }
        }

        res = false;
    }

    return res;
};

console.log(isNumber('-123.456e789'));

/**
 * 测试用例：
 * console.table(isNumber());
 */

/**
 * 本题核心：
 *
 * 反思：
 */
