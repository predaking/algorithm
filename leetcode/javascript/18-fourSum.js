/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件
 * 且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] ：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。
 */

/**
 * @description 四数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    const len = nums.length;

    const arr = nums.sort((a, b) => a - b);

    for (let i = 0; i < len; ++i) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < len; ++j) {
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue;
            }

            let restSum = target - arr[i] - arr[j];
            let left = j + 1;
            let right = len - 1;

            while (left < right) {
                const tmpSum = arr[left] + arr[right];

                if (tmpSum > restSum) {
                    --right;
                    while (arr[right] === arr[right + 1]) {
                        --right;
                    }
                } else if (tmpSum < restSum) {
                    ++left;
                    while (arr[left] === arr[left - 1]) {
                        ++left;
                    }
                } else {
                    res.push([arr[i], arr[j], arr[left], arr[right]]);
                    ++left;
                    while (arr[left] === arr[left - 1]) {
                        ++left;
                    }
                }
            }
        }
    }

    return res;
};

/**
 * 测试用例：
 * console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11));
 */

/**
 * 本题核心： 双指针、回溯（递归）
 *
 * 反思：扩展联想多数之和如何实现
 */
