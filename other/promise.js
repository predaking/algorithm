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

// Promise
//     .all([promise1, promise2, promise3])
//     .then(res => {
//         console.log('res:', res);
//     }, err => {
//         console.log('err: ', err);
//     });

// Promise
//     .race([promise1, promise2, promise3])
//     .then(res => {
//         console.log('res:', res);
//     }, err => {
//         console.log('err: ', err);
//     });

// Promise
//     .race([promise1, promise2, promise3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

/**
 * @description 利用promise实现promise.all
 * @param {array} promiseList 
 */
var promiseAll = promiseList => {
    var resolvedList = [];
    return new Promise((resolve, reject) => {
        if (!promiseList[Symbol.iterator]) {
            reject("promiseList is not iterable");
        }

        for (promise of promiseList) {
            Promise.resolve(promise)
                .then(
                    res => {
                        resolvedList.push(res);
                        if (resolvedList.length === promiseList.length) {
                            resolve(resolvedList);
                        }
                    }, 
                    err => {
                        reject(err);
                    }
                );
        }
    });
}

promiseAll({})
    .then(res => {
        console.log(res);
    }, err => {
        console.log(err);
    });