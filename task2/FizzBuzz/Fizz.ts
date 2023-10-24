import { FizzBuzzM } from "./FizzBuzzM";

export class Fizz extends FizzBuzzM {
  private static readonly _division = 3;
  private static readonly _message = "Fizz";

  constructor(){
    super(Fizz._division, Fizz._message);
  }
 
}