/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 */

/**
 * @description 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = 0;
    var res = nums[0] || 0;

    nums.map(val => {
        max = Math.max(max + val, val);
        res = Math.max(max, res)
    });

    return res;
};

/**
 * 测试用例：
 * console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
 */

/**
 * 本题核心： 动态规划
 *
 * 反思：
 * 1、状态转移方程：f(i) = max(f(i - 1) + nums[i], nums[i])，
 * f(i)表示遍历到当前位置得到的最大子序列和
 */