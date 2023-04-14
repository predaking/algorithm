from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        ans=[intervals[0]]
        for i in intervals[1:]:
            if ans[-1][1]>=i[0]:
                #有交集算并集,因为已经升序排列了,所以左端点必比当前区间左端点小,不需要维护判断。
                ans[-1]=[ans[-1][0],max(ans[-1][1],i[1])]
            else:
                #无交集直接加
                ans.append(i)
        return ans
        
print(Solution().merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))
print(Solution().merge([[1,3],[2,6],[8,10],[15,18]]))
print(Solution().merge([[5,5],[1,3],[3,5],[4,6],[1,1],[3,3],[5,6],[3,3],[2,4],[0,0]]))

