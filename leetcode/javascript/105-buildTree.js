/**
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的
 * 先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 从前序与中序遍历序列构造二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const len = preorder.length;
    const res = [];

    if (!len) {
        return res;
    }

    const _build = (index, _left, _right) => {
        let left = [];
        let right = [];
        const root = preorder[0];
    
        for (let i = 0; i < len; ++i) {
            if (inorder[i] === root) {
                res[0] = root;
                left = inorder.slice(0, i);
                right = inorder.slice(i + 1);
            }
        }
    }

    _build(0, left, right);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));