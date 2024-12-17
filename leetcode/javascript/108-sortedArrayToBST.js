/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 
 * 平衡二叉搜索树。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/** 
 * @description 将有序数组转换为二叉搜索树
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const len = nums.length;
    if (!len) {
        return null;
    }
    
    const _build = (list) => {
        const len = list.length;

        if (!len) {
            return null;
        }

        const mid = Math.floor(len / 2);

        return new TreeNode(list[mid], _build(list.slice(0, mid)), _build(list.slice(mid + 1)));
    }

    return _build(nums);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 测试用例
 * console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
 */

/**
 * 本题核心：递归
 * 
 * 利用有序的特点，直接找到中位数将其设置为当前树的根节点，递归式构建即可
 */
