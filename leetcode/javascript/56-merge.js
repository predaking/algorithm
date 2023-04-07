/**
 * 以数组 intervals 表示若干个区间的集合，
 * 其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，
 * 该数组需恰好覆盖输入中的所有区间 。
 */

/**
 * @description 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    for (let i = 0; i < intervals.length; ++i) {
        for (let j = 1; j < i; ++j) {
            if (intervals[i][1] >= intervals[j][0]) {
                
            }
        }
    }
};

/**
 * 测试用例：
 * console.log(merge([[1,3],[2,6],[8,10],[15,18]])) 
 */

/**
 * 本题核心： 无
 *
 * 反思：能否成功跳到结尾决定于是否能跨过其中的0点。不过时间复杂度会达到O(n^2)
 */