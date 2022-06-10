/**
 * 给定一个二叉树，返回它的 后序 遍历。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode (val, left, right) {
  	this.val = (val === undefined ? 0 : val);
  	this.left = (left === undefined ? null : left);
  	this.right = (right === undefined ? null : right);
}

const Node1 = new TreeNode(3, null, null);
const Node2 = new TreeNode(2, null, Node1);
const Node3 = new TreeNode(1, null, Node2);

/**
 * @description 二叉树的后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
	const res = [];

	const postorder = (root, res) => {
		if (!root) {
			return;
		}

		postorder(root.left, res);
		postorder(root.right, res);
		res.push(root.val);
	}

	postorder(root, res);

	return res;
};

/**
 * 测试用例：
 * console.log(preorderTraversal(Node3));
 */

/**
 * 本题核心： 递归、二叉树遍历
 *
 * 反思：二叉树遍历递归单独写成函数更好处理
 */
