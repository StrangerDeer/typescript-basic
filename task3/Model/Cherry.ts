import { Fruit } from "./Fruit";

export class Cherry extends Fruit {
  private static readonly cherryValue = 1.2;

  constructor(){
    super(Cherry.cherryValue)
  }
}