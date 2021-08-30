/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们
 * 的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 示例：
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */

/**
 * @description 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	let len = nums.length;

	if (len === 3) {
		return nums.reduce((a, b) => a + b);
	}

	let arr = nums.sort((a, b) => a - b);

	let closestSum = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < len - 2; ++i) {
		let leftIndex = i + 1;
		let rightIndex = len - 1;

		const restSum = target - arr[i];

		let tmpSum = arr[leftIndex] + arr[rightIndex];

		while (rightIndex > leftIndex) {
			tmpSum = arr[leftIndex] + arr[rightIndex];

			if (tmpSum === restSum) {
				return target;
			} else if (tmpSum < restSum) {
				++leftIndex;
			} else {
				--rightIndex;
			}

			// 每次移动完指针都需要记录一次最接近值
			if (Math.abs(tmpSum + arr[i] - target) <= Math.abs(closestSum - target)) {
				closestSum = tmpSum + arr[i];
			}
		}

		if (Math.abs(tmpSum + arr[i] - target) <= Math.abs(closestSum - target)) {
			closestSum = tmpSum + arr[i];
		}
	}

	return closestSum;
};

/**
 * 测试用例：
 * console.log(threeSumClosest([1, 2, 5, 10, 11], 12));
 */

/**
 * 本题核心： 双指针
 *
 * 反思：遍历重复的值可以跳过
 */
