/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，
 * 使每个元素只出现一次 。返回 已排序的链表 。
 */

/**
 * @description 删除排序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const hair = {
        val: -1,
        next: head
    }

    let p = hair;

    if (p.next) {
        while (p.next.next) {
            if (p.next.next.val === p.next.val) {
                p.next = p.next.next;
            } else {
                p = p.next;
            }
        }
    }

    return hair.next;
};

const node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
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
 * 反思：在head之前再追加一个节点写起来更容易理解
 */