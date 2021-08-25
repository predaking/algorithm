/**
 * 收银台
 * @method checkCashRegister
 * @param {number} price
 * @param {number} cash
 * @param {array} cid
 */
function checkCashRegister(price, cash, cid) {

    let charge = cash - price;

    const res = [];

    const enumData = new Map([
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]);

    const cidMap = new Map(cid);
    const BALANCE = [...cidMap.values()].reduce((acc, cur) => acc += cur);

    if (charge < 0 || BALANCE < charge) {
        return {
            status: 'INSUFFICIENT_FUNDS',
            change: []
        };
    }

    if (charge === BALANCE) {
        return {
            status: 'CLOSED',
            change: cid
        };
    }

    var cid = cid.reverse();

    for (let [key, value] of cid) {
        if (enumData.get(key) <= charge) {
            if (charge >= value) {
                res.push([key, value]);
                charge = Number((charge - value).toFixed(2));
            }
            else {
                const newCharge = Math.floor((charge * 100) / (enumData.get(key) * 100)) * enumData.get(key);
                res.push([key, newCharge]);
                charge = Number((charge - newCharge).toFixed(2));
            }
        }
    }

    if (charge) {
        return {
            status: 'INSUFFICIENT_FUNDS',
            change: []
        }
    }

    return {
        status: 'OPEN',
        change: res
    };
}
// 96.74
// console.log(checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]));

/**
 * 美国电话号
 * @method telephoneCheck
 * @param {string} str
 */
function telephoneCheck(str) {
    // const regExp = /\d{3}-\d{3}-\d{4}/g;
    // const regExp = /\(\d{3}\)\d{3}-\d{4}/g;
    // const regExp = /\(\d{3}\)\s\d{3}-\d{4}/g;
    // const regExp = /\d{3}\s\d{3}\s\d{4}/g;
    // const regExp = /\d{10}/g;
    // const regExp = /1\s\d{3}\s\d{3}\s\d{4}/g;
    const patternArr = [
        /^1?[-\s]?\d{3}-\d{3}-\d{4}$/g,
        /^1?[-\s]?\(\d{3}\)\d{3}-\d{4}$/g,
        /^1?[-\s]?\(\d{3}\)\s\d{3}-\d{4}$/g,
        /^1?[-\s]?\d{3}\s\d{3}\s\d{4}$/g,
        /^1?[-\s]?\d{10}$/g,
    ];

    return patternArr.some(item => item.test(str));
}

// telephoneCheck("555 555 5555");

/**
 * 凯撒密码
 * @method rot13
 * @param {string} str
 */
function rot13(str) {
    const MIN = 'A'.charCodeAt(0);
    const MAX = 'Z'.charCodeAt(0);
    const LEN = 26;
    const STEP = 13;

    return str.toUpperCase().split('').map(item => {
        const asc = item.charCodeAt(0);
        if (asc >= MIN && asc <= MAX) {
            if (asc + STEP > MAX) {
                return String.fromCharCode(asc + STEP - MAX + MIN - 1);
            }
            return String.fromCharCode(asc + STEP);
        }
        return item;
    }).join('');
}

// console.log(rot13("SERR PBQR PNZC"));

/**
 * 罗马数字转换
 * @method convertToRoman
 * @param {number} num
 */
function convertToRoman(num) {
    const romanEnum = {
        0: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        1: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        2: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        3: ['', 'M', 'MM', 'MMM'],
    }
    return String(num).split('').reverse().map((item, index) => romanEnum[index][item]).reverse().join('');
}

// console.log(convertToRoman(798));

/**
 * 回文字符串
 * @method palindrome
 * @param {string} str
 */
function palindrome(str) {
    str = str.replace(/[_\W]+/g, '').toLowerCase();
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

// console.log(palindrome("2_A3*3<!--  -->#A2 asd*9)ad"));

/**
 * 轨道周期
 * @method orbitalPeriod
 * @param {array} arr
 */
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return arr.map(item => ({
        name: item.name,
        orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(item.avgAlt + earthRadius, 3) / GM))
    }));
}

// console.log(orbitalPeriod([
//     {
//         name: "iss", avgAlt: 413.6
//     }, {
//         name: "hubble", avgAlt: 556.7
//     }, {
//         name: "moon", avgAlt: 378632.553
//     }
// ]));


var Person = function(firstAndLast) {
      var name = firstAndLast;

      this.getFullName = function () {
          return name;
      };

      this.getFirstName = function () {
          return name.split(' ')[0];
      }

      this.getLastName = function () {
          return name.split(' ')[1];
      }

      this.setFirstName = function (firstName) {
          name = name.replace(/\w+(?=\s)/g, firstName);
      }

      this.setLastName = function (lastName) {
          name = name.replace(/(?<=\s)\w+/g, lastName);
      }

      this.setFullName = function (fullName) {
          name = fullName;
      }

      return name;
};

var bob = new Person('Bob Ross');

// bob.getFullName();
//
// console.log(Object.keys(bob).length)
// console.log(bob.setFirstName('John'))
// console.log(bob.getFullName())


function addTogether() {
    if (arguments.length > 1) {
        if ((typeof arguments[0] === 'number') && (typeof arguments[1] === 'number')) {
            return arguments[0] + arguments[1];
        }
        return;
    }

    const args = [...arguments];

    const res = () => {
        args.push(...arguments);
        return res;
    }

    res.toString = () => {
        if (args.length > 1) {
            if ((typeof args[0] === 'number') && (typeof args[1] === 'number')) {
                return args[0] + args[1];
            }
            return;
        }
        return;
    }

    return res;
}

// console.log(addTogether(2,3));
// console.log(addTogether(2)(3));
// console.log(addTogether(2));
// console.log(addTogether(2, '3'));

function add () {
    var args = Array.prototype.slice.call(arguments);

    var adder = function () {
        args.push(...arguments);
        console.log(args);
        return adder;
    }

    adder.toString = function () {
        console.log(args.reduce((acc, cur) => acc += cur));
        return args.reduce((acc, cur) => acc += cur);
    }

    return adder;
}

// console.log(add(1)(2)(3));
