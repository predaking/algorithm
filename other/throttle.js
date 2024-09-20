/**
 * @description throttle
 */
const throttle = (fn, duration = 500) => {
	let timer = null;
    let startTime = Date.now();

    return function () {
        let curTime = Date.now();
        const remain = duration - (curTime - startTime);

        clearTimeout(timer);

        if (remain <= 0) {
            fn.apply(this, arguments);
            startTime = curTime;
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(timer);
            }, duration);
        }
    }
}
