/**
 * 1528. 重新排列字符串
 * 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。
 * 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。
 * 返回重新排列后的字符串。
 *
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var obj = {};
    indices.map((item, index) => {
        obj[item] = s[index];
    });
    return Object.values(obj).join('');
};
