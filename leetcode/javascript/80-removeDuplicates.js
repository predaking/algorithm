/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，
 * 使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用
 *  O(1) 额外空间的条件下完成。
 */

/**
 * @description 删除有序数组中的重复项 II
 * @param {number[]} nums
 */
var removeDuplicates = function (nums) {
    let count = 0;
    let cur;

    let i = 0;

    while (i < nums.length) {
        if (cur === nums[i]) {
            count++;
        } else {
            count = 1;
            cur = nums[i];
        }
        if (count > 2) {
            nums.splice(i, 1);
            i--;
        }
        i++;
    }

    return nums.length;
};

console.log(removeDuplicates([0, 0, 0, 0, 0]));

/**
 * 测试用例：
 * console.log(removeDuplicates([0, 0, 0, 0, 0]));
 */

/**
 * 本题核心：无
 * 
 * 反思：虽然允许原地修改数组，但是用splice本身也消耗时间了。官方的
 * 快慢指针方式更具技巧性。
 */

/**
 * @description 官方解法
 * @param {number[]} nums
 */
var removeDuplicates = function (nums) {
    const len = nums.length;

    if (len <= 2) {
        return len;
    }

    let slow = 2, fast = 2;

    while (fast < len) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }

    return slow;
};
