import { Enemy } from "./Enemy";

export class Spider extends Enemy {
  private static readonly spiderHp = 50;
  private static readonly spiderDmg = 2;

  constructor(){
    super(Spider.spiderHp, Spider.spiderDmg)
  }
}