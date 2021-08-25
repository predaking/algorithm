/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 */

/**
 * @description 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let index = 0;

	if (!nums1.length) {
		nums1.push(...nums2);
	}
	else {
		for (let i = 0; i < nums1.length; i++) {
			for (; index < nums2.length; index++) {
				if (nums2[index] >= nums1[i]) {
					if (i === nums1.length - 1 || nums2[index] <= nums1[i + 1]) {
						nums1.splice(i + 1, 0, nums2[index]);
					} else {
						break;
					}
				} else {
					nums1.splice(i, 0, nums2[index]);
				}
			}
		}
	}

	var len = nums1.length;

	if (len % 2) {
		return nums1[((len - 1) / 2)];
	} else {
		return (nums1[len / 2] + nums1[(len / 2 - 1)]) / 2;
	}
};

/**
 * 测试用例：
 * console.log(findMedianSortedArrays([2, 7], [8, 11, 12]));
 */

/**
 * 本题核心： 归并排序
 *
 * 反思：即使不用归并排序也应该启用第三个数组辅助排序，这样就不会用到splice方法，splice方法性
 * 能低下；若用归并排序则时间复杂度为O(nlogn)
 */
