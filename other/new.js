/**
 * new 对象的过程
 */
function Girl () {
	this.age = 26;

	this.sayAge = () => {
		return this.age - 8;
	}
}

const girl = new Girl();

function _new (Fn, args) {
	const res = Object.create(Fn.prototype);
	Fn.apply(res, args);
	return res;
}

const newGirl = _new (Girl);
const test = Girl ();

console.log(girl, newGirl, test);
