/**
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

 * 函数 myAtoi(string s) 的算法如下：

 * 读入字符串并丢弃无用的前导空格
 * 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 * 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 * 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 * 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
 * 返回整数作为最终结果。

 * 注意：
 * 本题中的空白字符只包括空格字符 ' ' 。
 * 除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */

/**
 * @description 字符串转换整数 (atoi)
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
	s = s.trimStart();
	var MAX = Math.floor((Math.pow(2, 31) - 1) / 10);

	var isPositive = true;
	var res = 0;
	var num = 0;

	if (!Number.isSafeInteger(Number(s.charAt(0))) && s.charAt(0) !== '-' && s.charAt(0) !== '+') {
		return 0;
	}

	if (s.charAt(0) === '-') {
		isPositive = false;
	}

	if (Number.isSafeInteger(Number(s.charAt(0)))) {
		res = Number(s.charAt(0));
	}

	for (let i = 1; i < s.length; i++) {
		if (s[i] === ' ') {
			num = '';
		} else {
			num = Number(s.charAt(i));
		}

		// 同样需要提前比较防止越界
		if (Number.isSafeInteger(num) && (res > MAX || (res === MAX && (i < s.length) && num > 7))) {
			res = isPositive ? Math.pow(2, 31) - 1 : Math.pow(2, 31);
			break;
		}

		if (Number.isSafeInteger(num)) {
			res = res * 10 + num;
		} else {
			break;
		}
	}

	if (!isPositive) {
		return -res;
	}

	return res;
};

/**
 * 测试用例：
 * console.log(myAtoi("-2147483647"))
 */

/**
 * 本题核心： 数字边界
 *
 * 反思：无
 */
