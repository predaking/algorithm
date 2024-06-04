/**
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（
 * 可能有多种方法）。例如，"11106" 可以映射为：
 * "AAJF" ，将消息分组为 (1 1 10 6)
 * "KJF" ，将消息分组为 (11 10 6)
 * 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由
 * 于 "6" 和 "06" 在映射中并不等价。
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
 * 题目数据保证答案肯定是一个 32 位 的整数。
 * 
 * 示例：
 * 输入：s = "226"
 * 输出：3
 * 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 */

/**
 * @description 解码方法
 * @param {string} s
 */
var numDecodings = function(s) {
    const arr = [];
    const strLen = str.length;

    const calc = (_str) => {
        const len = _str.length;
        if (len === 0) {
            arr.push(0);
            return;
        }

        if (len === 1) {
            arr.push(_str === '0' ? 0 : 1);
            return;
        }

        if (len === 2) {
            if (_str[0] === '0') {
                arr.push(0);
                return;
            } else {
                if (_str[1] === '0') {
                    arr.push(1);
                    return;
                } else if (+_str > 26) {
                    arr.push(1);
                    return;
                } else {
                    arr.push(2);
                    return;
                }
            }
        }
    }

    let tmp = '';
    let _len = 0;

    while (_len < strLen) {
        tmp = (str[strLen - _len - 1]) + tmp;
        _len = tmp.length;

        if (_len < 3) {
            calc(tmp);
        } else {
            arr.push((arr[arr.length - 2] * ((+tmp.slice(0, 2) > 26 || +tmp.slice(0, 2) < 10) ? 0 : 1)) + (arr[arr.length - 1] * (tmp.slice(0, 1) === '0' ? 0 : 1)));
        }
    }

    console.log('arr: ', arr);

    return arr[arr.length - 1];
};

/**
 * 测试用例：
 * console.log(numDecodings('230')); // 3
 */

/**
 * 本题核心：回溯
 * 
 * 反思：常规回溯思路，需要注意的是去重。
 */