/**
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的
 * 不同 二叉搜索树 。可以按 任意顺序 返回答案。
 * 
 * 示例 1：
 * 输入：n = 3
 * 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],
 * [3,2,null,1]]
 * 
 * 示例 2：
 * 输入：n = 1
 * 输出：[[1]]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 不同的二叉搜索树 II
 * @param {number} n
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }

    const create = (left, right) => {
        const arr = [];
        if (left > right) {
            arr.push(null);
            return arr;
        }

        for (let i = left; i <= right; ++i) {
            const leftTrees = create(left, i - 1);
            const rightTrees = create(i + 1, right);

            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    const node = new TreeNode(i, leftTree, rightTree);
                    arr.push(node);
                }
            }
        }

        return arr;
    }

    return create(1, n);
};

/**
 * 测试用例：
 * console.log(generateTrees(3));
 */

/**
 * 本题核心：回溯
 *
 * 反思：总的来说仍然是回溯的思想，然而需要注意到的技巧是添加节点的时候
 * 需要遍历左右子树的所有情况，而不是单纯的添加节点。思路优先于代码实现。
 */