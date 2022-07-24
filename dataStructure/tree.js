/**
 * 1、构造二叉搜索树
 * 2、遍历二叉树（前中后序、层级）
 */

/**
 * @description 按照给点列表顺序构建二叉搜索树
 * @param {array} list 
 * @returns 结果一定是唯一的
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

module.exports = {
    createTree,
    preorderTraverseTree,
    inorderTraverseTree,
    postorderTraverseTree,
    levelTraverseTree,
    levelTraverseMultiTree
};
