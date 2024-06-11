/**
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），
 * 整数之间用 '.' 分隔。
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、
 * "192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，
 * 这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。
 * 你可以按 任何 顺序返回答案。
 *
 * 示例 1：
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 *
 * 示例 2：
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 *
 * 示例 3：
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 */

/**
 * @description 复原 IP 地址
 * @param {string} s
 */
var restoreIpAddresses = function(s) {
    const len = s.length;
    if (len < 4 || len > 12) {
        return [];
    }

    const res = [];
    const arr = [];

    let _str = s;

    const backTrack = () => {
        if (arr.length === 4) {
            res.push([...arr]);
            arr.length = 0;
            _str = s;
            return;
        }

        for (let j = 1; j <= 3; ++j) {
            const restLen = _str.length;

            if (restLen < 1) {
                return;
            }

            const cur = _str.slice(0, j);
            const next = _str.slice(j);
            if (+cur > 255 || cur.startsWith('0')) {
                return;
            }
            if (arr.length === 3 && (next.length <= 0 || next.length > 3)) {
                arr.length = 0;
                _str = s;
                backTrack(_str);
                arr.pop();
                return;
            }
            arr.push(cur);
            _str = next;
            backTrack(_str);
            arr.pop();
        }
    };

    backTrack();
    return res;
};

console.log(restoreIpAddresses('25425511135'));

/**
 * 12: 3 3 3 3
 * 11: 2 3 3 3
 * 10: 2 3 2 3 | 1 3 3 3
 * 09: 2 3 3 1 | 2 2 2 3
 * 08: 3 3 1 1 | 3 2 2 1 | 2 2 2 2
 * 07: 3 2 1 1 | 2 2 2 1
 * 06: 3 1 1 1 | 2 2 1 1
 * 05: 2 1 1 1
 * 04: 1 1 1 1
 */