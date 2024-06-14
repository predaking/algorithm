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
            const ip = arr.join('.');

            if (ip.length - 3 === len) {
                res.push(ip);
                _str = s;
            }
            return;
        }

        for (let j = 1; j <= 3; ++j) {
            const restLen = _str.length;

            if (restLen < 1) {
                return;
            }

            const cur = _str.slice(0, j);
            const next = _str.slice(j);
            if (+cur > 255 || (cur.startsWith('0') && cur !== '0')) {
                return;
            }
            arr.push(cur);
            _str = next;
            backTrack(_str);
            arr.pop();
            _str = cur + _str;
        }
    };

    backTrack();
    return res;
};

/**
 * 测试用例：
 * console.log(restoreIpAddresses('25425511135'));
 */

/**
 * 本题核心：回溯
 * 
 * 反思：按照一个一个数进行添加并用.符号分割，看最终是否还有剩余的数，如果没有剩余的数，
 * 则说明这个是一个有效的IP地址，否则不是。注意点有：
 * 1、IP地址的长度是4，每个数的范围是0-255，所以最大长度是3，最小长度是1。
 * 2、ip总长度不会低于4，不会高于12。
 */