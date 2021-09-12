/**
 * @description 选择排序
 * @param {array} arr
 */
const selectionSort = arr => {
    let len = arr.length;

    for (let i = 0; i < len; ++i) {
        // 存的是下标
        let minIndex = i;

        for (let j = i + 1; j < len; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

/**
 * 时间复杂度：O(n^2) 空间复杂度O(1) 不稳定排序
 */

console.log(selectionSort([2, 1, 0, 9, -3, 4, 1, 0, 0, 4, 4, 7]));
