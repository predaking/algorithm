/**
 * 策略模式
 * 概念：封装的一系列用于用途方向一致的规则
 * 1、避免书写大量的条件判断或者选择语句
 * 2、易于扩展，易于移植，易于修改
 * 3、语义化好的情况下还容易定位出现问题的位置
 */

/**
 * 策略模式（例：表单校验）
 */
var strategies = {
    isNonEmpty: function (value, errMsg) {
        if (value == '') {
            return errMsg;
        }
    },
    minLength: function (value, length, errMsg) {
        if (value.length < length) {
            return errMsg;
        }
    },
    isMobile: function (value, errMsg) {
        if (!/1\d{10}/g.test(value)) {
            return errMsg;
        }
    }
};

var Validator = function () {
    this.cache = [];
};

Validator.prototype.add = function (dom, rules) {
    var self = this;
    for (var i = 0, rule; rule = rules[i++];) {
        (function (rule) {
            var strategyAry = rule.strategy.split(':');
            var errMsg = rule.errMsg;
            self.cache.push(function () {
                var strategy = strategyAry.shift();
                strategyAry.unshift(dom.value);
                strategyAry.push(errMsg);
                return strategies[strategy].apply(dom, strategyAry);
            })
        }(rule));
    }
}

Validator.prototype.start = function () {
    for (var i = 0, validateFunc; validateFunc = this.cache[i++];) {
        var errMsg = validateFunc && validateFunc();
        if (errMsg) {
            return errMsg;
        }
    }
};

var form = document.getElementById('form');

var validateFunc = function () {
    var validator = new Validator();
    validator.add(form.username, [{
        strategy: 'isNonEmpty',
        errMsg: '用户名不能为空'
    }, {
        strategy: 'minLength:10',
        errMsg: '用户名不能少于10位'
    }]);
    validator.add(form.password, [{
        strategy: 'minLength:6',
        errMsg: '密码不能少于6位'
    }]);
    validator.add(form.phone, [{
        strategy: 'isMobile',
        errMsg: '手机号格式错误'
    }]);
    var errMsg = validator.start();
    return errMsg;
}

form.onsubmit = function (e) {
    var errMsg = validateFunc();
    if (errMsg) {
        alert(errMsg);
        return false;
    }
}