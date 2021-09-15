/**
 * @description 桶排序
 * @param {array} arr
 */
const bucketSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    const len = arr.length;

    return arr;
}

/**
 * 时间复杂度：O(n+k) 空间复杂度O(n+k) 稳定排序
 */

console.log(bucketSort([2, 3, 1, 9, 3, 7, 10, 0, 0, 2]));
