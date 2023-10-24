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
exports.Fizz = void 0;
var FizzBuzzM_1 = require("./FizzBuzzM");
var Fizz = /** @class */ (function (_super) {
    __extends(Fizz, _super);
    function Fizz() {
        return _super.call(this, Fizz._division, Fizz._message) || this;
    }
    Fizz._division = 3;
    Fizz._message = "Fizz";
    return Fizz;
}(FizzBuzzM_1.FizzBuzzM));
exports.Fizz = Fizz;
