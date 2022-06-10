from math import floor

class Solution:
    def myPow(self, x, n):
        def formatResult(res):
            return float('%.5f' % res)
            
        def compute(num, n):
            if (n == 0):
                return 1
            if (n == 1):
                return num

            res = compute(x, floor(n / 2))

            if (n % 2):
                return res * res * num
            else:
                return res * res

        res = 0
        if (n <= 0):
            res = 1.0 / compute(x, -n)
        else:
            res = compute(x, n)

        return formatResult(res)

# solution = Solution()
# print(solution.myPow(2, -2))
