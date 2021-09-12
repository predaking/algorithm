/**
 * @description 插入排序
 * @param {array} arr
 */
const insertionSort = arr => {
    const len = arr.length;

    for (let i = 1; i < len; ++i) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = current;
    }

    return arr;
}

/**
 * 时间复杂度：O(n^2) 空间复杂度O(1) 稳定排序
 */

console.log(insertionSort([2, 3, 1, 0, 0, 4, -2, 9, 7]));
