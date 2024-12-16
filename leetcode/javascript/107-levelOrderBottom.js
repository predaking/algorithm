/**
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）


 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的层序遍历 II
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return [];
    }

    const res = [];
    const quene = [[root]];

    while (quene.length) {
        const cur = quene.pop();
        const tmp = [];
        const next = [];
        for (let i = 0; i < cur.length; ++i) {
            tmp.push(cur[i].val);
            cur[i].left && next.push(cur[i].left);
            cur[i].right && next.push(cur[i].right);
        }
        if (next.length) {
            quene.push(next);
        }
        res.push(tmp);
    }

    return res.reverse();
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = {
    val: 3,
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
}

/**
 * 测试用例
 * console.log(levelOrderBottom(root))
 */

/**
 * 本题核心：队列
 * 
 * 总觉得翻转结果的方式有些讨巧了，没有实现真正意义上的
 * 自底向上遍历
 */