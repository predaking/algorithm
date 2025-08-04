/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 
 * 所使用的最少操作数  。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 */

/**
 * @description 编辑距离
 * @param {string} word1
 * @param {string} word2
 */
var minDistance = function(word1, word2) {
    var len1 = word1.length;
    var len2 = word2.length;

    if (len1 === 0) {
        return len2;
    }

    if (len2 === 0) {
        return len1;
    }

    var dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; ++i) {
        for (let j = 0; j <= len2; ++j) {
            if (i === 0) {
                dp[i][j] = j;
                continue;
            }

            if (j === 0) {
                dp[i][j] = i;
                continue;
            }

            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] - 1);
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[len1][len2];
};

/**
 * 测试用例：
 * console.log(minDistance('h', 'o'););
 */

/**
 * 本题核心：动态规划
 *
 * 反思：如果是第一次接触这类型题目，很难想到用动态规划去解
 * 而且状态转换方程也不太容易想到。
 */