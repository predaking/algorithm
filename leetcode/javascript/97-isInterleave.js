/**
 * 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
 * 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 
 * 子字符串：
 * s = s1 + s2 + ... + sn
 * t = t1 + t2 + ... + tm
 * |n - m| <= 1
 * 
 * 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + 
 * t3 + s3 + ...
 * 注意：a + b 意味着字符串 a 和 b 连接。
 */

/**
 * @description 交错字符串
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 */
var isInterleave = function(s1, s2, s3) {
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;

    if (len1 + len2 !== len3) {
        return false;
    }

    const dp = Array(len2 + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i <= len1; ++i) {
        for (let j = 0; j <= len2; ++j) {
            if (i > 0) {
                dp[j] &= (s1[i - 1] === s3[i + j - 1])
            }

            if (j > 0) {
                dp[j] |= (dp[j - 1] && s2[j - 1] === s3[i + j - 1])
            }
        }
    }

    return dp[len2];
};

/**
 * 测试用例：
 * console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')); // true
 */

/**
 * 本题核心： 动态规划
 * 
 * 反思：f(i, j)表示s1的前i个字符和s2的前j个字符是否能交错组成s3的前i+j个字符。
 * 状态转移方程为：f(i, j) = f(i - 1, j) && s1[i - 1] === s3[i + j - 1] ||
 * f(i, j - 1) && s2[j - 1] === s3[i + j - 1]。这里的f(i, j)只与f(i - 1, j)
 * 和f(i, j - 1)有关，可以将二维数组优化为一维滚动数组。
 */