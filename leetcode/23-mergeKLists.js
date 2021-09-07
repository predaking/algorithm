/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode (val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }
//
// var node1_1 = new ListNode(5, null);
// var node1_2 = new ListNode(4, node1_1);
// var node1_3 = new ListNode(1, node1_2);
//
// var node2_1 = new ListNode(4, null);
// var node2_2 = new ListNode(3, node2_1);
// var node2_3 = new ListNode(1, node2_2);
//
// var node3_1 = new ListNode(6, null);
// var node3_2 = new ListNode(2, node3_1);

/**
 * @description 合并K个升序链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let res = null;

    const mergeTwoLists = function (l1, l2) {
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

    for (let i = 0; i < lists.length; ++i) {
        res = mergeTwoLists(res, lists[i]);
    }

    return res;
};

/**
 * 测试用例：
 * console.log(JSON.stringify(mergeKLists([node1_3, node2_3, node3_2])));
 */

/**
 * 本题核心： 递归、分治、二路归并
 *
 * 反思：涉及多个元素的算法可以多往分治法上考虑
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const len = lists.length;

    if (!len) {
        return null;
    }

    const mergeTwoLists = function (l1, l2) {
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


    if (len === 1) {
        return lists[0];
    }

    if (len === 2) {
        return mergeTwoLists(lists[0], lists[1]);
    }

    let left = mergeKLists(lists.slice(0, Math.floor(len / 2)));
    let right = mergeKLists(lists.slice(Math.floor(len / 2)));

    return mergeTwoLists(left, right);
};
