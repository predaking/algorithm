/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 节点的左子树只包含 小于 当前节点的数。节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
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
 * @description 验证二叉搜索树
 * @param {TreeNode} root
 */
var isValidBST = function(root) {

};

/**
 * 测试用例：
 * console.log(isValidBST('aabcc', 'dbbca', 'aadbbcbcac')); // true
 */

/**
 * 本题核心： 动态规划
 * 
 * 反思：f(i, j)表示s1的前i个字符和s2的前j个字符是否能交错组成s3的前i+j个字符。
 * 状态转移方程为：f(i, j) = f(i - 1, j) && s1[i - 1] === s3[i + j - 1] ||
 * f(i, j - 1) && s2[j - 1] === s3[i + j - 1]。这里的f(i, j)只与f(i - 1, j)
 * 和f(i, j - 1)有关，可以将二维数组优化为一维滚动数组。
 */