var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2000);
    }, 2000);
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6000);
    }, 6000);
});

var promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4000);
    }, 4000);
});

/**
 * @description 利用promise实现promise.all
 * @param {array} promiseList 
 */
var promiseAll = promiseList => {
    var resolvedList = [];
    var len = promiseList.length;
    var counter = 0;
    return new Promise((resolve, reject) => {
        if (typeof promiseList[Symbol.iterator] !== 'function') {
            return reject("promiseList is not iterable");
        }

        if (!len) {
            return resolve([]);
        }

        for (let i = 0; i < len; ++i) {
            Promise.resolve(promiseList[i]).then((res) => {
                resolvedList[i] = res;
                counter++;
                if (counter === len) {
                    resolve(resolvedList);
                }
            }).catch((err) => {
                reject(err);
            })
        }
    });
}

promiseAll([promise1, promise2, promise3])
    .then(res => {
        console.log(res);
    }, err => {
        console.log(err);
    });