/**
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
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
 * @description 相同的树
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    } else {
        if (!p || !q) {
            return false;
        }
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val === q.val;
};

/**
 * const p = {
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: null
}

const q = {
    val: 1,
    left: null,
    right: {
        val: 1,
        left: null,
        right: null
    }
}
 */

/**
 * 测试用例：
 * console.log(isSameTree(p, q)); // false
 */

/**
 * 本题核心：递归
 * 
 * 反思：左子树与右子树相同且节点值相同意味着两棵树等价，因此可利用递归判断
 * 截止条件为两棵树均为空，或者其中一棵树为空
 */