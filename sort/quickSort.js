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
 * 时间复杂度：O(nlogn) 空间复杂度O(logn) 不稳定排序
 */

const partition = (arr, low, high) => {
    const pivot = arr[low];

    while (low < high) {
        while (low < high && arr[high] > pivot) {
            --high;
        }
        arr[low] = arr[high];

        while (low < high && arr[low] <= pivot) {
            ++low;
        }
        arr[high] = arr[low];
    }

    arr[low] = pivot;

    return low;
}

const sort = (arr, low, high) => {
    if (low < high) {
        const pivot = partition(arr, low, high);

        sort(arr, low, pivot - 1);
        sort(arr, pivot + 1, high);
    }

    return arr;
}

/**
 * @description 快速排序(教程版)
 * @param {array} arr
 */
const quickSort = arr => {
    sort(arr, 0, arr.length - 1);
    return arr;
}

console.log(quickSort([2, -9, 0, 4, 3, 7, 9, 2, 2, 1, -4]));
