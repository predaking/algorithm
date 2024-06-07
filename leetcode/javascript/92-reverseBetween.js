/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * 
 * 示例 1：
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * 
 * 示例 2：
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @description 反转链表 II
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 */
var reverseBetween = function (head, left, right) {
    if (left >= right) {
        return head;
    }

    const _head = head;

    let len = 0;
    let p = _head;

    while (p) {
        len++;
        p = p.next;
    }

    p = _head;
    let pre = {
        val: -1,
        next: p
    };

    let parent = {
        val: -1,
        next: null
    };

    let _right = null;

    let i = 0;
    while (p) {
        i++;
        if (i + 1 === left) {
            pre = p;
        }
        if (i === right) {
            _right = p.next;
        }
        p = p.next;
    }

    i = 0;
    p = _head;
    let _p = null;

    while (p) {
        i++;
        if (i >= left && i <= right) {
            _p = p.next;
            p.next = parent.next;
            parent.next = p;
            p = _p;
        } else {
            p = p.next;
        }
    }

    let _parent = parent;
    while (_parent.next) {
        _parent = _parent.next;
    }

    pre.next = parent.next;
    _parent.next = _right;

    return left === 1 ? parent.next : head;
};

const node = {
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

/**
 * 测试用例：
 * console.log(reverseBetween(node)); 
 */

/**
 * 本题核心：无
 * 
 * 反思：无论怎么翻转，最重要的是要把链子该什么时候断什么时候连，怎么连，连哪里
 * 搞清楚。有张图就会很清晰，本题需要记录开始翻转位置前一位，以便连接反转之后的
 * 头节点，翻转过程的链子最好用一个新的头节点连起来，以便最后链回到主链，也更容
 * 易理解，最后把剩余的后面一部分链到翻转后的链子后。注意点有：
 * 1、需要记录翻转前一位
 * 2、需要遍历多次（有的解法能少遍历几次）以达到不同的目的，比如第一次遍历是为
 * 了记录节点数量，第二次是记录翻转前子链的头尾位置，第三次正式进行翻转，第四
 * 次把翻转后的头节点移动到结尾以便链接剩余子链
 * 3、注意处理是否从头开始对结果的影响
 * 4、在头节点之前多加个父节点更容易理解与处理
 */