"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farm = void 0;
var Farm = /** @class */ (function () {
    function Farm() {
        this.animals = [];
    }
    Farm.prototype.addAnimal = function (animal) {
        this.animals.push(animal);
    };
    Farm.prototype.findAnimalByName = function (name) {
        return this.animals.filter(function (animal) { return animal.name === name; })[0];
    };
    return Farm;
}());
exports.Farm = Farm;
