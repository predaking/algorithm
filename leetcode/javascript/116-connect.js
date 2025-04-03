/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 *
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 
 * 指针设置为 NULL。
 * 
 * 初始状态下，所有 next 指针都被设置为 NULL。
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @description 填充每个节点的下一个右侧节点指针
 * @param {_Node} root
 */
var connect = function(root) {
    if (!root) {
        return null;
    }
    const levelTraversal = (roots) => {
        const len = roots.length;
        for (let i = 0; i < len; ++i) {
            if (i === len - 1) {
                roots[i].next = null;
            } else {
                roots[i].next = roots[i + 1];
            }
        }
        if (!roots[0].left) {
            return;
        }
        levelTraversal(roots.map(_root => [_root.left, _root.right]).flat());
    }
    levelTraversal([root]);
    return root;
};

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
            next: null
        },
        right: {
            val: 5,
            left: null,
            right: null,
            next: null
        },
        next: null
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
            next: null
        },
        right: {
            val: 7,
            left: null,
            right: null,
            next: null
        },
        next: null
    },
    next: null
};

/**
 * 测试用例：
 * console.log(connect(root));
 */

/**
 * 本题核心：层级遍历
 *
 * 反思：注意控制递归退出时机，因是完美二叉树，所以任意一个节点的
 * 左子树或者右子树为空证明已遍历到底
 */