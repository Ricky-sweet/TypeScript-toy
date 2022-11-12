"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/index.less");
console.log('--------');
var Food = /** @class */ (function () {
    function Food() {
        this.element = document.getElementById('food');
    }
    Object.defineProperty(Food.prototype, "X", {
        // 定义一个获取食物X轴坐标的方法
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "Y", {
        get: function () {
            return this.element.offsetTop;
        },
        enumerable: false,
        configurable: true
    });
    // 修改食物位置
    Food.prototype.change = function () {
        var top = Math.round(Math.random() * 29) * 10;
        var left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    };
    return Food;
}());
var food = new Food();
console.log('--------');
food.change();
