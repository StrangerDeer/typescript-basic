"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon(dmg) {
        this.dmg = dmg;
    }
    Weapon.prototype.effect = function (player) {
        if (player.dmg < this.dmg) {
            var prev = player.dmg;
            player.dmg = this.dmg;
            console.log("".concat(prev, " increased with ").concat(this.dmg, ". Now, He has ").concat(player.dmg, " DMG"));
        }
    };
    return Weapon;
}());
exports.Weapon = Weapon;
