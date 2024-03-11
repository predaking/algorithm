/**
 * 给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 
 * （以 '/' 开头），请你将其转化为更加简洁的规范路径。
 * 在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；
 * 此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；
 * 两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠
 * （即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何
 * 其他格式的点（例如，'...'）均被视为文件/目录名称。
 * 请注意，返回的 规范路径 必须遵循下述格式：
 * 始终以斜杠 '/' 开头。
 * 两个目录名之间必须只有一个斜杠 '/' 。
 * 最后一个目录名（如果存在）不能 以 '/' 结尾。
 * 此外，路径仅包含从根目录到目标文件或目录的路径上的目录
 * （即，不含 '.' 或 '..'）。
 * 返回简化后得到的 规范路径 。
 */

/**
 * @description 简化路径
 * @param {string} path
 */
var simplifyPath = function(path) {
    if (path[path.length - 1] === '.') {
        path += '/';
    }
    var str = '';
    var len = path.length;

    function sliceStr() {
        if (str[str.length - 1] === '/') {
            str = str.slice(0, -1);
        }
        var _str = str;
        for (let i = str.length - 1; i >= 0; --i) {
            if (str[i] !== '/') {
                _str = _str.slice(0, -1);
            } else {
                break;
            }
        }
        str = _str;
    }

    for (let i = 0; i < len; ++i) {
        if (str.length === 0 && path[i] !== '/') {
            str += '/';
            str += path[i];
            continue;
        }

        if (i + 3 < len
            && path[i] === '/'
            && path[i + 1] === '.'
            && path[i + 2] === '.'
            && path[i + 3] === '/'
        ) {
            sliceStr(str);
            if (str[str.length - 1] !== '/') {
                str += '/';
            }
            i += 2;
            continue;
        }

        if (i + 2 < len
            && path[i] === '/'
            && path[i + 1] === '.'
            && path[i + 2] === '/'
        ) {
            if (str[str.length - 1] !== '/') {
                str += '/';
            }
            i += 1;
            continue;
        }

        if (path[i] === '/') {
            if (str[str.length - 1] === '/') {
                continue;
            } else if (i !== len - 1) {
                str += '/';
            }
            continue;
        }

        str += path[i];
    }

    if (!str.length) { return '/'; }

    if (str.length > 1 && str[str.length - 1] === '/') {
        return str.slice(0, -1);
    }

    return str;
};

/**
 * 测试用例：
 * console.log(simplifyPath('/a/./b/../../c/')); // /c
 * console.log(simplifyPath('/home/')); // /home
 * console.log(simplifyPath('/../')); // /
 * console.log(simplifyPath('/home//foo/')); // /home/foo
 * console.log(simplifyPath('/a/../../b/../c//.//')); // /c
 * console.log(simplifyPath('/a//b////c/d//././/..')); // /a/b/c
 * console.log(simplifyPath('/..hidden')); // /..hidden
 * console.log(simplifyPath('/.hidden')); // /.hidden
 */

/**
 * 本题核心：栈
 *
 * 反思：写法想的太复杂了，其实想通问题之后直接采用split方式
 * 拆为栈就简单多了
 */

/**
 * @description 官方做法
 * @param {string} path
 */
var simplifyPath = function (path) {
    var stack = [];
    var names = path.split('/');

    for (let i = 0; i < names.length; ++i) {
        if (!names[i] || names[i] === '.') {
            continue;
        }

        if (names[i] == '..') {
            stack.pop();
        } else {
            stack.push(names[i]);
        }
    }

    var str = stack.join('/');

    if (str[0] !== '/') {
        str = '/' + str;
    }

    return str;
}


