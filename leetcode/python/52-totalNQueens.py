from os import lseek
from turtle import position


class Solution:
    def totalNQueens(self, n: int) -> int:
        def solve(row, col, leftDown, rightDown):
            if row == n:
                return 1

            count = 0
            validPos = ((1 << n) - 1) & (~(col | leftDown | rightDown))

            while validPos != 0:
                position = validPos & -validPos
                validPos = validPos & (validPos - 1)
                count += solve(
                    row + 1, 
                    col | position, 
                    (leftDown | position) << 1, 
                    (rightDown | position) >> 1
                )

            return count

        return solve(0, 0, 0, 0)

print(Solution().totalNQueens(4))