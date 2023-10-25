import { Weapon } from "./Weapon";

export class Hammer extends Weapon {
  private static readonly hammerDmg = 30;

  constructor(){
    super(Hammer.hammerDmg);
  }
}