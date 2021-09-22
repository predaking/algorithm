/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位
 * 置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 进阶：
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 */

/**
 * @description 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const len = nums.length;
    let left = 0;
    let right = len - 1;
    const res = [-1, -1];

    const search = (left, right) => {
        let mid = Math.floor((left + right) / 2);

        while (left < right) {
            if (nums[mid] === target) {
                return mid;
            }

            if (target < nums[mid]) {
                right = mid - 1;
                if (right < left) {
                    right = left;
                }
            }

            if (target > nums[mid]) {
                left = mid + 1;
                if (left > right) {
                    left = right;
                }
            }

            mid = Math.floor((left + right) / 2);
        }

        if (nums[mid] === target) {
            return mid;
        }

        return -1;
    }

    let head = search(left, right);
    while (head > -1) {
        let right = head - 1;
        if (head !== -1) {
            res[0] = head;
        }
        if (right < 0) {
            break;
        }
        head = search(left, right);
    }

    let tail = res[0];
    while (tail > -1) {
        let left = tail + 1;
        if (tail !== -1) {
            res[1] = tail;
        }
        if (left > right) {
            break;
        }
        tail = search(left, right);
    }

    return res;
};

/**
 * 测试用例：
 * console.log(searchRange([1, 2, 3], 1));
 */

/**
 * 本题核心： 二分法
 *
 * 反思：本题技巧性较强，应该充分利用有序这一条件分别找第一个大于等于target的数的位置和第一个
 * 大于target的数下标减一的位置
 */
