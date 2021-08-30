/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b +
 * c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

/**
 * @description 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let len = nums.length;

	if (len < 3) {
		return [];
	}

	let res = [];

	let arr = nums.sort((a, b) => a - b);

	for (let i = 0; i < len; ++i) {
		if (i > 0 && arr[i] === arr[i - 1]) {
			continue;
		}

		for (let j = i + 1; j < len; ++j) {
			if (j > i + 1 && arr[j] === arr[j - 1]) {
				continue;
			}

			const partSum = arr[i] + arr[j];
			let k = len - 1;

			while (k > j) {
				if (arr[k] + partSum === 0) {
					res.push([arr[i], arr[j], arr[k]])
					break;
				}
				--k;
			}
		}
	}

	return res;
};

/**
 * 测试用例：
 * console.log(threeSum([-1, 0, 1, 2, -1, -4]));
 */

/**
 * 本题核心： 双指针
 *
 * 反思：O(n^3)要想办法至少优化为O(n^2)，充分利用数学计算的技巧改变遍历方向，减少遍历次数
 */

/**
 * @description 双指针法
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let len = nums.length;

	if (len < 3) {
		return [];
	}

	let res = [];

	let arr = nums.sort((a, b) => a - b);

	for (let i = 0; i < len; ++i) {
		if (i > 0 && arr[i] === arr[i - 1]) {
			continue;
		}

		if (arr[i] > 0) {
			break;
		}

		let left = i + 1;
		let right = len - 1;

		while (right > left) {
			let sum = arr[i] + arr[left] + arr[right];

			if (sum === 0) {
				res.push([arr[i], arr[left], arr[right]]);
				++left;
				while (arr[left] === arr[left - 1]) {
					++left;
				}
			}

			else if (sum < 0) {
				// 总数太小就加大左指针
				++left;
				while (arr[left] === arr[left - 1]) {
					++left;
				}
			}

			else {
				// 总数太大就减小右指针
				--right;
				while (arr[right] === arr[right + 1]) {
					--right;
				}
			}
		}
	}

	return res;
};
