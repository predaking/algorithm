/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 
 * 子集（幂集）。解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺
 * 序 排列。
 */

/**
 * @description 子集 II
 * @param {number[]} nums
 */
var subsetsWithDup = function(nums) {
    const len = nums.length;
    const arr = [];
    const res = [];

    nums.sort((v1, v2) => v1 - v2);

    const backTrack = (pos) => {
        res.push([...arr]);

        for (let i = pos; i < len; ++i) {
            if (i > pos && nums[i] === nums[i - 1]) {
                continue;
            }
            arr.push(nums[i]);
            backTrack(i + 1);
            arr.pop();
        }
    }

    backTrack(0);
    return res;
};

/**
 * 测试用例：
 * console.log(subsetsWithDup([1, 2, 2]));
 */

/**
 * 本题核心：回溯
 * 
 * 反思：常规回溯思路，需要注意的是去重。
 */