/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
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
const Node2 = new TreeNode(2, Node1, null);
const Node3 = new TreeNode(1, null, Node2);

/**
 * @description 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
	const res = [];

	const preorder = (root, res) => {
		if (!root) {
			return;
		}
	
		res.push(root.val);
		preorder(root.left, res);
		preorder(root.right, res);
	}

	preorder(root, res);

	return res;
};

console.log(preorderTraversal(Node3));
