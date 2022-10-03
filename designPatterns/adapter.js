/**
 * 适配器模式
 * 概念：让原本接口不兼容的两个软件实体可以通过适配器进行转换
 */

/**
 * 适配器模式（例：统一接口方法）
 */
var googleMap = {
    show: function () {
        console.log("显示谷歌地图");
    }
};

var baiduMap = {
    display: function () {
        console.log("显示百度地图");
    }
}

var renderMap = function (map) {
    if (map.show instanceof Function) {
        map.show();
    }
}

var baiduMapAdapter = {
    show: function () {
        return baiduMap.display();
    }
}

renderMap(googleMap);
renderMap(baiduMapAdapter);