import { Calculate } from "./Calculate";
import { Chicken } from "./Models/Chicken";
import { Cow } from "./Models/Cow";
import { Duck } from "./Models/Duck";
import { Goat } from "./Models/Goat";

const cal = new Calculate();
const days = 50;

const chicken = new Chicken("Loli");
const duck = new Duck("Herold");
const cow = new Cow("Riska");
const goat = new Goat("Rizi");

console.log(cal.getYield(chicken, days));
console.log(cal.getYield(duck, days));
console.log(cal.getYield(cow, days));
console.log(cal.getYield(goat, days));

