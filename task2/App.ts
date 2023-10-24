import { Buzz } from "./FizzBuzz/Buzz";
import { Fizz } from "./FizzBuzz/Fizz";
import { FizzBuzz } from "./FizzBuzz/FizzBuzz";
import { FizzBuzzM } from "./FizzBuzz/FizzBuzzM";

let result = "";
let fizzbuzz: FizzBuzzM[] = [];
let value = 9;

//fizzbuzz.push(new FizzBuzz());
fizzbuzz.push(new Fizz());
fizzbuzz.push(new Buzz());

for (const element of fizzbuzz) {
  
  if(element.validate(value)){
    result += element.sendMessage();
  }
}

console.log(result);