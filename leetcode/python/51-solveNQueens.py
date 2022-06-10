from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        Q = 'Q'

        if n == 1:
            return [[Q]]
        
        if n == 2 or n == 3:
            return []

        square = [['.' for row in range(n)] for col in range(n)]
        res = []
        count = 0

        def judgeIsRightPos(row, col):
            for i in range(row - 1, -1, -1):
                if square[i][col] == Q:
                    return False
            
            for i, j in zip(range(row - 1, -1, -1), range(col - 1, -1, -1)):
                if square[i][j] == Q:
                    return False

            for i, j in zip(range(row - 1, -1, -1), range(col + 1, n)):
                if square[i][j] == Q:
                    return False
            return True

        def backTrack(row, col):
            nonlocal count
            if (count == n):
                case = map(lambda item: ''.join(item), square)
                res.append(list(case))
                return
            
            for i in range(row, n):
                for j in range(col, n):
                    if judgeIsRightPos(i, j):
                        square[i][j] = Q
                        count += 1
                        backTrack(i + 1, 0)
                        count -= 1
                        square[i][j] = '.'
                    else:
                        if j == n - 1:
                            return
                        continue

        backTrack(0, 0)

        return res

print(Solution().solveNQueens(4))