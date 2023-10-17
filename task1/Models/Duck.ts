import { Bird } from "./Bird";

export class Duck extends Bird{
    private static readonly amount = 3;
    private static readonly days = 10;


    constructor(name: string){
        super(name, Duck.amount, Duck.days)
    }
}