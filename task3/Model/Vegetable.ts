import { Crops } from "./Crops";

export abstract class Vegetable extends Crops{

  constructor(value: number, weigth: number){
    super(value, weigth);
    this.weight = weigth;
  }

  override getPrice(): number {
    return this.weight * this.price;
  }

} 