/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ...,
 * nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变
 * 为 [4,5,6,7,0,1,2] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回
 * 它的下标，否则返回 -1 。
 */

/**
 * @description 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 。。。
    return nums.indexOf(target);
};

/**
 * @description 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   const len = nums.length;
   let left = 0;
   let right = len - 1;
   let mid = 0;

   while (left < right) {
       mid = Math.floor((left + right) / 2);

       if (target === nums[mid]) {
           return mid;
       }

       if (target < nums[mid]) {
           if (nums[mid] >= nums[left] && target < nums[left]) {
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }

       if (target > nums[mid]) {
           if (nums[mid] <= nums[right] && target > nums[right]) {
               right = mid - 1;
           } else {
               left = mid + 1;
           }
       }
   }

   if (left === right && nums[left] === target) {
       return left;
   }

   return -1;
};

/**
 * 测试用例：
 * console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
 */

/**
 * 本题核心： 二分法
 *
 * 反思：本题目的是想让O(logn)时间复杂度下实现，所以会想到二分法，需要注意分情况确认区间，并做
 * 好mid值正确变化，且注意边界条件
 */
