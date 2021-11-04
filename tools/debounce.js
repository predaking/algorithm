/**
 * 防抖函数（隔一定时间间隔执行一次）
 * @method debounce
 * @param {function} fn
 * @param {number} [delay=500]
 * @return {function} [description]
 */
const debounce = (fn, delay = 500) => {
    let timer = null;
    let last = 0;

    return function (...args) {
        const now = Date.now();

        if (timer) {
            if (last === 0) {
                fn.apply(this, args);
                last = now;
            }

            if (now - last >= delay && last !== 0) {
                timer = setTimeout(() => {
                    fn.apply(this, args);
                    clearTimeout(timer);
                }, delay);
                last = now;
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
                clearTimeout(timer);
            }, delay);
        }
    }
}
