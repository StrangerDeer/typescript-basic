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
exports.Goat = void 0;
var MilkProduceAnimal_1 = require("./MilkProduceAnimal");
var Goat = /** @class */ (function (_super) {
    __extends(Goat, _super);
    function Goat(name) {
        return _super.call(this, name, Goat.amount, Goat.days) || this;
    }
    Goat.amount = 1;
    Goat.days = 7;
    return Goat;
}(MilkProduceAnimal_1.MilkProduceAnimal));
exports.Goat = Goat;
