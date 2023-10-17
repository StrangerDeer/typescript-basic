import { FoodType } from "./FoodType";

export abstract class Animal{
    public name: string;
    public foodType: FoodType;
    public amountOfProduct : number;
    public daysToProduce: number;

    constructor(name : string, foodtype: FoodType, amountOfProduct : number, days: number){
        this.name = name;
        this.foodType = foodtype;
        this.amountOfProduct = amountOfProduct;
        this.daysToProduce = days;
    }

  
}