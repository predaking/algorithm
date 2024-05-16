/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，
 * 使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。你应当 
 * 保留 两个分区中每个节点的初始相对位置。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @description 分隔链表
 * @param {ListNode} head
 * @param {number} x
 */
var partition = function(head, x) {
    var _head = head;
    var parent = {
        val: -1,
        next: head
    }

    var _parent = parent;
    while (_head) {
        var p = _head.next;
        var pre = _head;
        while (p) {
            if (_head.val >= x && p.val < x) {
                pre.next = p.next;
                p.next = _head;
                _parent.next = p;
                _head = p;
            }
            pre = p;
            p = p.next;
        }
        _parent = _head;
        _head = _head.next;
    }

    return parent.next;
};

var node = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 5,
                    next: {
                        val: 2,
                        next: null
                    }
                }
            }
        }
    }
};

/**
 * 测试用例：
 * console.log(partition(node, 3));
 */

/**
 * 本题核心：无
 * 
 * 反思：默认能想到的方法是双重循环，过程中拆链，然而时间复杂度必然不是最优的。
 * 本质上原链上进行交换或者官方创建新的节点拼接都是能达到O(n)复杂度的
 */


