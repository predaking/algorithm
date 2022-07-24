/**
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    /**
     * @param {*} row 
     * @param {*} col 禁止放在同列
     * @param {*} leftDown 禁止放在左斜线
     * @param {*} rightDown 禁止放在右斜线
     */
    var solve = function (row, col, leftDown, rightDown) {
        if (row === n) {
            return 1;
        }
        
        var count = 0;
        // 记录所有可放置的位置
        var validPos = ((1 << n) - 1) & (~(col | leftDown | rightDown));

        while (validPos !== 0) {
            // 记录当前可放置位置
            var position = validPos & -validPos;
            // 切换下一位
            validPos = validPos & (validPos - 1);
            count += solve(row + 1, col | position, (leftDown | position) << 1, (rightDown | position) >> 1);
        }

        return count;
    }

    return solve(0, 0, 0, 0);
};

/**
 * 测试用例：
 * console.log(totalNQueens(4))
 */

/**
 * 本题核心： 递归、二进制
 *
 * 反思：
 * 1、利用二进制0和1来记录是否可以放置，灵活运用二进制操作技巧
 * 2、解决问题时多往计算机的处理视角上靠拢，虽然最终的可读性降低，但是速度上会有极大地提升
 */