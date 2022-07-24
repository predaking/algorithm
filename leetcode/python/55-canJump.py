from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        longestPos = 0
        for i in range(len(nums)):
            if i <= longestPos:
                longestPos = max(nums[i] + i, longestPos)
                if (longestPos >= len(nums) - 1):
                    return True
        return False

Solution().canJump([3, 2, 1, 0, 4]);

