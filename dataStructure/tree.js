/**
 * 1、构造二叉搜索树
 * 2、遍历二叉树（前中后序、层级）
 * 3、平衡树判断
 * 4、等价树判断
 * 5、线索二叉树（Morris遍历）
 */

/**
 * @description 按照给点列表顺序构建二叉搜索树
 * @param {array} list 
 */
function createTree(list) {
    var root = null;
    var current = null;

    for (let i = 0; i < list.length; ++i) {
        var node = {
            value: list[i],
            left: null,
            right: null
        };

        if (!root) {
            root = node;
            current = root;
            continue;
        }

        current = root;
        var parent = null;
        var isLeft = null;

        while (current) {
            parent = current;
            if (list[i] < current.value) {
                current = current.left;
                isLeft = true;
            } else {
                current = current.right;
                isLeft = false;
            }
        }

        if (isLeft) {
            parent.left = node;
        } else {
            parent.right = node;
        }
    }

    return root;
}

/**
 * @description 先序遍历
 * @param {object} root 
 */
function preorderTraverseTree(root) {
    if (!root) {
        return [];
    }

    return [
        root.value,
        ...preorderTraverseTree(root.left),
        ...preorderTraverseTree(root.right)
    ];
}

/**
 * @description 先序遍历非递归
 * @param {*} root 
 */
const preorderTraversal = (root) => {
    const res = [];
    const stack = [];

    if (!root) {
        return res;
    }

    stack.push(root);

    while (stack.length) {
        root = stack.pop();
        res.push(root.val);
        if (root.right) {
            stack.push(root.right);
        }
        if (root.left) {
            stack.push(root.left);
        }
    }

    return res;
}

/**
 * @description 中序遍历
 * @param {object} root 
 */
function inorderTraverseTree(root) {
    if (!root) {
        return [];
    }

    return [
        ...inorderTraverseTree(root.left),
        root.value,
        ...inorderTraverseTree(root.right)
    ];
}

/**
 * @description 中序遍历非递归
 * @param {*} root 
 */
const inorderTraversal = (root) => {
    const res = [];
    const stack = [];

    if (!root) {
        return res;
    }

    let cur = root;

    while (cur || stack.length) {
       while (cur) {
           stack.push(cur);
           cur = cur.left;
       }

       cur = stack.pop();

       res.push(cur.val);

       cur = cur.right;
    }

    return res;
}

/**
 * @description 后序遍历
 * @param {object} root 
 */
function postorderTraverseTree(root) {
    if (!root) {
        return [];
    }

    return [
        ...postorderTraverseTree(root.left),
        ...postorderTraverseTree(root.right),
        root.value
    ];
}

/**
 * @description 后序遍历非递归
 * @param {*} root 
 */
const postorderTraversal = (root) => {
    const res = [];
    const stack = [];

    if (!root) {
        return res;
    }

    stack.push(root);

    while (stack.length) {
        root = stack.pop();
        res.unshift(root.val);
        if (root.left) {
            stack.push(root.left);
        }
        if (root.right) {
            stack.push(root.right);
        }
    }

    return res;
}

/**
 * @description 层级遍历
 * @param {object} root 
 */
function levelTraverseTree(root) {
    var res = [];
    var quene = [];

    if (!root) {
        return res;
    }

    quene.push(root.left, root.right);
    res.push(root.value);

    while (quene.length) {
        var current = quene.shift();
        res.push(current.value);
        if (current.left) {
            quene.push(current.left);
        } 
        if (current.right) {
            quene.push(current.right);
        }
    }

    return res;
}

/**
 * @description 多叉树层级遍历
 * @param {object} root 
 */
function levelTraverseMultiTree(root) {
    var res = [];
    var quene = [];

    if (!root) {
        return res;
    }

    res.push(root.value);
    root.children.map(item => {
        quene.push(item);
    });

    while (quene.length) {
        var current = quene.shift();
        res.push(current.value);
        current.children.map(item => {
            quene.push(item);
        });
    }

    return res;
}

/**
 * @description 平衡树判断
 * @param {object} root 
 */
function judgeIsBalanceTree (root) {
    if (!root) {
        return true;
    }

    function getLevel(root) {
        if (!root) {
            return 0;
        }
        return Math.max(getLevel(root.left), getLevel(root.right)) + 1;
    }

    var rootIsBalance = Math.abs(getLevel(root.left) - getLevel(root.right)) <= 1;

    return rootIsBalance && judgeIsBalanceTree(root.left) && judgeIsBalanceTree(root.right);
}

/**
 * @description 判断两棵树是否等价
 * @param {*} root1 
 * @param {*} root2 
 */
function judgeIsSameTree (root1, root2) {
    if (!root1 && !root2) {
        return true;
    } else {
        if (!root1 || !root2) {
            return false;
        }
    }

    return (
        judgeIsSameTree(root1.left, root2.left) 
            && judgeIsSameTree(root1.right, root2.right)
            && root1.val === root2.val
    )
}

/**
 * @description Morris遍历
 * @param {*} root 
 */
const morrisTraversal = (root) => {

}

module.exports = {
    createTree,
    preorderTraverseTree,
    preorderTraversal,
    inorderTraverseTree,
    inorderTraversal,
    postorderTraverseTree,
    postorderTraversal,
    levelTraverseTree,
    levelTraverseMultiTree,
    judgeIsBalanceTree,
    judgeIsSameTree
};
