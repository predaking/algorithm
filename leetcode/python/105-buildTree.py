# Definition for a binary tree node.
from typing import List, Optional

class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        left_str = str(self.left) if self.left else None
        right_str = str(self.right) if self.right else None

        return f"{{val: {self.val}, left: {left_str}, right: {right_str}}}"

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if len(inorder) == 0:
            return None
        
        def _build(list):
            length = len(list)

            if length == 0 or len(preorder) == 0:
                return None

            left = []
            right = []

            rootValue = preorder.pop(0)

            for i in range(0, length):
                if rootValue == list[i]:
                    left = list[0:i]
                    right = list[i + 1:]
                    break

            return TreeNode(rootValue, _build(left), _build(right))
            
        return _build(inorder)
            
print(str(Solution().buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])))