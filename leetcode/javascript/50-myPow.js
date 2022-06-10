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
	var compute = function(num, n) {
		if (n === 0) {
			return 1;
		}

		if (n === 1) {
			return num;
		}

		var res = compute(num, Math.floor(n / 2));

		if (n % 2) {
			return res * res * num;
		}

		return res * res;
	}

	return n > 0 ? compute(x, n).toFixed(5) : (1 / compute(x, -n)).toFixed(5);
}

/**
 * 测试用例：
 * console.log(myPow(2, 10));
 */

/**
 * 本题核心： 递归、二分法
 *
 * 反思：注意在递归时考虑能否进行尾递归优化
 */
