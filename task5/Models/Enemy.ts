import { Actor } from "./Actor";
import { PLayer } from "./Player";

export abstract class Enemy extends Actor {

  constructor(enemyHp: number, enemyDmg: number){
    super(enemyHp, enemyDmg)
  }

  attack(player: PLayer): void {
    player.hp = player.hp - this.dmg;
    console.log(`Player has ${player.hp} HP`)
  }

}