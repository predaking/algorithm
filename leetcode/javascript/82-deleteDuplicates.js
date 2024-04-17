/**
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有
 * 重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 */

/**
 * @description 删除排序链表中的重复元素 II
 * @param {ListNode} head
 */
var deleteDuplicates = function(head) {
    let preHead = {
        val: undefined,
        next: head
    }
    let p = preHead;
    let pre = p;

    const map = new Map();

    while (p) {
        const value = map.get(p.val);
        if (value) {
            map.set(p.val, value + 1);
        } else {
            map.set(p.val, 1);
        }
        p = p.next;
    }

    p = preHead;

    while (p) {
        if (map.get(p.val) > 1) {
            let node = p;
            pre.next = node.next;
            p = pre;
        } 
        pre = p;
        p = p.next;
    }

    return preHead.next;
};

const node = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

/**
 * 测试用例：
 * console.log(JSON.stringify(deleteDuplicates(node)));
 */

/**
 * 本题核心：无
 * 
 * 反思：因要求重复项的值一个不留，因此在不方便移除前一个节点的情况下，
 * 可先遍历一次计数，之后一次性遍历删除重复节点。需要注意头部节点也需要
 * 删除的情况，需要头部节点之前再补一个节点。官方一次性遍历比较下下个节
 * 点更为简单
 */

/**
 * @description 官方解法
 * @param {ListNode} head
 */
var deleteDuplicates = function(head) {
    let preHead = {
        val: 0,
        next: head
    }
    let p = preHead;

    while (p.next && p.next.next) {
        if (p.next.val === p.next.next.val) {
            const value = p.next.val;
            while (p.next && p.next.val === value) {
                p.next = p.next.next;
            }
        } else {
            p = p.next;
        }
    }

    return preHead.next;
};

console.log(JSON.stringify(deleteDuplicates(node)));

