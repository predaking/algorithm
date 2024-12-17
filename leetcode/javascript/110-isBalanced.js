/**
 * 给定一个二叉树，判断它是否是平衡二叉树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    const calcDepth = (root) => {
        if (!root) {
            return 0;
        }
    
        return Math.max(calcDepth(root.left) + 1, calcDepth(root.right) + 1)
    }

    const _isBalance = (root) => {
        if (!root) {
            return true;
        }

        const res = Math.abs(calcDepth(root.left) - calcDepth(root.right)) < 2;

        return res && _isBalance(root.left) && _isBalance(root.right);
    }

    return _isBalance(root);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(1, 
    new TreeNode(2,
        new TreeNode(3, 
            new TreeNode(4)
        ),
    ), 
    new TreeNode(2, 
        null,        
        new TreeNode(3,
            null, 
            new TreeNode(4)
    ))
);

/**
 * 测试用例
 * console.log(isBalanced(root));
 */

/**
 * 本题核心：递归
 * 
 * 看来比如有两个递归子函数了，一个用于计算子树高度，
 * 一个用于递归判断每颗子树是否平衡
 */
