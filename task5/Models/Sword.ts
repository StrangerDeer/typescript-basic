import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  private static readonly swordDmg = 10;

  constructor(){
    super(Sword.swordDmg);
  }
}