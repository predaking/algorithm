/**
 * 中介者模式
 * 概念：通过创建一个中介者对象让其他对象只与中介者对象交互通信，从而消除相关对象之间的强耦合关系
 * 1、可结合发布订阅模式实现中介者对象
 * 2、逻辑太复杂会增加中介者对象的复杂度
 */

/**
 * 中介者模式（例：购物车）
 */
var mediator = function () {
    var colorSelect = document.getElementById('colorSelect');
    var numberInput = document.getElementById('numberInput');
    var colorInfo = document.getElementById('colorInfo');
    var numberInfo = document.getElementById('numberInfo');
    var memorySelect = document.getElementById('memorySelect');
    var memoryInfo = document.getElementById('memoryInfo');
    var nextBtn = document.getElementById('nextBtn');

    var goods = {
        'red|32G': 3,
        'blue|16G': 6,
        'blue|32G': 1,
        'red|16G': 0,
    };

    return {
        changed: function (obj) {
            var color = colorSelect.value;
            var number = numberInput.value;
            var memory = memorySelect.value;

            var stock = goods[color + '|' + memory];

            if (obj === colorSelect) {
                colorInfo.innerHTML = color;
            } else if (obj === numberInput) {
                numberInfo.innerHTML = number;
            } else {
                memoryInfo.innerHTML = memory;
            }

            if (!color) {
                nextBtn.innerHTML = "请选择手机颜色";
                nextBtn.disabled = true;
                return;
            }

            if (((number - 0) | 0) !== number - 0) {
                nextBtn.innerHTML = "请输入正确的购买数量";
                nextBtn.disabled = true;
                return;
            }

            if (!memory) {
                nextBtn.innerHTML = "请选择手机内存";
                nextBtn.disabled = true;
                return;
            }

            if (stock < number) {
                nextBtn.innerHTML = "库存不足";
                nextBtn.disabled = true;
                return;
            }

            nextBtn.innerHTML = "放入购物车";
            nextBtn.disabled = false;
        }
    }
}();

colorSelect.onchange = function () {
    mediator.changed(this);
}

numberInput.oninput = function () {
    mediator.changed(this);
}

memorySelect.onchange = function () {
    mediator.changed(this);
}
