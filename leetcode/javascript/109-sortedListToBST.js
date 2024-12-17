/**
 * 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为 
 * 平衡二叉搜索树。
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @description 有序链表转换二叉搜索树
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }

    const _build = (head) => {
        if (!head) {
            return null;
        }

        if (!head.next) {
            return new TreeNode(head.val);
        }

        let fast = head;
        let slow = head;
        let _head = head;
        let parent = new ListNode(-1, slow);
        let flag = false;

        while (fast.next && fast.next.next) {
            parent = slow;
            slow = slow.next;
            fast = fast.next.next;
            flag = true;
        }

        if (!flag) {
            _head = null;
        }

        const value = slow.val;
        const _next = slow.next;
        parent && (parent.next = null);
        
        return new TreeNode(value, _build(_head), _build(_next));
    }

    return _build(head);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const head = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))));

/**
 * 测试用例
 * console.log(sortedListToBST(head));
 */

/**
 * 本题核心：快慢指针、递归
 * 
 * 思路简单，关键点在于如何找链表中位数，如何断链，需要注意边界点处理
 */
