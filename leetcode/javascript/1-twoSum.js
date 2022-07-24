/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

/**
 * @description 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = new Map(); // map结构时间复杂度为O(1)
    let res = [];

	// 利用some减少循环次数
    nums.some((val, index) => {
        const anotherIndex = map.get(target - val);
		// 判断时需要注意0的情况
        if (anotherIndex !== undefined) {
            res = [index, anotherIndex];
            return true;
        }
        else {
            map.set(val, index);
        }
    });

    return res;
};

/**
 * 测试用例：
 * console.log(twoSum([2, 7, 15, 11], 9));
 */

/**
 * 本题核心： Map结构时间复杂度为O(1)
 *
 * 反思：无
 */
