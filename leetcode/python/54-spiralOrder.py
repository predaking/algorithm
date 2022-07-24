from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m = len(matrix)
        n = len(matrix[0])

        row = 0
        col = 0

        rowMid = m / 2

        res = []
        sum = m * n

        i = 0
        j = 0

        while (len(res) < sum):
            res.append(matrix[i][j])
            if j == n - 1:
                if i == m - 1:
                    j -= 1
                    continue
                if i < m - 1:
                    i += 1
                    continue
            if j == col:
                if i == row:
                    j += 1
                    continue
                if i == row + 1:
                    col += 1
                    row += 1
                    m -= 1
                    n -= 1
                    j += 1
                    continue
                if i > row:
                    i -= 1
                    continue
            if j > col and j < n - 1:
                if i >= rowMid:
                    j -= 1
                else:
                    j += 1
        return res
        
print(Solution().spiralOrder([[2, 5, 8],[4, 0, -1]]))