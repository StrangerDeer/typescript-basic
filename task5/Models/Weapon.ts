import { Item } from "./Item";
import { PLayer } from "./Player";

export abstract class Weapon implements Item{
  private dmg: number;

  constructor(dmg: number){
    this.dmg = dmg;
  }

  effect(player: PLayer): void {
    if(player.dmg < this.dmg){
      let prev = player.dmg;

      player.dmg = this.dmg;
      console.log(`${prev} increased with ${this.dmg}. Now, He has ${player.dmg} DMG`)
    }
  }

}