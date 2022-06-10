/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode (val, next) {
// 	this.val = (val===undefined ? 0 : val);
// 	this.next = (next===undefined ? null : next)
// }
//
// var node3 = new ListNode(5, null);
// var node2 = new ListNode(3, node3);
// var node1 = new ListNode(2, node2);
//
// var node4 = new ListNode(4, null);

/**
 * @description 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (!l1) {
		return l2;
	}

	if (!l2) {
		return l1;
	}

	// l1指针会变，所以赋值了给head1
	let head1 = l1;
	let parent = new ListNode(-1, head1);
    let res = null;

    // 遍历l2
	while (l2) {
		// l2也会变，所以提前把下个值存到tmp
		let tmp = l2.next;

		// l2 < 当前l1时
		if (l2.val < head1.val) {
			// 插入到l1父节点与head1节点中间
			l2.next = parent.next;
			parent.next = l2;
			// 此时为了保持parent紧随head1其后，需要往前移动一位
			parent = parent.next;
			// 此时的parent所在位置就是变化了的l1的头节点，所以需要将头节点存到结果res中
            if (!res) {
                res = parent;
            }
		} else {
			// l2 >= 当前l1时 判断head1的下个节点是否为空。空则直接将l2挂到尾部并将next
			// 置为null，否则循环遍历比较l2是否比l1下一个节点还大
            while (head1.next) {
				// 找到比l2大的下个节点了，插入到head1与l2下个节点之间，并且同时向前移动
				// head1和parent一位，也即新插入的l2此时和head1是重合的节点，结束当前
				// 遍历；没找到则继续向前移动head1与parent节点
                if (l2.val < head1.next.val) {
                    l2.next = head1.next;
                    head1.next = l2;
                    head1 = head1.next;
                    parent = parent.next;
                    break;
                }
                head1 = head1.next;
                parent = parent.next;
			}
            if (!head1.next) {
				head1.next = l2;
				l2.next = null;
			}
		}

        // 把存到l2下个节点的变量重新赋值给l2
		l2 = tmp;
	}

	// l1的头节点如果有更小的替代，则返回替代后的头节点，否则直接返回l1即可
	return res || l1;
};

/**
 * 测试用例：
 * console.log(JSON.stringify(mergeTwoLists(node1, node4)));
 */

/**
 * 本题核心： 链表、递归
 *
 * 反思：合并链表操作最好新建一个新的来存放，操作起来更容易
 */

/**
 * @description 合并两个有序链表(新链表)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (!l1) {
		return l2;
	}

	if (!l2) {
		return l1;
	}

	let head = new ListNode(-1, null);
	let cur = head;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}

		cur = cur.next;
	}

	cur.next = l1 ? l1 : l2;

	return head.next;
}

/**
 * @description 合并两个有序链表(递归)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (!l1) {
		return l2;
	}

	if (!l2) {
		return l1;
	}

	if (l1.val <= l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	}

	l2.next = mergeTwoLists(l1, l2.next);
	return l2;
}
