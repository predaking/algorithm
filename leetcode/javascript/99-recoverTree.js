/**
 * 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改
 * 变其结构的情况下，恢复这棵树 。
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
 * @description 恢复二叉搜索树
 * @param {TreeNode} root
 */
var recoverTree = function(root) {
    const stack = [];
    let x, y = null;
    let prevNode = null;
    const inOrderTraversal = (root) => {
        if (!root) {
            return root;
        }

        while (root || stack.length) {
            while (root) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();

            if (prevNode && prevNode.val > root.val) {
                y = root;

                if (!x) {
                    x = prevNode;
                } else break;
            }

            prevNode = root;
            root = root.right;
        }

        const tmp = x.val;
        x.val = y.val;
        y.val = tmp;
    }

    inOrderTraversal(root);
    return root;
};

/**
 * 测试用例：
 * console.log(recoverTree(node)); // true
 */

/**
 * 本题核心：隐式中序遍历
 * 
 * 反思：利用迭代的方式进行隐式中序遍历，在找到两次逆序的节点后，交换这两个节点的值。
 */