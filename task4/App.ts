import { Bus } from "./Models/Bus";
import { Car } from "./Models/Car"
import { CityRoad } from "./Models/CityRoad";
import { CountryRoad } from "./Models/CountryRoad";
import { HighWay } from "./Models/HighWay";
import { Truck } from "./Models/Truck";

let car = new Car("AAA 111");
let truck = new Truck("BBB 333");
let bus = new Bus("CCC 333");

let city = new CityRoad();
let country = new CountryRoad();
let highWay = new HighWay();

city.makeSpeed(car);
country.makeSpeed(car);
country.makeSpeed(truck);
country.makeSpeed(bus);

highWay.makeSpeed(car);
highWay.buyTicket(truck.licencePlate);
highWay.makeSpeed(truck);