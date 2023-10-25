import { Weapon } from "./Weapon";

export class Spear extends Weapon {
  private static readonly spearDmg = 15;

  constructor(){
    super(Spear.spearDmg);
  }
}