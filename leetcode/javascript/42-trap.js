/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * 示例 1：
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单
 * 位的雨水（蓝色部分表示雨水）。
 */

/**
 * @description 接雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	if (!height.length) {
		return 0;
	}

	const len = height.length;

	let res = 0;
	let left = 0;
	let right = len - 1;
	let maxOfLeft = height[left];
	let maxOfRight = height[right];

	while (left < right) {
		if (height[left] <= height[right]) {
			maxOfLeft = Math.max(maxOfLeft, height[left]);
			res += (maxOfLeft - height[left]);
			++left;
		} else {
			maxOfRight = Math.max(maxOfRight, height[right]);
			res += (maxOfRight - height[right]);
			--right;
		}
	}

	return res;
};

/**
 * 测试用例：
 * console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]));
 */

/**
 * 本题核心： 双指针、动态规划
 *
 * 反思：左右双向逼近，始终寻找遍历过的最高的板子
 */
