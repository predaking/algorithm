/**
 * @description 归并排序
 * @param {array} arr
 */
const mergeSort = arr => {
    const len = arr.length;

    if (len <= 1) {
        return arr;
    }

    const merge = (arr1, arr2) => {
        if (!arr1.length) {
            return arr2;
        }

        if (!arr2.length) {
            return arr1;
        }

        if (arr1[0] >= arr2[0]) {
            return [arr2[0], ...merge(arr1, arr2.slice(1))];
        }

        return [arr1[0], ...merge(arr1.slice(1), arr2)];
    }

    const arr1 = arr.slice(0, Math.floor(len / 2));
    const arr2 = arr.slice(Math.floor(len / 2));

    return merge(mergeSort(arr1), mergeSort(arr2));
}

/**
 * 时间复杂度：O(n^1.3) 空间复杂度O() 稳定排序
 */

console.log(mergeSort([2, 0, 0, -1, 3, 5, 1, 2, 9, 8, 9, 5]));
