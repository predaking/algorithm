/**
 * 976. 三角形的最大周长
 * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
 * 如果不能形成任何面积不为零的三角形，返回 0。
 *
 * 3 <= A.length <= 10000
 * 1 <= A[i] <= 10^6
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    var largestPerimeter = 0;
    // 快排
    nums.sort((n1, n2) => n2 - n1);
    for (var i = 0; i < nums.length - 2; i++) {
        // 两小边大于第三边即可
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            largestPerimeter = nums[i] + nums[i + 1] + nums[i + 2];
            break;
        }
    }
    return largestPerimeter;
};
