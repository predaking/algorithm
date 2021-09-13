/**
 * @description 快速排序
 * @param {array} arr
 */
const quickSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];

    const rest = arr.slice(1);

    return [...quickSort(rest.filter(item => item <= pivot)), pivot, ...quickSort(rest.filter(item => item > pivot))];
}

/**
 * 时间复杂度：O(nlogn) 空间复杂度O(logn) 稳定排序
 */

console.log(quickSort([2, -9, 0, 4, 3, 7, 9, 2, 2, 1, -4]));
