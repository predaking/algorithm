/**
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 */

/**
 * @description 二进制求和
 * @param {string} a
 * @param {string} b
 */
var addBinary = function(a, b) {
    var arr = [];
    var len1 = a.length;
    var len2 = b.length;
    var len = Math.max(len1, len2);
    var plus = 0;

    if (len1 > len2) {
        b = b.padStart(len, 0);
    } else {
        a = a.padStart(len, 0);
    }

    for (let i = len - 1; i >= 0; --i) {
        var _a = +a[i] || 0;
        var _b = +b[i] || 0;
        if (_a + _b > 1) {
            arr.unshift(plus === 1 ? 1 : 0);
            plus = 1;
        } else {
            if (_a + _b + plus > 1) {
                arr.unshift(plus === 1 ? 0 : 1);
                plus = 1;
            } else {
                arr.unshift(_a + _b + plus);
                plus = 0;
            }
        }
    }

    if (plus) {
        arr.unshift(1);
    }

    return arr.join('');
};

/**
 * 测试用例：
 * console.log(addBinary('1010', '1011'));
 */

/**
 * 本题核心：数学进位
 *
 * 反思：为了方便处理，可以先将长度补全
 */