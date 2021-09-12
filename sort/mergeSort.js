/**
 * @description 归并排序
 * @param {array} arr
 */
const mergeSort = function (arr) {
    const len = arr.length;
    console.log(arr);

    if (len <= 1) {
        return arr;
    }

    const merge = function (arr1, arr2) {
        if (!arr1.length) {
            return arr2;
        }

        if (!arr2.length) {
            return arr1;
        }

        if (arr1[0] > arr2[0]) {
            return [arr2[0], arr1[0]];
        }

        return [arr1[0], arr2[0]];
    }

    return mergeSort(merge(arr.slice(0, Math.floor(len / 2)), arr.slice(Math.floor(len / 2))));
}

/**
 * 时间复杂度：O(n^1.3) 空间复杂度O() 稳定排序
 */

console.log(mergeSort([2, 0, 0, -1, 3, 5, 1, 2, 9, 8, 9, 5]));
