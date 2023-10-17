import { Animal } from "./Animal";
import { FoodType } from "./FoodType";


export abstract class Bird extends Animal {
    private static readonly birdFoodType = FoodType.Egg;

    constructor(name: string, amountOfProduct: number, days: number) {
        super(name, Bird.birdFoodType, amountOfProduct, days);
    }

}