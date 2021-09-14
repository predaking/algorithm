/**
 * @description 堆排序
 * @param {array} arr
 */
const heapSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
        initHeap(arr, i);
    }

    console.log(arr);

    return arr;
}

const initHeap = (arr, i) => {
    const len = arr.length;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < len && arr[left] > arr[i]) {
        // [arr[left, arr[i]]] = [arr[i], arr[left]];
        largest = left;
    }

    if (right < len && arr[right] > arr[i]) {
        // [arr[right, arr[i]]] = [arr[i], arr[right]];
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        initHeap(arr, largest);
    }
}

console.log(heapSort([2, 0, -3, 1, 9, 8, 5, -2, 9]));
