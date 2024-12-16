/**
 * 给定两个整数数组 inorder 和 postorder ，
 * 其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，
 * 请你构造并返回这颗 二叉树 。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 从中序与后序遍历序列构造二叉树
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const len = inorder.length;
    if (!len) {
        return null;
    }

    const _build = (list) => {
        const len = list.length;

        if (!len) {
            return null;
        }

        let left = [];
        let right = [];

        const rootValue = postorder.pop();

        for (let i = 0; i < len; ++i) {
            if (list[i] === rootValue) {
                left = list.slice(0, i);
                right = list.slice(i + 1);
                break;
            }
        }

        const _right = _build(right);
        const _left = _build(left);

        return new TreeNode(rootValue, _left, _right);
    }

    return _build(inorder);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 测试用例
 * console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
 */

/**
 * 本题核心：递归
 * 
 * 同105，需要特别注意递归时，先构建右子树
 */