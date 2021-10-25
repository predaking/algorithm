/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
 */

/**
 * @description Pow(x, n)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	let res = 1;
	let count = Math.abs(n);

	const compute = (num, n) => {
		if (n === 1) {
			return num;
		}

		if (n === 0) {
			return 1;
		}

		return compute(num / 2, n / 2);
	}

	res = compute(x, count);

	if (n < 0) {
		return (1 / res).toFixed(5);
	}

	return res.toFixed(5);
};

// console.log(myPow(2.00000, 3));

var compute = (num, n) => {

	if (n === 1) {
		return num;
	}

	if (n === 0) {
		return 1;
	}

	return compute(num, n - 1) * num;
}

console.log(compute(2, 10));
