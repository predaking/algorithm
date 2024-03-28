/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
 * 子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[[],[0]]
 */

/**
 * @description 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const len = nums.length;
    const arr = [];

    const backTrack = (start, _len) => {
        if (arr.length === _len) {
            res.push([...arr]);
            return;
        }

        for (let i = start + 1; i <= len; ++i) {
            arr.push(nums[i - 1]);
            backTrack(i, _len);
            arr.pop();
        }
    }

    for (let i = 0; i <= len; ++i) {
        backTrack(0, i);
    }

    return res;
};

/**
 * 测试用例：
 * console.log(subsets([1, 2, 3]))
 */

/**
 * 本题核心：回溯
 *
 * 反思：结合上题，在回溯方法外包一层循环即可
 */