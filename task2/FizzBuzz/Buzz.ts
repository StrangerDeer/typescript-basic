import { FizzBuzzM } from "./FizzBuzzM";

export class Buzz extends FizzBuzzM {
  private static readonly _division = 5;
  private static readonly _message = "Buzz";

  constructor(){
    super(Buzz._division, Buzz._message)
  }

}