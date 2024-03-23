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
var minWindow = function (s, t) {
    const sLen = s.length;
    const tLen = t.length;

    const sMap = new Map();
    const tMap = new Map();

    let minLen = sLen;
    let res = '';

    const isCover = () => [...tMap.entries()].every((item) => {
        return sMap.get(item[0]) >= item[1];
    });

    for (let i = 0; i < tLen; ++i) {
        const value = tMap.get(t[i]);
        if (value) {
            tMap.set(t[i], value + 1); 
        } else {
            tMap.set(t[i], 1);
        }
    }

    let i = 0;
    let j = tLen;
    var str = s.slice(i, j);

    for (let i = 0; i < str.length; ++i) {
        const value = sMap.get(str[i]);
        if (value) {
            sMap.set(str[i], value + 1); 
        } else {
            sMap.set(str[i], 1);
        }
    }

    var _isCover = false;

    while (j <= sLen) {
        _isCover = isCover();
        if (_isCover) {
            if (str.length <= minLen) {
                minLen = str.length;
                res = str;
            }
            var tmp = sMap.get(str[0]);
            sMap.set(str[0], tmp - 1);
            i++;
            str = s.slice(i, j);
        } else {
            j++;
            str = s.slice(i, j);
            var tmp = (sMap.get(str[str.length - 1]) || 0);
            sMap.set(str[str.length - 1], tmp + 1);
        }
    }

    return res;
};

/**
 * 测试用例：
 * console.log(minWindow('cabwefgewcwaefgcf', 'cae'));
 */

/**
 * 本题核心：滑动窗口、双指针
 *
 * 反思：用滑动窗口来解决该问题，现解法仍然耗时，主要在于 slice 方法的调用，以及
 * 遍历 map 进行对比两个方面，更优化的办法可以参考官方用一个 map 存储的办法
 */