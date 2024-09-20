/**
 * @description debounce
 */
function debounce (fn, delay = 500, immediate) {
    let timer = null;

    return function () {
        const _this = this;
        if (timer) {
            clearTimeout(timer);
        } 

        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(function () {
                fn.apply(_this, arguments);
                timer = null;
            }, delay);
            if (callNow) {
                fn.apply(_this, arguments);
            }
        } else {
            console.log('timer');
            timer = setTimeout(() => {
                fn.apply(_this, arguments);
            }, delay);
        }
    }
}