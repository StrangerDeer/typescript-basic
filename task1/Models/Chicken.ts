import { Bird } from "./Bird";

export class Chicken extends Bird{
    private static readonly amount = 1;
    private static readonly days = 1;


    constructor(name: string){
        super(name, Chicken.amount, Chicken.days)
    }
}