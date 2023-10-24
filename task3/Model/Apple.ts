import { Fruit } from "./Fruit";

export class Apple extends Fruit{
  private static readonly applePrice = 0.4;

  constructor(){
    super(Apple.applePrice);
  }
}