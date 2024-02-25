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

    for (let i = 0; i < len; ++i) {
        var code = s[i].codePointAt();

        if (i === 0 && i + 1 < len) {
            if (s[0] === '+' || s[0] === '-') {
                hasSign = true;
                continue;
            }
        }

        if (code >= 48 && code <= 57) {
            continue;
        }

        if (!hasDot && s[i] === '.' && !hasE && len > 1) {
            hasDot = true; 
            if (s[i - 1] === '+' || s[i - 1] === '-') {
                if (
                    i + 1 < len 
                    && (s[i + 1].charCodeAt() >= 48 && s[i + 1].charCodeAt() <= 57)) {
                    continue;
                }
            } else {
                continue;
            }
        }

        if (!hasSign && i + 1 < len && (s[i] === '+' || s[i] === '-') && (s[i - 1] === 'E' || s[i - 1] === 'e')) {
            hasSign = true;
            continue;
        }

        if (!hasE && (s[i] === 'E' || s[i] === 'e') && i > 0) {
            if (s[i - 1] === '+' || s[i - 1] === '-') {
                res = false;
                break;
            }

            if (s[i - 1] === '.' && i - 1 === 0) {
                res = false;
                break;
            }

            hasE = true;
            hasSign = false;

            if (
                i + 1 < len 
                    && (
                        (s[i + 1].codePointAt() >= 48 && s[i + 1].codePointAt() <= 57) 
                        || (s[i + 1] === '+' || s[i + 1] === '-') 
                    )
                    && (s[i - 1] !== '.' || (s[i - 1] === '.' && i - 1 > 0))
            ) {
                continue;
            }
        }

        res = false;
    }

    return res;
};

/**
 * 测试用例：
 * console.log(isNumber('-123.456e789'));
 * console.log(isNumber('0089'));
 * console.log(isNumber('-0.1'));
 * console.log(isNumber('+3.14'));
 * console.log(isNumber('4.'));
 * console.log(isNumber('-.9'));
 * console.log(isNumber('2e10'));
 * console.log(isNumber('-90E3'));
 * console.log(isNumber('3e+7'));
 * console.log(isNumber('+6e-1'));
 * console.log(isNumber('53.5e93'));
 * console.log(isNumber('46.e3'));

 * console.log('------');

 * console.log(isNumber('e+9+9'));
 * console.log(isNumber('abc'));
 * console.log(isNumber('1a'));
 * console.log(isNumber('1e'));
 * console.log(isNumber('e3'));
 * console.log(isNumber('99e2.5'));
 * console.log(isNumber('--6'));
 * console.log(isNumber('-+3'));
 * console.log(isNumber('95a54e53'));
 * console.log(isNumber('.'));
 * console.log(isNumber('.e1'));
 * console.log(isNumber('6+1'));
 * console.log(isNumber('+.'));
 * console.log(isNumber('+'));
 * console.log(isNumber('-e'));
 * console.log(isNumber('+E3'));
 */

/**
 * 本题核心：无
 *
 * 反思：毫无意义。。。
 */
