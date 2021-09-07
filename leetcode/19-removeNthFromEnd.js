/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
// 	this.val = (val===undefined ? 0 : val)
// 	this.next = (next===undefined ? null : next)
// }
//
// var node1 = new ListNode(2, null);
// var head = new ListNode(1, node1);

/**
 * @description 删除链表的倒数第 N 个结点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	if (!head.next) {
		return null;
	}

	let parentHead = new ListNode(0, head);
	let forwardIndex = head;
	let behindParentIndex = parentHead;
	let behindIndex = behindParentIndex.next;

	for (let i = 0; i < n; ++i) {
		forwardIndex = forwardIndex.next;
	}

	while (forwardIndex) {
		forwardIndex = forwardIndex.next;
		behindIndex = behindIndex.next;
		behindParentIndex = behindParentIndex.next;
	}

	behindParentIndex.next = behindIndex.next;

	return parentHead.next;
};

/**
 * 测试用例：
 * console.log(removeNthFromEnd(head, 2));
 */

/**
 * 本题核心： 一次遍历、前后指针（快慢指针）
 *
 * 反思：删除型链表在头部补个节点更利于操作
 */
