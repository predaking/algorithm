/**
 * @description 无限累加柯里化
 */
function curry() {
    var args = Array.from(arguments);

    var add = function () {
        args.push(...arguments);
        return add;
    }

    add.toString = function () {
        return args.reduce((a, b) => a + b);
    };

    return add;
}

console.log(curry(5)(2)(8).toString())
