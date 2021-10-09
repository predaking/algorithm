/**
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 假设你总是可以到达数组的最后一个位置。
 */

/**
 * @description 跳跃游戏 II
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	if (nums.length === 1) {
		return 0;
	}

	const len = nums.length;
	let count = 0;
	let maxIndex = 0;
	let lastIndex = 0;

	for (let i = 0; i < len - 1; ++i) {
		maxIndex = Math.max(maxIndex, nums[i] + i);
		if (lastIndex === i) {
			++count;
			lastIndex = maxIndex;
		}
	}

	return count;
};

/**
 * 测试用例：
 * console.log(jump([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0]));
 */

/**
 * 本题核心： 贪心
 *
 * 反思：每次记录当前可跳跃的最远位置，并在该范围内继续寻找下一跳，到达最远位置时更新记录并增加
 * 跳数
 */
