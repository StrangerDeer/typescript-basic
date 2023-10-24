"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzzM = void 0;
var FizzBuzzM = /** @class */ (function () {
    function FizzBuzzM(division, message) {
        this.division = division;
        this.message = message;
    }
    FizzBuzzM.prototype.validate = function (number) {
        return number % this.division === 0;
    };
    ;
    FizzBuzzM.prototype.sendMessage = function () {
        return this.message;
    };
    ;
    return FizzBuzzM;
}());
exports.FizzBuzzM = FizzBuzzM;
