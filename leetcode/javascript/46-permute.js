/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

/**
 * @description 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const res = [];
	const len = nums.length;
	let cur = [];

	const dfs = () => {
		if (cur.length === len) {
			res.push([...cur]);
		}

		for (let i = 0; i < len; ++i) {
			if (!cur.includes(nums[i])) {
				cur.push(nums[i]);
				dfs(i + 1);
				cur.pop();
			}
		}
	}

	dfs();

	return res;
};

/**
 * @description 全排列(无标记)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const res = [];
	const len = nums.length;
	let cur = [];

	const dfs = start => {
		if (start === len) {
			res.push([...nums]);
		}

		for (let i = start; i < len; ++i) {
			[nums[i], nums[start]] = [nums[start], nums[i]];
			dfs(start + 1);
			[nums[i], nums[start]] = [nums[start], nums[i]];
		}
	}

	dfs(0);

	return res;
};

/**
 * 测试用例：
 * console.log(permute([1, 5, 7]));
 */

/**
 * 本题核心： 回溯
 *
 * 反思：一种根据数组长度判断截止条件，循环时过滤重复数字（可以采用标记法）；一种根据下标判断，
 * 下个下标并非用循环下标而是上个下标直接加一
 */
