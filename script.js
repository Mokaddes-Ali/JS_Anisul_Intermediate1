// //Srting/Tempelate Literate

let fullName = 'Mokaddes Ali';

console.log(`My name is ${fullName}`);  //`` it's called backtick


// var not use now as a variable

//let and const are used now as a variable
//but let is changeable and const is not changeable

 let fullName1 = 'Mokaddes Ali';

 fullName = 'Ali';

console.log(fullName1); //let call last value


import {addNumber, sub} from './calculate.js'; 
console.log (addNumber(30, 20));
console.log (sub(30, 20));


//import person from person.js
import {person} from './person.js';
console.log(person.perInfo());

//Spread Operator && Rest Parameter

//Spread Operator in Array


const oldArray = [1, 2, 3, 4, 5];
const newArray = [...oldArray, 6, 7, 8, 9];
console.log(newArray);

//Spread Operator in Object
const oldObject = {name: 'Mokaddes', age: 25};
const newObject ={...oldObject, city: 'Dhaka', country: 'Bangladesh'};
console.log(newObject);

//Rest Parameter

const addNumber1 = (message, ...numbers) => {
    console.log(message);
    let sum = 0;
    for (const number of numbers) {
        sum += number;
        
    }
   
        return sum;
    };

console.log(addNumber1('The sum is:', 10, 20, 30, 40, 50));


//Destructuring

//Array Destructuring

const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1, num2, num3, num4, num5);

//Object Destructuring

const person1 = {
    name: 'Mokaddes',
    city: 'Dhaka',
    country: 'Bangladesh',
    language :{
        native: 'Bangla',
        fluent: 'English'
    }
};

const {name, city, country, language} = person1;
console.log(name, city, country, language.native, language.fluent);


//default value

const greet = (name = 'Please Input Name') => {
    console.log(`Hello ${name}`);
  
}

greet('Ali');
greet();











