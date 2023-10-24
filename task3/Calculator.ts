
import { Crops } from "./Model/Crops";
import { Fruit } from "./Model/Fruit";
import { Vegetable } from "./Model/Vegetable";

export class Calculator {
  private box: Vegetable[] = [];
  private basket: Fruit[] = [];

  constructor(){};

  addCorps(crop: Crops): void {
    if(crop instanceof Fruit){
      this.basket.push(crop);
    } else {
      this.box.push(crop);
    }
  }

  getPriceOfBox(): number {
    let result = 0;

    for (const vegetable of this.box) {
      result += vegetable.getPrice();
    }

    return result;
  }

  getPriceOfBasket(): number {
    let result = 0;

    for (const fruit of this.basket) {
      result += fruit.getPrice();
    }
    return result;
  }
}