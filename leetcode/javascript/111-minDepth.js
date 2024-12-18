/**
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 二叉树的最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    if (root.left && !root.right) {
        return minDepth(root.left) + 1;
    }

    if (root.right && !root.left) {
        return minDepth(root.right) + 1;
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(2,
    null,
    new TreeNode(3, 
        null,
        new TreeNode(4,
            null,
            new TreeNode(5,
                null,
                new TreeNode(6)
            )
        )
    )
);

/**
 * 测试用例
 * console.log(minDepth(root));
 */

/**
 * 本题核心：递归
 * 
 * 与计算树的高度类似，只不过多了一步特殊情况处理，只有左子树或
 * 只有右子树的情况下的判断
 */


