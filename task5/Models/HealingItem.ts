import { Item } from "./Item";
import { PLayer } from "./Player";

export abstract class HealingItem implements Item {
  public heal: number;

  constructor(heal: number){
    this.heal = heal;
  }

  effect(player: PLayer): void {
    let playerhp = player.hp;

    player.hp += this.heal;

    console.log(`${playerhp} increased ${this.heal}. Now, He has ${player.hp} HP`);
  }


}