/**
 * @description 计数排序(只针对自然数排序)
 * @param {array} arr
 */
const countingSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    const len = arr.length;
    const res = [];

    let min = arr[0], max = arr[0];

    for (let i = 0; i < len; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    const countingArr = Array(max - min + 1).fill(0);
    const countingLen = countingArr.length;

    for (let i = 0; i < len; ++i) {
        ++countingArr[arr[i]];
    }

    for (let i = 0; i < countingLen; ++i) {
        for (let j = 0; j < countingArr[i]; ++j) {
            res.push(i);
        }
    }

    return res;
}

/**
 * 时间复杂度：O(n+k) 空间复杂度O(n+k) 稳定排序
 */

console.log(countingSort([2, 3, 1, 9, 3, 7, 10, 0, 0, 2]));
