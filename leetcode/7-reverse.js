/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 */

/**
 * @description 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var MIN = -Math.pow(2, 31);
	var MAX = Math.pow(2, 31) - 1;
	var res = 0;

	var arr = String(x).split('').reverse();

	if (arr[arr.length - 1] === '-') {
		arr.pop();
	}

	for (let i = 0; i < arr.length; i++) {
		if (+arr[i] === 0) {
			arr.shift();
			i--;
		} else {
			break;
		}
	}

	if (x >= 0) {
		res = +arr.join('');
	} else {
		res = -arr.join('');
	}

	if (res > MAX || res < MIN) {
		return 0;
	}

	return res;
};

/**
 * 测试用例：
 * console.log(reverse(-214155500))
 */

/**
 * 本题核心： 数字边界
 *
 * 反思：js可以通过数字字符串互转很容易达到目的，但是别的语言不见得可以这么做，并且数字的边界也
 * 不尽相同，所以最好考虑常规做法
 */

/**
 * 官方做法
 */
var reverse = function (x) {
	// 抛去最低位剩下的值，用于后续比较
	var MAX = 214748364;
	var MIN = -214748364;

	var res = 0;

	var num = x;
	var rest = 0;

	while (num) {
		var rest = num % 10;
		var num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);

		// 防止数字越界，提前比较
		if (res > MAX || res < MIN || (res === MAX && rest > 7) || (res === MIN && rest < -8)) {
			return 0;
		}

		res = (res * 10 + rest);
	}

	return res;
}

// console.log(reverse(1534236469));
