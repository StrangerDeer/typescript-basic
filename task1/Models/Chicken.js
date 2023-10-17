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
exports.Chicken = void 0;
var Bird_1 = require("./Bird");
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken(name) {
        return _super.call(this, name, Chicken.amount, Chicken.days) || this;
    }
    Chicken.amount = 1;
    Chicken.days = 1;
    return Chicken;
}(Bird_1.Bird));
exports.Chicken = Chicken;
