/**
 * 职责链模式
 * 概念：将多个处理对象连成链，并沿着这条链传递请求，直到有对象处理它为止
 * 1、请求发送者只需知道链的第一个节点，降低了与真实处理对象的耦合关系
 * 2、可通过修改职责链节点逻辑实现职责链灵活拆分与重组
 */

/**
 * 职责链模式（例：优惠券设置）
 */
function Chain (fn) {
    this.fn = fn;
    this.successor = null;
}

Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
}

Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments);

    if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }

    return ret;
}

var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay) {
        console.log('500元定金预购，得到100优惠券');
    } else {
        return 'nextSuccessor';
    }
};

var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay) {
        console.log('200元定金预购，得到50优惠券');
    } else {
        return 'nextSuccessor';
    }
};

var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券');
    } else {
        console.log('库存不足');
    }
};

var chainNodeOfOrder500 = new Chain(order500);
var chainNodeOfOrder200 = new Chain(order200);
var chainNodeOfOrderNormal = new Chain(orderNormal);

chainNodeOfOrder500
    .setNextSuccessor(chainNodeOfOrder200)
    .setNextSuccessor(chainNodeOfOrderNormal);

// chainNodeOfOrder500.passRequest(3, true, 500);
