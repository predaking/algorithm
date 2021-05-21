/**
 * 147. 对链表进行插入排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    // 添加祖父节点，用于寻找最后的head节点（排序中head节点相邻关系可能会发生变化）
    var parent = {
        val: null,
        next: head
    };

    // last 为排好序的最后一个节点
    var last = head;

    // curr 为将要排序的节点，初始为头节点的下一个
    var curr = last.next;

    while(curr) {
        var sortHead = parent;
        while(sortHead.next) {
            // 顺序正常就没必要排了
            if (curr.val >= last.val) {
                last = last.next;
                break;
            }

            if (curr.val <= sortHead.next.val) {
                last.next = curr.next;
                curr.next = sortHead.next;
                sortHead.next = curr;
                break;
            }

            sortHead = sortHead.next;
        }
        curr = last.next;
    }

    return parent.next;
};

function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
}

var node4 = new ListNode(5, null);
var node3 = new ListNode(4, node4);
var node2 = new ListNode(3, node3);
var node1 = new ListNode(2, node2);
var root = new ListNode(1, node1);

console.log(JSON.stringify(insertionSortList(root)));

// 4 -> 2 -> 1 -> 3
// 2 -> 4 -> 1 -> 3
// 1 -> 2 -> 4 -> 3
// 1 -> 2 -> 3 -> 4
