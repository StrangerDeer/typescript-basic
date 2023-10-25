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
exports.PLayer = void 0;
var Actor_1 = require("./Actor");
var PLayer = /** @class */ (function (_super) {
    __extends(PLayer, _super);
    function PLayer() {
        return _super.call(this, PLayer.playerHp, PLayer.playerDmg) || this;
    }
    PLayer.prototype.attack = function (enemy) {
        enemy.hp = enemy.hp - this.dmg;
        console.log("".concat(enemy.constructor.name, " has ").concat(enemy.hp, " HP"));
    };
    PLayer.playerHp = 100;
    PLayer.playerDmg = 1;
    return PLayer;
}(Actor_1.Actor));
exports.PLayer = PLayer;
