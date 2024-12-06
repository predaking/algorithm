/**
 * 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。
 * （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层
 * 之间交替进行）。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 二叉树的锯齿形层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
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

        if ((level - 1) % 2) {
            res[level - 1].unshift(root.val);
        } else {
            res[level - 1].push(root.val);
        }

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
 * console.log(levelOrder(root));
 */

/**
 * 本题核心：广度优先搜索
 * 
 * 因为是锯齿形遍历，所以可以正常遍历之后根据所在层数
 * 的奇偶性决定正序输出还是倒序输出
 */
