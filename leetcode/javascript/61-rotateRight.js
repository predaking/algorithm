/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @description 旋转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var _head = head;
    var index = 1;
    var newHead = null;
    var tail = null;
    var len = 1;

    if (!head || !head.next) {
        return head;
    }

    while (_head.next) {
        len++;
        _head = _head.next
    }

    tail = _head;
    _head = head;

    var offset = len - k % len;

    if (!(offset % len)) {
        return head;
    }

    while (_head.next) {
        if (index < offset) {
            _head = _head.next;
            index++;
            continue;
        }
        if (!newHead) {
            newHead = _head.next;
            _head.next = null;
            break;
        }
        _head = _head.next;
    }

    tail.next = head;

    return newHead;
};

var node = null;

node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};

node = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
};

/**
 * 测试用例：
 * console.log(rotateRight(node, 2));
 */

/**
 * 本题核心：环形链表
 *
 * 反思：能想到的方法无论如何都绕不过两次循环，
 * 第一次用来获取链表长度
 */