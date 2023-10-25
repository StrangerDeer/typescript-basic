import { Enemy } from "./Enemy";

export class Zombie extends Enemy {
  private static readonly zombieHp = 80;
  private static readonly zombieDmg = 5;

  constructor(){
    super(Zombie.zombieHp, Zombie.zombieDmg)
  }
}