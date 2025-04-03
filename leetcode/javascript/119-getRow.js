/**
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

/**
 * @description 杨辉三角 II
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    if (rowIndex === 1) {
        return [1, 1];
    }

    let tmp = [1, 1];

    for (let i = 3; i <= rowIndex + 1; ++i) {
        const _tmp = [...tmp];
        const len = _tmp.length;

        for (let j = 0; j < len; ++j) {
            if (j < len - 1) {
                tmp[j] = _tmp[j] + _tmp[j + 1]
            }
        }

        tmp = [1].concat(tmp);
    }

    return tmp;
};

/**
 * 测试用例：
 * console.log(getRow(5));
 */

/**
 * 本题核心：无
 *
 * 反思：理解杨辉三角的几条特性有助于拓展思维 
 */