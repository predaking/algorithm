/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

 * P   A   H   N
 * A P L S I I G
 * Y   I   R

 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 */

/**
 * @description Z 字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows <= 1) {
		return s;
	}

	var arr = [];
	var len = s.length;

	for (let i = 0; i < numRows; i++) {
		arr.push([]);
	}

	var rowIndex = 0;
	var turnDown = true;

	for (let i = 0; i < len; i++) {
		arr[rowIndex].push(s.charAt(i));

		if (rowIndex === 0) {
			turnDown = true;
		}

		if (rowIndex === numRows - 1) {
			turnDown = false;
		}

		if (turnDown) {
			rowIndex++;
		} else {
			rowIndex--;
		}
	}

	var res = '';

	for (let i = 0; i < numRows; i++) {
		res = res.concat(arr[i].join(''));
	}

	return res;
};

/**
 * 测试用例：
 * console.log(convert('PAYPALISHIRING', 3));
 */

/**
 * 本题核心： 二维数组
 *
 * 反思：利用二维数组Z字走向式存放字符，最后将每一项拼起来返回即可
 */
