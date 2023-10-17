import { MilkProduceAnimal } from "./MilkProduceAnimal";

export class Goat extends MilkProduceAnimal{
    private static readonly amount = 1;
    private static readonly days = 7;


    constructor(name: string){
        super(name, Goat.amount, Goat.days)
    }
}