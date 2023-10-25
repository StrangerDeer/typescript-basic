export abstract class Actor {
  public hp: number;
  public dmg: number;

  constructor(hp: number, dmg: number){
    this.hp = hp;
    this.dmg = dmg;
  }

  abstract attack(actor: Actor): void; 
}