/**
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。
 * 同一个节点在一条路径序列中 至多出现一次 。该路径至少包含一个 节点，且不一
 * 定经过根节点。路径和 是路径中各节点值的总和。给你一个二叉树的根节点 root ，
 * 返回其 最大路径和 。
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
 * @description 二叉树中的最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    
};

const root = {
    val: -10,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

console.log(maxPathSum(root));