/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针
 * 指向链表中下一个结点，而左子指针始终为 null 。展开后的单链
 * 表应该与二叉树 先序遍历 顺序相同。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 二叉树展开为链表
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return root;
    }

    const _left = root.left;
    const _right = root.right;
    let _root = root;
    
    const preorderTraversal = (root) => {
        if (!root) {
            return;
        }

        _root.left = null;
        _root.right = new TreeNode(root.val);
        _root = _root.right;

        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }

    preorderTraversal(_left);
    preorderTraversal(_right);

    return root;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(5, 
    new TreeNode(4,
        new TreeNode(11, 
            new TreeNode(7),
            new TreeNode(2)
        ),
    ), 
    new TreeNode(8, 
        new TreeNode(13),        
        new TreeNode(8,
            null, 
            new TreeNode(1)
    ))
);

/**
 * 测试用例
 * console.log(JSON.stringify(flatten(root)));
 */

/**
 * 本题核心：递归
 * 
 * 若要在原地替换节点，需要提前将左右子树存起来再递归
 */
