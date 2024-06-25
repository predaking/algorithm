/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 节点的左子树只包含 小于 当前节点的数。节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
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
 * @description 验证二叉搜索树
 * @param {TreeNode} root
 */
var isValidBST = function(root) {
    const compare = (root, min, max) => {
        if (!root) {
            return true;
        }

        if (root.val >= max || root.val <= min) {
            return false;
        }

        return compare(root.left, min, root.val) && compare(root.right, root.val, max);
    }

    return compare(root, -Infinity, Infinity);
};

/**
 * const node = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 4,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
};
 */

/**
 * 测试用例：
 * console.log(isValidBST(node)); // true
 */

/**
 * 本题核心：递归
 * 
 * 反思：利用搜索树的特性，卡好边界条件，递归即可
 */