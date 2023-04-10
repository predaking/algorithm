/**
 * 链表与数组
 * 1、寻找数组第k大数
 * 2、反转链表
 */

/**
 * @description 寻找数组第k大数（堆排序实现）
 * @param {*} arr 
 * @param {*} k
 */
function searchKNum (arr, k) {
    var targetArr = arr.slice(0, k);
    var len = targetArr.length;
    var res = -1;

    function initHeap (arr, i, len) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var min = i;

        if (left < len && arr[left] < arr[i]) {
            [arr[i], arr[left]] = [arr[left], arr[i]];
            min = left;
        }

        if (right < len && arr[right] < arr[i]) {
            [arr[right], arr[i]] = [arr[i], arr[right]];
            min = right;
        }

        if (min !== i) {
            initHeap(arr, min, len);
        }
    }

    for (let i = k; i < arr.length; ++i) {
        for (let j = Math.floor(len / 2); j >= 0; --j) {
            initHeap(targetArr, j, len);
        }
        [targetArr[len - 1], targetArr[0]] = [targetArr[0], targetArr[len - 1]];
        res = targetArr[len - 1];
        if (arr[i] < res) {
            continue;
        }
        targetArr.pop();
        targetArr.push(arr[i]);
    }

    return res;
}

/**
 * @description 反转链表
 * @param {*} root 
 */
function reverseList (root) {
    if (!root) {
        return root;
    }

    var newRoot = null;

    while (root) {
        var tmp = root.next;
        if (!newRoot) {
            root.next = null;
            newRoot = {};
        } else {
            root.next = newRoot.next;
        }
        newRoot.next = root;
        root = tmp;
    }

    return newRoot.next;
}

var root = {
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
}

// console.log(searchKNum([2, -1, 5, 8, 3, 0, 4, 1], 8));
console.log(JSON.stringify(reverseList(root)));