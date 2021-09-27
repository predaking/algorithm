/**
 * 给定一个正整数 n ，输出外观数列的第 n 项。
 *
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
 *
 * 你可以将其视作是由递归公式定义的数字字符串序列：
 *
 * countAndSay(1) = "1"
 * countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
 * 前五项如下：
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 第一项是数字 1
 * 描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
 * 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
 * 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
 * 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
 * 要 描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符
 * 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符
 * 串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。
 */

/**
 * @description 外观数列
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1';

    for (let i = 0; i < n; ++i) {
        let count = 0;
        let tmp = res.charAt(0);
        let part = '';
        let cur = '';

        for (let j = 0; j < res.length; ++j) {
            if (tmp === res.charAt(j)) {
                if (i === 0) {
                    cur = '1';
                } else {
                    count++;
                    cur = count + tmp;
                }
            } else {
                part += cur;
                count = 0;
                tmp = res.charAt(j);
                --j;
            }
        }

        part += cur;
        res = part;
    }

    return res;
};

/**
 * 测试用例：
 * console.log(countAndSay(4));
 */

/**
 * 本题核心： 双指针、递归
 *
 * 反思：遍历题多往双指针方向上思考。遍历过程中有时候需要倒退一步
 */

/**
 * @description 外观数列（双指针）
 * @param {number} n
 * @return {string}
 */
var countAndSay = n => {
    let res = '1';

    for (let i = 1; i < n; ++i) {
        let tmp = '';

        for (var j = 0, cur = 0; j < res.length && cur < res.length; ++j) {
            if (res[j] === res[cur]) {
                continue;
            }

            tmp += (j - cur) + res[cur];
            cur = j;
        }

        tmp += (j - cur) + res[cur];

        res = tmp;
    }

    return res;
}

/**
 * @description 外观数列（递归）
 * @param {number} n
 * @return {string}
 */
var countAndSay = n => {
    if (n === 1) {
        return '1';
    }

    let i = 0, cur = 0;
    let tmp = '';
    const lastStr = countAndSay(n - 1);
    while (i < lastStr.length && cur < lastStr.length) {
        if (lastStr[i] === lastStr[cur]) {
            ++i;
            continue;
        }
        tmp += (i - cur) + lastStr[cur];
        cur = i;
    }
    tmp += (i - cur) + lastStr[cur];
    return tmp;
}
