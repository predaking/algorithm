/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 * 示例 1：
 *
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * [1,2,1],
 * [2,1,1]]
 */

/**
 * @description 全排列 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	if (nums.length === 1) {
		return [nums];
	}

	const len = nums.length;
	const res = [];
	const cur = [];

	nums.sort((a, b) => a - b);

	const backTrack = used => {

		if (cur.length === len) {
			res.push([...cur]);
			return;
		}

		for (let i = 0; i < len; ++i) {
			if (i + 1 < len && nums[i] === nums[i + 1] && !used[i + 1]) {
				continue;
			}

			if (used[i]) {
				continue;
			}

			cur.push(nums[i]);
			used[i] = true;
			backTrack(used);
			cur.pop();
			used[i] = false;
		}
	}

	backTrack([]);

	return res;
};

/**
 * 测试用例：
 * console.log(permuteUnique([1, 1, 2, 2]));
 */

/**
 * 本题核心： 回溯
 *
 * 反思：过滤重复的值还是要用标记方法的
 */
