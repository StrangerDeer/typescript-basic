"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealingItem = void 0;
var HealingItem = /** @class */ (function () {
    function HealingItem(heal) {
        this.heal = heal;
    }
    HealingItem.prototype.effect = function (player) {
        var playerhp = player.hp;
        player.hp += this.heal;
        console.log("".concat(playerhp, " increased ").concat(this.heal, ". Now, He has ").concat(player.hp, " HP"));
    };
    return HealingItem;
}());
exports.HealingItem = HealingItem;
