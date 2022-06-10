/**
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有
 * 可以使数字和为目标数 target 的唯一组合。
 *
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
 *
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 */

/**
 * @description 组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (!candidates.length) {
        return [];
    }

    const len = candidates.length;
    const res = [];
    const cur = [];
    let sum = 0;

    candidates.sort((a, b) => a - b);

    const backTrack = sum => {
        if (sum === target) {
            res.push([...cur]);
        }

        for (let i = 0; i < len; ++i) {
            if (candidates[i] < cur[cur.length - 1]) {
                continue;
            }

            cur.push(candidates[i]);

            sum += candidates[i];

            if (sum > target) {
                cur.pop();
                sum -= candidates[i];
                break;
            }

            backTrack(sum);
            cur.pop();
            sum -= candidates[i];
        }
    }

    backTrack(sum);

    return res;
};

/**
 * 测试用例：
 * console.log(combinationSum([2, 3, 6, 7], 7));
 */

/**
 * 本题核心： 深度优先搜索（回溯）
 *
 * 反思：dfs相关的算法需要注意剪枝，剪枝的前提基本会涉及排序，另需要注意边界的处理，循环遍历
 * 是需要写到回溯方法里面的
 */
