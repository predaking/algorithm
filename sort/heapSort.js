/**
 * @description 堆排序
 * @param {array} arr
 */
const heapSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    let len = arr.length;

    for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
        initHeap(arr, i, len);
    }

    for (let i = arr.length - 1; i > 0; --i) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        --len;
        initHeap(arr, 0, len);
    }

    return arr;
}

const initHeap = (arr, i, len) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < len && arr[left] > arr[i]) {
        [arr[left], arr[i]] = [arr[i], arr[left]];
        largest = left;
    }

    if (right < len && arr[right] > arr[i]) {
        [arr[right], arr[i]] = [arr[i], arr[right]];
        largest = right;
    }

    if (largest !== i) {
        initHeap(arr, largest, len);
    }
}

/**
 * 时间复杂度：O(nlogn) 空间复杂度O(1) 不稳定排序
 */

console.log(heapSort([2, 0, -3, 1, 9, 8, 5, -2, 9]));

//       9
//     9   8
//   1  2 -3 5
// -2 0