/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];

    if (!root) {
        return [];
    }

    const bfs = (root, level) => {
        if (!root) {
            return;
        }

        if (!res[level - 1]) {
            res[level - 1] = [];
        }

        res[level - 1].push(root.val);

        bfs(root.left, level + 1);
        bfs(root.right, level + 1);
    };

    bfs(root, 1);

    return res;
};

const root = {
    val: 1,
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
 * console.log(levelOrder(root));
 */

/**
 * 本题核心：广度优先搜索
 * 
 * 因为需要记录层级，所以不能用队列的方式实现
 */