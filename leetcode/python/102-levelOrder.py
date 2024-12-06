class TreeNode:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right
    

from typing import Optional, List

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = [];
        if not root:
            return res
        def bfs (node, level):
            if not node:
                return
    
            if len(res) <= level - 1:
                res.append([])

            res[level - 1].append(node.val)

            bfs(node.left, level + 1)
            bfs(node.right, level + 1)

        bfs(root, 1)
        return res

node0 = TreeNode(1)
node1 = TreeNode(2)
node2 = TreeNode(3, node0, node1)
node3 = TreeNode(4, node2)
node4 = TreeNode(5, node3)

print(Solution().levelOrder(node4))