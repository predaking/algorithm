/**
 * 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < 
 * nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1]
 * , ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下
 * 标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 
 * 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来
 * 判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 
 * target ，则返回 true ，否则返回 false 。
 * 你必须尽可能减少整个操作步骤。
 */

/**
 * @description 搜索旋转排序数组 II
 * @param {number[]} nums
 * @param {number} target
 */
var search = function (nums, target) {
    const len = nums.length;

    let start1 = 0;
    let end1 = 0;
    let start2 = 0;
    let end2 = len - 1;

    for (let i = 0; i < len; ++i) {
        if (i + 1 < len) {
            if (nums[i] > nums[i + 1]) {
                end1 = i;
                start2 = i + 1;
            }
        }
    }

    if (
        target === nums[end1] 
        || target === nums[start2]
        || target === nums[start1]
        || target === nums[end2]
    ) {
        return true;
    }

    if (end1 !== 0 && (target > nums[end1] || target < nums[start2])) {
        return false;
    }

    if (target > nums[start1]) {
        let left = start1;
        let right = end1;
        let mid = Math.floor((left + right) / 2);
        while (left < right) {
            if (target > nums[mid]) {
                left = mid + 1;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                return true;
            }
            mid = Math.floor((left + right) / 2);
        }
    }

    if (target > nums[start2]) {
        let left = start2;
        let right = end2;
        let mid = Math.floor((left + right) / 2);
        while (left < right) {
            if (target > nums[mid]) {
                left = mid + 1;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                return true;
            }
            mid = Math.floor((left + right) / 2);
        }
    }

    return false;
};

/**
 * 测试用例：
 * console.log(search([1, 3, 5], 3))
 */

/**
 * 本题核心：二分查找
 *
 * 反思：可理解为两段二分，需要遍历一次找到开始降序的位置，之后进行两次
 * 二分查找即可。过程中特别需要注意边界的处理。另一种方法为直接二分，
 * 之后确定哪边无序，如果在有序的这边，则正常二分查找即可；如果在无序的
 * 一边，则缩小边界继续二分。
 */
