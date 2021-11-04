/**
 * 节流函数（一定时间间隔内只执行一次）
 * @method throttle
 * @param {function} fn
 * @param {number} [duration=500]
 * @return {function} [description]
 */
const throttle = (fn, duration = 500) => {
	let last = 0;

	return function (...args) {
		const now = Date.now();

		if (last === 0 || now - last >= duration) {
			typeof fn === 'function' && fn.apply(this, args);
		}

		last = now;
	}
}
