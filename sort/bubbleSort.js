/**
 * @description 冒泡排序
 * @param {array} arr
 */
const bubbleSort = arr => {
    const len = arr.length;

    for (let i = 0; i < len; ++i) {
        let needSort = false;

        for (let j = 0; j < len - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                needSort = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

        if (!needSort) {
            break;
        }
    }

    return arr;
}

/**
 * 时间复杂度：O(n^2) 空间复杂度O(1) 稳定排序
 */

console.log(bubbleSort([2, 3, 1, 9, 3, 7, 10, -3, 0, 0, 2]));
