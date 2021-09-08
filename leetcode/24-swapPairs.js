/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
// 	this.val = (val === undefined ? 0 : val)
// 	this.next = (next === undefined ? null : next)
// }
//
// var node1 = new ListNode(4, null);
// var node2 = new ListNode(3, node1);
// var node3 = new ListNode(2, node2);
// var node4 = new ListNode(1, node3);

/**
 * @description 两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if (!head || !head.next) {
		return head;
	}

	let parent = new ListNode(-1, head);
	let res = parent;

	while (head) {
		if (!head.next) {
			break;
		}

		let rightNode = head.next;
		let leftNode = head;

		leftNode.next = rightNode.next;
		rightNode.next = leftNode;
		parent.next = rightNode;

		parent = head;
		head = head.next;
	}

	return res.next;
};
/**
 * 测试用例：
 * console.log(swapPairs(node4));
 */

/**
 * 本题核心： 递归
 *
 * 反思：链表节点位置变化特别注意保存某些旧的节点
 */

/**
 * @description 两两交换链表中的节点(递归)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if (!head || !head.next) {
		return head;
	}

	let newHead = head.next;
	head.next = swapPairs(newHead.next);
	newHead.next = head;
	return newHead;
};
