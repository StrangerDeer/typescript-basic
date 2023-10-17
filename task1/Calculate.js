"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculate = void 0;
var FoodType_1 = require("./Models/FoodType");
var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.getYield = function (animal, end) {
        var amount = animal.amountOfProduct;
        var days = animal.daysToProduce;
        var produce = 0;
        for (var i = 1; i <= end; i++) {
            if (i % days === 0) {
                produce += amount;
            }
        }
        var result = "".concat(animal.name, " will produce ").concat(produce, " ").concat(FoodType_1.FoodType[animal.foodType], ".");
        return result;
    };
    return Calculate;
}());
exports.Calculate = Calculate;
