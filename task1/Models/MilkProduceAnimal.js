"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkProduceAnimal = void 0;
var Animal_1 = require("./Animal");
var FoodType_1 = require("./FoodType");
var MilkProduceAnimal = /** @class */ (function (_super) {
    __extends(MilkProduceAnimal, _super);
    function MilkProduceAnimal(name, amountOfProduct, days) {
        return _super.call(this, name, MilkProduceAnimal.milkFoodType, amountOfProduct, days) || this;
    }
    MilkProduceAnimal.milkFoodType = FoodType_1.FoodType.Milk;
    return MilkProduceAnimal;
}(Animal_1.Animal));
exports.MilkProduceAnimal = MilkProduceAnimal;
