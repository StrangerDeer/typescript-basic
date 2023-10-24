import { FizzBuzzM } from "./FizzBuzzM";

export class FizzBuzz extends FizzBuzzM {
  private static readonly _division = 15;
  private static readonly _message = "FizzBuzz";

  constructor(){
    super(FizzBuzz._division, FizzBuzz._message)
  }



}