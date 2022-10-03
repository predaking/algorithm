/**
 * 享元模式
 * 概念：运用共享技术来有效支持大量细粒度的对象
 * 1、通过区分内部属性与外部属性的方式减少对象的创建
 * 2、内部属性较为独立，通常不会改变；外部属性根据场景会变化，不能被共享
 * 3、通过减少对象的创建量减少内存的占用从而达到性能优化
 * 4、可以通过对象池的方式达到同样的目的而不必区分内外属性
 */

/**
 * 享元模式（例：利用对象池加载多个iframe）
 */
var objectPoolFactory = function (createObjFn) {
    var objectPool = [];

    return {
        create: function () {
            if (objectPool.length) {
                return objectPool.shift();
            } else {
                return createObjFn.apply(this, arguments);
            }
        },
        recover: function (obj) {
            objectPool.push(obj);
        }
    }
}

var iframeFactory = objectPoolFactory(function () {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    iframe.onload = function () {
        iframe.onload = null;
        iframeFactory.recover(iframe); // 用完将对象放回到池子
    }

    return iframe;
});

var iframe1 = iframeFactory.create();
iframe1.src = "https://www.baidu.com";

var iframe2 = iframeFactory.create();
iframe2.src = "https://www.qq.com";

// ...