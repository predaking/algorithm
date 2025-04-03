/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

/**
 * @description 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]];
    }

    if (numRows === 2) {
        return [[1], [1, 1]];
    }

    const res = [[1], [1, 1]];
    let tmp = [1, 1];

    for (let i = 3; i <= numRows; ++i) {
        const _tmp = [...tmp];
        const len = _tmp.length;

        for (let j = 0; j < len; ++j) {
            if (j < len - 1) {
                tmp[j] = _tmp[j] + _tmp[j + 1]
            }
        }

        tmp = [1].concat(tmp);
        res.push([...tmp]);
    }

    return res;
};

/**
 * 测试用例：
 * console.log(generate(5));
 */

/**
 * 本题核心：无
 *
 * 反思：理解杨辉三角的几条特性有助于拓展思维
 */