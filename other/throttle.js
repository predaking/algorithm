/**
 * @description throttle
 */
const throttle = (fn, duration = 500) => {
	let timer = null;

    return function () {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
            clearTimeout(timer);
            timer = null;
        }, duration);
    }
}
