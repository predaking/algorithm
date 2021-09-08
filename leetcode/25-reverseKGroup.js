/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 进阶：
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var node1 = new ListNode(5, null);
var node2 = new ListNode(4, node1);
var node3 = new ListNode(3, node2);
var node4 = new ListNode(2, node3);
var node5 = new ListNode(1, node4);

/**
 * @description K 个一组翻转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
	if (k === 1) {
		return head;
	}

};

console.log(JSON.stringify(reverseKGroup(node5, 2)));
