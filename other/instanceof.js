/**
 * @description instanceof运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
 * @param _instance 实例对象
 * @param _proto 构造函数
 */
const _instanceof = (_instance, _proto) => {
    if (typeof _instance !== 'object' || _instance === null) {
        return false;
    }

    let proto = Object.getPrototypeOf(_instance);

    while (true) {
        if (proto === null) {
            return false;
        }

        if (proto === _proto.prototype) {
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }
};

const arr = [];

console.log(_instanceof(arr, Array));
console.log(_instanceof(arr, Array.prototype));
console.log(_instanceof(arr, Array.prototype.constructor));

