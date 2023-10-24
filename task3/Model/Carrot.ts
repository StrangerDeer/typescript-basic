import { Vegetable } from "./Vegetable";

export class Carrot extends Vegetable {
  private static readonly carrotPrice = 0.3;

  constructor(weight: number){
    super(Carrot.carrotPrice, weight)
  }
}