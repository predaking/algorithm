/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 对称二叉树
 * @param {TreeNode} root
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    const isSame = (left, right) => {
        if (!left && !right) {
            return true;
        }

        if (!left || !right) {
            return false;
        }

        if (left.val !== right.val) {
            return false;
        }

        return isSame(left.left, right.right) && isSame(left.right, right.left);
    }

    return isSame(root.left, root.right);
};

const root = {
    val: 2,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

/**
 * 测试用例：
 * console.log(isSymmetric(root)); // true
 */

/**
 * 本题核心：递归
 * 
 * 将递归终止条件考虑完善，再进行递归式逻辑与运算
 */
