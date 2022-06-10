/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 *
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 * 示例 1：
 * 输入：nums = [1,2,0]
 * 输出：3
 *
 * 示例 2：
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 *
 * 示例 3：
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 */

/**
 * @description 缺失的第一个正数
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	if (!nums.length) {
		return 1;
	}

	const len = nums.length;

	for (let i = 0; i < len; ++i) {
		while (nums[i] > 0 && nums[nums[i] - 1] !== nums[i] && nums[i] < len) {
			[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
		}
	}

	for (let i = 0; i < len; ++i) {
		if (nums[i] === i + 1) {
			continue;
		}
		return i + 1;
	}

	return nums[len - 1] + 1;
};

/**
 * 测试用例：
 * console.log(firstMissingPositive([1, 0, 2]));
 */

/**
 * 本题核心： 数组内部交换
 *
 * 反思：思路来源于桶排序，交换时注意避免死循环
 */
