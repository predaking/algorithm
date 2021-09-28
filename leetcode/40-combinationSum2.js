/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 
 * target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 注意：解集不能包含重复的组合。 
 */

/**
 * @description 组合总和 II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	if (!candidates.length) {
        return [];
    }

    const len = candidates.length;
    const res = [];
    const cur = [];
    let sum = 0;

    candidates.sort((a, b) => a - b);

    const backTrack = (sum, index) => {
        if (sum === target) {
            res.push([...cur]);
        }

        for (let i = index; i < len; ++i) {
            if (candidates[i] === candidates[i - 1] && i !== index) {
                continue;
            }

            cur.push(candidates[i]);
			curIndex = i;

            sum += candidates[i];

            if (sum > target) {
                cur.pop();
                sum -= candidates[i];
                break;
            }

            backTrack(sum, i + 1);
            cur.pop();
            sum -= candidates[i];
        }
    }

    backTrack(sum, 0);

    return res;
};

/**
 * 测试用例：
 * console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
 */

/**
 * 本题核心： 深度优先搜索（回溯）
 *
 * 反思：剪枝时可以在循环时将index初始化为当前传入的index，再进行其他处理
 */
