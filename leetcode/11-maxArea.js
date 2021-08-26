/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直
 * 线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成
 * 的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 */

/**
 * @description 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var area = 0;

	for (let i = 0; i < height.length; ++i) {
		var width = Math.ceil(area / height[i]);

		for (let j = i + width; j < height.length; ++j) {
			area = Math.max(area, (j - i) * Math.min(height[i], height[j]));
		}
	}

	return area;
};

/**
 * 测试用例：
 * console.log(maxArea([1,8,6,2,5,4,8,3,7]));
 */

/**
 * 本题核心： 双指针
 *
 * 反思：无脑双层循环一定能解决问题，但基本会超时，在此基础上可在每次循环时优化次数，但是最终的
 * 时间复杂度依然是O(n^2);
 *
 * 另外，for循环推荐++i代替i++（java中i++会比++i多一步复制i的过程）；
 *
 * 为何双指针为最优解？因为容积受最低的Y坐标影响，因此如果一直移动Y坐标高的容积只会越来越小，也
 * 就是中间所有的情况得到的容积只会更小没有更大
 */

/**
 * @description 推荐做法
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var area = 0;

	var leftIndex = 0;
	var rightIndex = height.length - 1;

	while (leftIndex <= rightIndex) {
		var width = rightIndex - leftIndex;
		var minHeight = 0;

		if (height[leftIndex] >= height[rightIndex]) {
			minHeight = height[rightIndex--];
		} else {
			minHeight = height[leftIndex++];
		}

		area = Math.max(area, width * minHeight);
	}

	return area;
};
