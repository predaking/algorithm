from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxRes = 0
        res = nums[0]

        for val in nums:
            maxRes = max(maxRes + val, val)
            res = max(res, maxRes)

        return res

print(Solution().maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))