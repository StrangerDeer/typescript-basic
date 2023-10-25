import { Apple } from "./Models/Apple";
import { Hammer } from "./Models/Hammer";
import { PLayer } from "./Models/Player";
import { Skeleton } from "./Models/Skeleton";
import { Spear } from "./Models/Spear";
import { Spider } from "./Models/Spider";

import { Sword } from "./Models/Sword";
import { Zombie } from "./Models/Zombie";

const player = new PLayer();
const sword = new Sword();

sword.effect(player);

const skeleton = new Skeleton();

while(player.hp > 0 && skeleton.hp > 0){
  player.attack(skeleton);
  skeleton.attack(player);
}

console.log("---------------------------------------")
const zombie = new Zombie();

while(player.hp > 0 && zombie.hp > 0){
  player.attack(zombie);
  zombie.attack(player);
}

console.log("----------------------------------------")
const apple = new Apple();
const spear = new Spear();

apple.effect(player);
spear.effect(player);

const spider = new Spider();

while(player.hp > 0 && spider.hp > 0){
  player.attack(spider);
  spider.attack(player);
}
