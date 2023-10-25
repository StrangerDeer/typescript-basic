"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bus_1 = require("./Models/Bus");
var Car_1 = require("./Models/Car");
var CityRoad_1 = require("./Models/CityRoad");
var CountryRoad_1 = require("./Models/CountryRoad");
var HighWay_1 = require("./Models/HighWay");
var Truck_1 = require("./Models/Truck");
var car = new Car_1.Car("AAA 111");
var truck = new Truck_1.Truck("BBB 333");
var bus = new Bus_1.Bus("CCC 333");
var city = new CityRoad_1.CityRoad();
var country = new CountryRoad_1.CountryRoad();
var highWay = new HighWay_1.HighWay();
city.makeSpeed(car);
country.makeSpeed(car);
country.makeSpeed(truck);
country.makeSpeed(bus);
highWay.makeSpeed(car);
highWay.buyTicket(truck.licencePlate);
highWay.makeSpeed(truck);