import { Calculate } from "../Calculate";

export abstract class FizzBuzzM implements Calculate {

  protected  division: number;
  protected message: string;

  constructor (division: number, message: string){
    this.division = division;
    this.message = message;
  }

  public validate(number: number): boolean{
    return number % this.division === 0;
  };

  public sendMessage(): string{
    return this.message;
  };
  
}