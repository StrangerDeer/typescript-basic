export abstract class Crops {
  public price : number;
  public weight : number

  protected constructor(price: number, weight: number){
    this.price = price;
    this.weight = weight;
  }

  abstract getPrice(): number;
}