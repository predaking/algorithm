/**
 * 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 
 * 所有排列如下：
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 给定 n 和 k，返回第 k 个排列。
 */

/**
 * @description 排列序列
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    var count = 0;
    var stack = [];
    var res = '';

    var backTrack = function (i) {
        if (stack.length === n) {
            count++;
            if (count === k && !res) {
                res = stack.join('');
                return;
            }
            return;
        }

        for (let i = 0; i < n; ++i) {
            if (res) {
                break;
            }
            if (stack.includes(i + 1)) {
                continue;
            }
            stack.push(i + 1);
            backTrack(i + 1);
            stack.pop();
        }

    }

    backTrack();

    return res;
};

/**
 * 测试用例：
 * console.log(getPermutation(3, 4));
 */

/**
 * 本题核心：回溯
 *
 * 反思：因每次回溯后需要继续从头开始添加，所以需要判断是否已有，
 * 因此，影响效率的地方正在于此，虽然添加了判断只要找到就不再遍历，
 * 但极端情况还是避免不了超时的可能。可尝试另一种纯数学的方式查找，
 * 利用有序的特征，逐层判断第k个应该落到哪一层
 */

/**
 * @description 利用数学计算
 * @param {*} n 
 * @param {*} k 
 */
var getPermutation = function (n, k) {
    if (n === 1) {
        return '1';
    }

    var ans = [];
    var arr = Array(n).fill(0).map((_, ids) => ids + 1);
    var _arr = [...arr];

    var factarial = function (n) {
        return _arr.slice(0, n).reduce((prev, cur) => prev *= cur, 1);
    }

    while (n) {
        const MOD = factarial(n - 1);
        const idx = Math.ceil(k / MOD) - 1;
        console.log('debug: ', arr, idx, k);
        ans.push(arr.splice(idx, 1)[0]);
        k %= MOD;
        n--;
    }

    return ans.join('');
};

console.log(getPermutation(3, 2));