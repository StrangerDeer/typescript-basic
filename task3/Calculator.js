"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Fruit_1 = require("./Model/Fruit");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.box = [];
        this.basket = [];
    }
    ;
    Calculator.prototype.addCorps = function (crop) {
        if (crop instanceof Fruit_1.Fruit) {
            this.basket.push(crop);
        }
        else {
            this.box.push(crop);
        }
    };
    Calculator.prototype.getPriceOfBox = function () {
        var result = 0;
        for (var _i = 0, _a = this.box; _i < _a.length; _i++) {
            var vegetable = _a[_i];
            result += vegetable.getPrice();
        }
        return result;
    };
    Calculator.prototype.getPriceOfBasket = function () {
        var result = 0;
        for (var _i = 0, _a = this.basket; _i < _a.length; _i++) {
            var fruit = _a[_i];
            result += fruit.getPrice();
        }
        return result;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
