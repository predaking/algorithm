/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @description 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums.length) {
         return 0;
     }

 	let head = 0;
 	let index = 0;

 	while (!head && head !== 0 && index < nums.length) {
         if (nums[index] === val) {
             head = index;
             break;
         }
         ++index;
 	}

 	for (let i = index; i < nums.length; ++i) {
 		if (nums[i] === val) {
 			[nums[index], nums[i]] = [nums[i], nums[index]];
 			++index;
 		}
 	}

 	nums.splice(head, index - head);

 	return nums.length;
};

/**
 * 测试用例：
 * console.log(removeElement([1, 3, 3, 2, 2, 3, 5, 7, 3, 3, 3, 3, 3, 9], 3));
 */

/**
 * 本题核心： 快慢指针
 *
 * 反思：实现空间复杂度O(1)基本是在原数组中交换位置
 */
