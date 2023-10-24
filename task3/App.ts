import { Calculator } from "./Calculator";
import { Apple } from "./Model/Apple";
import { Carrot } from "./Model/Carrot";
import { Cherry } from "./Model/Cherry";
import { Potato } from "./Model/Potato";

const apple = new Apple();
const carrot = new Carrot(0.1);
const cherry = new Cherry();
const potato = new Potato(10);
const apple2 = new Apple();
const cal = new Calculator();

cal.addCorps(apple);
cal.addCorps(carrot);
cal.addCorps(cherry);
cal.addCorps(potato);
cal.addCorps(apple2);

console.log(cal.getPriceOfBasket());
console.log(cal.getPriceOfBox());