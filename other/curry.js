/**
 * @description 无限累加柯里化(该方法最后必须要再调用一次)
 */
function curry() {
    const args = Array.from(arguments);

    const _add = (arr) => arr.reduce((a, b) => a + b, 0);

    return function add () {
        const _args = Array.from(arguments);

        if (_args.length) {
            args.push(..._args);
            return add;
        }

        return _add(args);
    }
}

console.log(curry(5)(2, 3)());
