/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 */

/**
 * @description 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) {
        return true;
    }

    // 尾部为0的情况比较特殊，所以直接去掉后即可统一处理
    if (nums[nums.length - 1] === 0) {
        nums.pop();
    }

    var canJumpToEnd = true;

    for (let i = nums.length - 1; i >= 0; --i) {
        if (nums[i] === 0) {
            for (j = i; j >= 0; --j) {
                canJumpToEnd = false;
                if (nums[j] > i - j) {
                    canJumpToEnd = true;
                    break;
                }
            }
        }

        if (!canJumpToEnd) {
            break;
        }
    }

    return canJumpToEnd;
};

/**
 * 测试用例：
 * console.log(canJump([3, 2, 1, 0, 5])) 
 */

/**
 * 本题核心： 无
 *
 * 反思：能否成功跳到结尾决定于是否能跨过其中的0点。不过时间复杂度会达到O(n^2)
 */

/**
 * @description 贪心（官方解法）
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var longestPos = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (i <= longestPos) {
            longestPos = Math.max(longestPos, nums[i] + i);
            if (longestPos >= nums.length - 1) {
                return true;
            }
        }
    }
    return false;
};







