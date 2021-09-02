/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 示例 1：
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

/**
 * @description 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) {
         return [];
    }

    // 补全4位
 	const map = new Map([
 		['2', ['a', 'b', 'c', '']],
 		['3', ['d', 'e', 'f', '']],
 		['4', ['g', 'h', 'i', '']],
 		['5', ['j', 'k', 'l', '']],
 		['6', ['m', 'n', 'o', '']],
 		['7', ['p', 'q', 'r', 's']],
 		['8', ['t', 'u', 'v', '']],
 		['9', ['w', 'x', 'y', 'z']],
 	]);

    const len = digits.length;
    // 假设加上''的结果数
    const max = Math.pow(4, len);
    const res = [];

    for (let i = 0; i < max; ++i) {
        // 转化为输入字符串长度的4进制，不够长度前面补0
        const inx = i.toString(4).padStart(len, 0);

        let tmp = '';

        // 遍历4进制字符串，按照每一位上对应的数字从map中寻找对应的字母
        for (let j = 0; j < inx.length; ++j) {
            tmp = tmp.concat(map.get(digits.charAt(j))[inx.charAt(j)]);
        }

        // 候选字符串不够输入字符串长度就舍弃
        if (tmp.length < len) {
            continue;
        } else {
            res.push(tmp);
        }
     }

     return res;
};

/**
 * 测试用例：
 * console.log(letterCombinations('234'));
 */

/**
 * 本题核心： 回溯、队列、进制、多叉树DFS、动态规划、笛卡尔积
 *
 * 反思：解决问题先找一般思路
 */

/**
 * @description 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (!digits) {
		return [];
	}

	const map = new Map([
		['2', ['a', 'b', 'c']],
		['3', ['d', 'e', 'f']],
		['4', ['g', 'h', 'i']],
		['5', ['j', 'k', 'l']],
		['6', ['m', 'n', 'o']],
		['7', ['p', 'q', 'r', 's']],
		['8', ['t', 'u', 'v']],
		['9', ['w', 'x', 'y', 'z']],
	]);

	let res = [''];

	for (let i = 0; i < digits.length; ++i) {
		const cur = map.get(digits.charAt(i));
		const tmp = [];

		for (let j = 0; j < cur.length; ++j) {
			for (let k = 0; k < res.length; ++k) {
				tmp.push(res[k] + cur[j]);
			}
		}

		res = [...tmp];
	}

	return res;
}

/**
 * @description 回溯
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (!digits) {
		return [];
	}

	const map = new Map([
		['2', ['a', 'b', 'c']],
		['3', ['d', 'e', 'f']],
		['4', ['g', 'h', 'i']],
		['5', ['j', 'k', 'l']],
		['6', ['m', 'n', 'o']],
		['7', ['p', 'q', 'r', 's']],
		['8', ['t', 'u', 'v']],
		['9', ['w', 'x', 'y', 'z']],
	]);

	let tmp = '';
	let res = [];

	const back = (index, tmp) => {
		if (index === digits.length) {
			res.push(tmp);
		} else {
			const arr = map.get(digits.charAt(index));
			for (let i = 0; i < arr.length; ++i) {
				tmp += arr[i];
				back(index + 1, tmp);
				tmp = tmp.slice(0, -1);
			}
		}
	}

	back(0, tmp);

	return res;
}

/**
 * @description 队列
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }

    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);

    let quene = [''];

    for (let i = 0; i < digits.length; ++i) {
        const tmp = map.get(digits.charAt(i));

        while (quene[0].length <= i) {
            for (let j = 0; j < tmp.length; ++j) {
                quene.push(quene[0] + tmp[j]);
            }
            quene.shift();
        }
    }

    return quene;
}
