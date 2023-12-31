"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
var Apple_1 = require("./Model/Apple");
var Carrot_1 = require("./Model/Carrot");
var Cherry_1 = require("./Model/Cherry");
var Potato_1 = require("./Model/Potato");
var apple = new Apple_1.Apple();
var carrot = new Carrot_1.Carrot(0.1);
var cherry = new Cherry_1.Cherry();
var potato = new Potato_1.Potato(10);
var apple2 = new Apple_1.Apple();
var cal = new Calculator_1.Calculator();
cal.addCorps(apple);
cal.addCorps(carrot);
cal.addCorps(cherry);
cal.addCorps(potato);
cal.addCorps(apple2);
console.log(cal.getPriceOfBasket());
console.log(cal.getPriceOfBox());
