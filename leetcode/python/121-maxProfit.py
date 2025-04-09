from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        _len = len(prices)

        if _len == 0:
            return 0
        
        stack = []
        _max = 0
        
        for val in prices:
            if len(stack) == 0:
                stack.append(val)
                continue

            if val < stack[0]:
                _max = max(stack[-1] - stack[0], _max)
                stack.clear()
            else:
                _max = max(val - stack[0], _max)

            stack.append(val)

        return _max
    
print(Solution().maxProfit([7, 1, 5, 3, 6, 4]))