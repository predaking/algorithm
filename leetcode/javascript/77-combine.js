/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */

/**
 * @description 组合
 * @param {number} n
 * @param {number} k
 */
var combine = function(n, k) {
    const res = [];
    let arr = [];

    const backTrack = (start) => {
        if (arr.length == k) {
            res.push([...arr]);
            return;
        }

        for (let i = start; i <= n; ++i) {
            arr.push(i);
            backTrack(i + 1);
            arr.pop();
        }
    }

    backTrack(1);

    return res;
};

console.log(combine(4, 2));

/**
 * 测试用例：
 * console.log(minWindow('cabwefgewcwaefgcf', 'cae'));
 */

/**
 * 本题核心：回溯
 *
 * 反思：回溯固定套路：回溯方法中进行循环，初始值动态传入，在顶部进行
 * 终止条件的处理，回溯后紧接着回退操作。注意不要将引用传入结果。
 */