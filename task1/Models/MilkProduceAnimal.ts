import { Animal } from "./Animal";
import { FoodType } from "./FoodType";

export abstract class MilkProduceAnimal extends Animal {
    private static readonly milkFoodType = FoodType.Milk;

    constructor(name: string, amountOfProduct: number, days: number) {
        super(name, MilkProduceAnimal.milkFoodType, amountOfProduct, days);
    }
}