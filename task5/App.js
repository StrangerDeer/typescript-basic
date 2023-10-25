"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Apple_1 = require("./Models/Apple");
var Player_1 = require("./Models/Player");
var Skeleton_1 = require("./Models/Skeleton");
var Spear_1 = require("./Models/Spear");
var Spider_1 = require("./Models/Spider");
var Sword_1 = require("./Models/Sword");
var Zombie_1 = require("./Models/Zombie");
var player = new Player_1.PLayer();
var sword = new Sword_1.Sword();
console.log(player.dmg);
sword.effect(player);
console.log(player.dmg);
var skeleton = new Skeleton_1.Skeleton();
while (player.hp > 0 && skeleton.hp > 0) {
    player.attack(skeleton);
    skeleton.attack(player);
}
console.log("---------------------------------------");
var zombie = new Zombie_1.Zombie();
while (player.hp > 0 && zombie.hp > 0) {
    player.attack(zombie);
    zombie.attack(player);
}
console.log("----------------------------------------");
var apple = new Apple_1.Apple();
var spear = new Spear_1.Spear();
apple.effect(player);
spear.effect(player);
var spider = new Spider_1.Spider();
while (player.hp > 0 && spider.hp > 0) {
    player.attack(spider);
    spider.attack(player);
}
