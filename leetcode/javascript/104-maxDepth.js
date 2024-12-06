/**
 * 给定一个二叉树 root ，返回其最大深度。
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径
 * 上的节点数。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const preorderTraversal = (root) => {
        if (!root) {
            return 0;
        }

        return Math.max(preorderTraversal(root.left) + 1, preorderTraversal(root.right) + 1)
    }

    return preorderTraversal(root);
};

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 7,
                left: null,
                right: {
                    val: 8,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 9,
                left: {
                    val: 10,
                    left: null,
                    right: null
                },
                right: null
            }
        },
        right: {
            val: 4,
            left: null,
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 6,
        left: null,
        right: null
    }
};

/**
 * 测试用例：
 * console.log(maxDepth(root));
 */

/**
 * 本题核心：递归、深度优先搜索
 * 
 * 每次递归都将结果 + 1，并取左右子树的最大值
 */