/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
 * 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了
 * 应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并
 * 的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 */

/**
 * @description 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let idx = nums1.length - 1;

    if (m === 0) {
        while (j >= 0) {
            nums1[j] = nums2[j];
            j--;
        }
        return nums1;
    }

    while (i >= 0 && j >= 0 && idx >= 0) {
        if (nums2[j] >= nums1[i]) {
            nums1[idx] = nums2[j];
            j--;
        } else {
            if (nums1[i] !== nums1[idx]) {
                nums1[idx] = nums1[i];
                nums1[i] = 0;
            }
            i--;
        }
        idx--;
    }

    while (j >= 0 && idx >= 0) {
        nums1[idx] = nums2[j];
        idx--;
        j--;
    }

    return nums1;
};

/**
 * 测试用例：
 * console.log(merge([2, 0], 1, [1], 1));
 */

/**
 * 本题核心：无
 * 
 * 反思：注意边界处理，注意 num2 剩余数字的处理即可
 */