/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或
 * 者 x ** 0.5 。 
 */

/**
 * @description x 的平方根 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

};

/**
 * 测试用例：
 * console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
 * console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
 * console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20));
 * console.log(fullJustify(["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"], 16));
 */

/**
 * 本题核心：无
 *
 * 反思：常规思路，先算出一行最多能容纳几个单词，这样空隙数就是单词数减一，
 * 之后依次计算空格最大间距，并拼到当前遍历的单词后。
 */