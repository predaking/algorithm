/**
 * @description 求极值
 */
var extremum = function (arr) {
    if (!arr || !(arr instanceof Array) || !arr.length) {
        throw new Error('not exsit');
    }

    var min = arr[0], max = arr[0];

    for (var i = 0, len = arr.length; i < len; ++i) {
        if (arr[i] <= min) {
            min = arr[i];
        }
        if (arr[i] >= max) {
            max = arr[i];
        }
    }

    return [min, max];
}

console.log(extremum([2, -9, 1, 0, 7]))