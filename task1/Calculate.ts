import { Animal } from "./Models/Animal";
import { FoodType } from "./Models/FoodType";

export class Calculate {

    public getYield(animal: Animal, end: number): string {
        const amount = animal.amountOfProduct;
        const days = animal.daysToProduce;

        let produce = 0;

        for(let i = 1; i <= end; i++){
            if(i % days === 0){
                produce += amount;
            }
        }

        let result = `${animal.name} will produce ${produce} ${FoodType[animal.foodType]}.`;


        return result;
    }

   

}
