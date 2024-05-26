/**
 * 使用下面描述的算法可以扰乱字符串 s 得到字符串 t ：
 * 如果字符串的长度为 1 ，算法停止
 * 如果字符串的长度 > 1 ，执行下述步骤：
 * 在一个随机下标处将字符串分割成两个非空的子字符串。即，如果已知字符串 s ，
 * 则可以将其分成两个子字符串 x 和 y ，且满足 s = x + y 。
 * 随机 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」。
 * 即，在执行这一步骤之后，s 可能是 s = x + y 或者 s = y + x 。
 * 在 x 和 y 这两个子字符串上继续从步骤 1 开始递归执行此算法。
 * 给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。
 * 如果是，返回 true ；否则，返回 false 。
 */

/**
 * @description 扰乱字符串
 * @param {string} s1
 * @param {string} s2
 */
var isScramble = function (s1, s2) {
    const len = s1.length;
    const arr = Array(len).fill(0).map(() => (Array(len).fill(0).map(() => Array(len + 1).fill(0))));

    const check = (i1, i2, len, s1, s2) => {
        const map = new Map();

        for (let i = i1; i < len; ++i) {
            map.set(s1[i], (map.get(s1[i]) || 0) + 1);
        }

        for (let i = i2; i < len; ++i) {
            map.set(s2[i], (map.get(s2[i]) || 0) - 1);
        }

        for (let val of map.values()) {
            if (val) {
                return false;
            }
        }

        return true;
    };

    const dfs = (i1, i2, len, s1, s2, arr) => {
        if (arr[i1][i2][len] !== 0) {
            return arr[i1][i2][len] === 1;
        }

        if (s1.slice(i1, i1 + len) === s2.slice(i2, i2 + len)) {
            arr[i1][i2][len] = 1;
            return true;
        }

        if (!check(i1, i2, len, s1, s2)) {
            arr[i1][i2][len] = -1;
            return false;
        }

        for (let i = 1; i < len; ++i) {
            if (dfs(i1, i2, i, s1, s2, arr) && dfs(i1 + i, i2 + i, len - i, s1, s2, arr)) {
                arr[i1][i2][len] = 1;
                return true;
            }

            if (dfs(i1, i2 + len - i, i, s1, s2, arr) && dfs(i1 + i, i2, len - i, s1, s2, arr)) {
                arr[i1][i2][len] = 1;
                return true;
            }
        }

        arr[i1][i2][len] = -1;
        return false;
    }

    return dfs(0, 0, len, s1, s2, arr);
};

/**
 * 测试用例：
 * console.log(isScramble('abcdbdacbdac', 'bdacabcdbdac'));
 */

/**
 * 本题核心：记忆化搜索、动态规划
 * 
 * 反思：状态转移方程很难想出，如果本题限制没有重复字符就好办了。
 */


