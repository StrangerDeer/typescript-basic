"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Buzz_1 = require("./FizzBuzz/Buzz");
var Fizz_1 = require("./FizzBuzz/Fizz");
var result = "";
var fizzbuzz = [];
var value = 9;
//fizzbuzz.push(new FizzBuzz());
fizzbuzz.push(new Fizz_1.Fizz());
fizzbuzz.push(new Buzz_1.Buzz());
for (var _i = 0, fizzbuzz_1 = fizzbuzz; _i < fizzbuzz_1.length; _i++) {
    var element = fizzbuzz_1[_i];
    if (element.validate(value)) {
        result += element.sendMessage();
    }
}
console.log(result);
