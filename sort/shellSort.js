/**
 * @description 希尔排序
 * @param {array} arr 
 */
const shellSort = function (arr) {
    const len = arr.length;
    let gap = Math.floor(len / 3);

    while (gap) {
        for (let i = gap; i < len; ++i) {
            const tmp = arr[i];
            let j = i - gap;
            while (j >= 0 && arr[j] > tmp) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = tmp;
        }
        gap = Math.floor(gap / 3);
    }

    return arr;
}

/**
 * 时间复杂度：O(n^1.3) 空间复杂度O(1) 不稳定排序
 */

console.log(shellSort([2, 0, 0, -1, 3, 5, 1, 2, 9, 8, 9, 5]));
