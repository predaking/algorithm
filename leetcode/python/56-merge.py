from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        for i in range(0, len(intervals)):
            if intervals[i] == False:
                continue
            for j in range(i + 1, len(intervals)):
                if intervals[j] == False:
                    continue
                if intervals[i] == False:
                    break

                minVal = min(intervals[i][0], intervals[j][0])
                maxVal = max(intervals[i][1], intervals[j][1])

                sumLen = intervals[i][1] - intervals[i][0] + intervals[j][1] - intervals[j][0]

                if maxVal - minVal <= sumLen:
                    intervals[i] = [minVal, maxVal]
                    intervals[j] = False
                    # intervals.remove(intervals[j])
                    i -= 1
                    # j -= 1
        return intervals

print(Solution().merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))
def foo():
    if not None:
        print('0')

foo()
