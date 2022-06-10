/**
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 *
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 两个字符串完全匹配才算匹配成功。
 *
 * 说明:
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 */

/**
 * @description 通配符匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;

    const dp = new Array(sLen + 1);

    for (let i = 0; i <= sLen; ++i) {
        dp[i] = [];
        dp[i][0] = false;
    }

    for (let i = 1; i <= pLen; ++i) {
        if (p[i - 1] === '*') {
            dp[0][i] = true;
        } else {
            break;
        }
    }

    dp[0][0] = true;

    for (let i = 1; i <= sLen; ++i) {
        for (let j = 1; j <= pLen; ++j) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }

    return !!dp[sLen][pLen];
};

/**
 * 测试用例：
 * console.log(isMatch("adceb", "*a*b"));
 */

/**
 * 本题核心： 动态规划
 *
 * 反思：手写简单正则匹配基本要往动态规划方向上考虑，一方面需要确认对状态转移方程，另一方面需要
 * 确认对边界条件，并且在判断条件中需要根据上个值的结果来确认当前值，dp二位数组基本也是从1开始
 * 推导，这样做会省去好多判断步骤
 */
