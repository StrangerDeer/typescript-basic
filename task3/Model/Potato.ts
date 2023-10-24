import { Vegetable } from "./Vegetable";

export class Potato extends Vegetable {
  private static readonly potatoPrice = 0.5;

  constructor(weight: number){
    super(Potato.potatoPrice, weight)
  }
}