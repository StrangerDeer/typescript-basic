import { MilkProduceAnimal } from "./MilkProduceAnimal";

export class Cow extends MilkProduceAnimal{
    private static readonly amount = 1;
    private static readonly days = 1;


    constructor(name: string){
        super(name, Cow.amount, Cow.days)
    }
}