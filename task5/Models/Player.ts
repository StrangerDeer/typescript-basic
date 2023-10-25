import { Actor } from "./Actor";
import { Enemy } from "./Enemy";

export class PLayer extends Actor {
  private static playerHp = 100;
  private static playerDmg = 1;

  constructor(){
    super(PLayer.playerHp, PLayer.playerDmg)
  }

  attack(enemy: Enemy): void {
    enemy.hp = enemy.hp - this.dmg;
    console.log(`${enemy.constructor.name} has ${enemy.hp} HP`)
  }

}