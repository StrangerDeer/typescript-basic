import { Crops } from "./Crops";

export abstract class Fruit extends Crops{

  private static readonly fruitWeight = 0;

  constructor(price: number){
    super(price, Fruit.fruitWeight)
  }

  override getPrice(): number {
    return this.price;
  }
}