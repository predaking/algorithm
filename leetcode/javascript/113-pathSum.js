/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
 * 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 路径总和 II
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = [];
    let tmp = [];

    const backTrack = (root, sum, parent) => {
        if (!root) {
            if (sum === 0 && parent && (parent.left === parent.right)) {
                res.push([...tmp]);
            }
            return;
        }

        const len = root.left === root.right ? 1 : 2;
    
        for (let i = 0; i < len; ++i) {
            sum -= root.val;
            tmp.push(root.val);
            backTrack(i === 0 ? root.left : root.right, sum, root);
            sum += root.val;
            tmp.pop();
        }
    }

    backTrack(root, targetSum);

    return res;
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

const root1 = new TreeNode(1, new TreeNode(2));

/**
 * 测试用例
 * console.log(pathSum(root, 22));
 */

/**
 * 本题核心：回溯
 * 
 * 写法比较笨，但思路是正的，需要特别注意叶子结点处不要重复添加
 */