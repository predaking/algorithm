/**
 * 发布订阅模式（观察者模式）
 * 概念：当一个对象的状态发生改变时，依赖它的所有对象都将得到通知
 * 1、用于消息通信
 * 2、可先发布再订阅
 */

/**
 * 发布订阅模式（例：可先发布后订阅）
 */
var event = (function() {
    var eventList = {};
    var stack = [];

    var listen = function(key, fn) {
        if (!eventList[key]) {
            eventList[key] = [];
        }
        eventList[key].push(fn);
        for (var i = 0, l = stack.length; i < l; ++i) {
            if (stack[i][0] === key) {
                trigger.apply(null, Array.prototype.slice.call(stack[i]));
                stack.splice(i, 1);
                return;
            }
        }
    }

    var trigger = function() {
        var key = Array.prototype.shift.apply(arguments);
        var event = eventList[key];
        if (!event || !event.length) {
            stack.push([key].concat(Array.prototype.slice.call(arguments)));
            return;
        }
        for (var i = 0, l = event.length; i < l; ++i) {
            event[i].apply(event[i], arguments);
        }
    }

    return {
        listen,
        trigger
    };
})();

event.listen('test', function(data) {
    console.log('data: ', data);
});
event.trigger('test', 'Hello World');
