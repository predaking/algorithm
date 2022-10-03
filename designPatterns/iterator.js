/**
 * 迭代器模式
 * 概念：在不需要暴露内部具体实现的情况下可以顺序访问一个聚合对象里的元素
 * 1、可倒序迭代
 * 2、可中止迭代
 */

/**
 * 迭代器模式（例：比较数组元素是否相同）
 */
var Iterator = function(obj) {
    var index = 0;

    var getCurrentItem = function() {
        return obj[index];
    }

    var next = function() {
        index++;
    }

    var isDone = function() {
        return index >= obj.length;
    }

    return {
        getCurrentItem,
        next,
        isDone
    }
}

var compare = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    var iterator1 = Iterator(arr1);
    var iterator2 = Iterator(arr2);

    while (!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
            return false;
        }
        iterator1.next();
        iterator2.next();
    }

    return true;
}

console.log(compare([1, 2, 3], [1, 2, 3]));

