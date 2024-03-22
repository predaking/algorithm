/**
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，
 * 原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 * 
 * 示例 1：
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 * 
 * 示例 2：
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 */

/**
 * @description 颜色分类
 * @param {number[]} nums
 */
var sortColors = function (nums) {
    const map = new Map([[0, 0], [1, 0], [2, 0]]);

    for (value of nums) {
        var tmp = map.get(value);
        map.set(value, tmp + 1);
    }

    let index = 0;

    [...map.entries()].forEach((item) => {
        for (let i = 0; i < item[1]; ++i) {
            nums[index++] = item[0];
        }
    });

    return nums;
};

/**
 * 测试用例：
 * console.log(sortColors([2, 0, 2, 1, 1, 0]))
 */

/**
 * 本题核心：计数法
 *
 * 反思：计数法，非计数排序法，构建一个 map 空间，存储012的数量，
 * 之后挨个塞到 nums 中即可。官网也有用单指针双指针的，核心是0放
 * 左边，2放右边。
 */