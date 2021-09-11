/**
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，
 * 组合出下一个更大的整数）。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须 原地 修改，只允许使用额外常数空间。
 */

/**
 * @description 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	let hasPermutation = false;
	let len = nums.length;

	// 冒泡排序
	const sort = function (left) {
		for (let i = left; i < len; ++i) {
			for (let j = i + 1; j < len; ++j) {
				if (nums[i] > nums[j]) {
					[nums[i], nums[j]] = [nums[j], nums[i]];
				}
			}
		}
	}

	for (let i = len - 1; i >= 0; --i) {
		if (i - 1 >= 0) {
			if (nums[i] > nums[i - 1]) {

				let tmp = nums[i - 1];
				// 从右到左首次大于左边时，交换位置
				[nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];

				// 从i开始剩余的数从小到大排序
				sort(i);

				for (let j = i; j < len; ++j) {
					// 寻找可能比旧位置大的，比刚替换后左边的数小的，再次将其（i - 1)位置的
					// 替换
					if (nums[j] > tmp && nums[j] < nums[i - 1]) {
						[nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
						// 替换之后还要保证该位置开始从小到大
                        for (let k = j; k < len; ++k) {
                            if (k + 1 < len && nums[k] > nums[k + 1]) {
                                [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]];
                            }
                        }
						break;
					}
				}

				hasPermutation = true;
				break;
			}
		}
	}

	if (!hasPermutation) {
		nums.sort((val1, val2) => val1 - val2);
	}

	return nums;
};

/**
 * 测试用例：
 * console.log(nextPermutation([1,2,3]));
 */

/**
 * 本题核心： 循环
 *
 * 反思：有些烧脑，其实可以先从右边找到要交换的数之后再翻转即可。也可以递归实现
 */
