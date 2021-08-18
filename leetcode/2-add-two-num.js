/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头
 */

/**
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
// 	this.val = (val === undefined ? 0 : val)
// 	this.next = (next === undefined ? null : next)
// }
//
// var lNode1_1 = new ListNode(9, null);
// var lNode1_2 = new ListNode(9, lNode1_1);
// var lNode1_3 = new ListNode(9, lNode1_2);
// var lNode1_4 = new ListNode(9, lNode1_3);
// var lNode1_5 = new ListNode(9, lNode1_4);
// var lNode1_6 = new ListNode(9, lNode1_5);
// var lNode1_7 = new ListNode(9, lNode1_6);
//
// var lNode2_1 = new ListNode(9, null);
// var lNode2_2 = new ListNode(9, lNode2_1);
// var lNode2_3 = new ListNode(9, lNode2_2);
// var lNode2_4 = new ListNode(9, lNode2_3);

/**
 * @description 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var head = new ListNode(0, {});
	var needCarry = false;

	var res = head;

	while (l1 || l2) {
		var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

		if (needCarry) {
			sum += 1;
		}

		if (sum >= 10) {
			head.val = sum - 10;
			needCarry = true;
		} else {
			head.val = sum;
			needCarry = false;
		}

		l1 = l1 && l1.next;
		l2 = l2 && l2.next;

		if (!l1 && !l2) {
			head.next = null;
		} else {
			head.next = {};
			head = head.next;
		}
	}

	// 加法计算一定记得最后判断需不需要进位
	if (needCarry) {
		head.next = {
			val: 1,
			next: null
		}
	}

	return res;
};

/**
 * 测试用例：
 * console.log(JSON.stringify(addTwoNumbers(lNode1_7, lNode2_4)));
 */

/**
 * 本题核心： 两个倒序链表做加法正好可以同时遍历相加
 *
 * 反思：主代码实例化链表节点处理起来比普通对象更方便
 */
