/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，
 * 返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 */

/**
 * @description 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;
    let left = 0;
    let right = len - 1;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
        if (nums[mid] === target) {
            return mid;
        }

        if (target < nums[mid]) {
            right = mid - 1;
            if (right < left) {
                right = left;
            }
        }

        if (target > nums[mid]) {
            left = mid + 1;
            if (left > right) {
                left = right;
            }
        }

        mid = Math.floor((left + right) / 2);
    }

    if (left === right && target === nums[mid]) {
        return mid;
    }

    if (target < nums[mid]) {
        return mid;
    }

    return mid + 1;
};

/**
 * 测试用例：
 * console.log(searchInsert([1, 3], 2));
 */

/**
 * 本题核心： 二分法
 *
 * 反思：结果注意好下标就好
 */
