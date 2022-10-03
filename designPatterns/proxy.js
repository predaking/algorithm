/**
 * 代理模式
 * 概念：在不方便访问原对象的情况下访问代理对象
 * 1、保护代理：代理对象在一定条件下可以拒绝访问原对象
 * 2、虚拟代理：按需创建开销较大的对象（懒加载、预加载、合并http请求）
 * 3、缓存代理：缓存同样的计算操作结果防止重复计算，缓存http请求结果等等
 */

/**
 * 代理模式（例：图片预加载）
 */
var image = (function() {
    var img = document.createElement('img');
    document.body.appendChild(img);
    return {
        setSrc: function (src) {
            img.src = src;
        }
    }
})();

var proxyImage = (function() {
    var img = new Image();
    img.onload = function () {
        image.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            image.setSrc("默认图片.jpg");
            img.src = src;
        }
    }
})();

proxyImage.setSrc("真实图片.jpg");

