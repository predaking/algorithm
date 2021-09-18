/**
 * @description 基数排序
 * @param {array} arr
 */
const baseSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}

    const len = arr.length;
	const res = [];
	const bucketSet = [];

	for (let i = 0; i < 10; ++i) {
		bucketSet.push([]);
	}

	for (let i = 0; i < len; ++i) {
		bucketSet[Math.floor(arr[i] / 10)].push(arr[i]);
	}

	for (let i = 0; i < 10; ++i) {
		const tmp = bucketSet[i].sort((a, b) => a - b);
		res.push(...tmp);
	}

    return res;
}

/**
 * 时间复杂度：O(n*k) 空间复杂度：O(n+k) 稳定排序
 */

console.log(baseSort([32, 13, 91, 29, 53, 77, 10, 33, 40, 40, 42]));
