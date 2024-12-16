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
    if (!preorder.length) {
        return null;
    }

    const _build = (list) => {
        if (!list.length) {
            return null;
        }
    
        let left = [];
        let right = [];
        const rootValue = preorder.shift();
    
        for (let i = 0; i < list.length; ++i) {
            if (list[i] === rootValue) {
                left = list.slice(0, i);
                right = list.slice(i + 1);
            }
        }

        return new TreeNode(rootValue, _build(left), _build(right));
    }

    return _build(inorder);
};

function TreeNode (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 测试用例
 * console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
 */

/**
 * 本题核心：递归
 * 
 * 要求输出树形数据结构其实是最简单的，如果需要将结果存放到数组中，
 * 则需要多增加一个index参数，并且在合适的位置放入其左子树与右子树
 */