import { HealingItem } from "./HealingItem";

export class Banana extends HealingItem {
  private static readonly bananaHealing = 20;

  constructor(){
    super(Banana.bananaHealing);
  }
}