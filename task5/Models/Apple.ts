import { HealingItem } from "./HealingItem";

export class Apple extends HealingItem {
  private static readonly appleHealing = 10;

  constructor(){
    super(Apple.appleHealing);
  }
}