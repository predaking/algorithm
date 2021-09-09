/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数
 * 组的新长度。
 *
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * @description 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if (nums.length <= 1) {
		return nums.length;
	}

	let leftIndex = 1;
	let rightIndex = 1;

	while (rightIndex < nums.length) {
		if (nums[rightIndex - 1] !== nums[rightIndex]) {
			nums[leftIndex] = nums[rightIndex];
			++leftIndex;
		}
		++rightIndex;
	}

	return nums.slice(0, leftIndex).length;
};

/**
 * 测试用例：
 * console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
 */

/**
 * 本题核心： 快慢指针
 *
 * 反思：数组去重O(1)的实现办法
 */
