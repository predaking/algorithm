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
        if (!intervals[i]) {
            continue;
        }

        for (let j = i + 1; j < intervals.length; ++j) {
            if (!intervals[j]) {
                continue;
            }

            if (!intervals[i]) {
                break;
            }

            var min = Math.min(intervals[i][0], intervals[j][0]);
            var max = Math.max(intervals[i][1], intervals[j][1]);

            var sumLen = intervals[i][1] - intervals[i][0] + intervals[j][1] - intervals[j][0];

            if (max - min <= sumLen) {
                intervals[i] = [min, max];
                intervals[j] = null;
                --i;
            }
        }
    }

    return intervals.filter(val => !!val);
};

/**
 * 测试用例：
 * console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))
 */

/**
 * 本题核心： 无
 *
 * 反思：普通处理时间复杂度为O(n ^ 2)，可采用先排序后合并的方式
 */