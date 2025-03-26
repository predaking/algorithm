/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点
 * 值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返
 * 回 false 。叶子节点 是指没有子节点的节点。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 路径总和
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }

    let _hasPathSum = false;

    const _dfs = (root, sum, parent) => {
        if (sum === targetSum && (!parent.left && !parent.right)) {
            _hasPathSum = true;
            return;
        }

        if (!root) {
            return;
        }

        if (!sum) {
            sum = 0;
        }

        for (let i = 0; i < 2; ++i) {
            sum += root.val;
            _dfs(i === 0 ? root.left : root.right, sum, root);
            sum -= root.val;
        }
    }

    _dfs(root);

    return _hasPathSum;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(5, 
    new TreeNode(4,
        new TreeNode(11, 
            new TreeNode(7),
            new TreeNode(2)
        ),
    ), 
    new TreeNode(8, 
        new TreeNode(13),        
        new TreeNode(4,
            null, 
            new TreeNode(1)
    ))
);

const root1 = new TreeNode(1);

/**
 * 测试用例
 * console.log(hasPathSum(root, 22));
 */

/**
 * 本题核心：递归
 * 
 * 逆向思维很重要，累加式的思路想的复杂了，用了内层递归。
 * 还得处理好边界。下方递减式递归更容易理解
 */

/**
 * @description 递减式递归
 * @param {*} root 
 * @param {*} targetSum 
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }
    targetSum -= root.val;
    if (root.left === root.right) { // root 是叶子
        return targetSum === 0;
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
