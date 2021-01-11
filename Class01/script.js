console.log("Hello from Javascript!");

// good naming
let number;
number = 5;

let secondNumber = 10;

// bad naming
let a = 3;

// canot use number in frony
// let 4a = 3;
// can use number after first char
// let a4 = 4;

secondNumber = true;

let year = 2021;
let name = "Trajan";
let isRaining = true;
let notDefined;
let emptyValue = null;
let character = 'a';

console.log(year);
console.log(name);
console.log(isRaining);
console.log(notDefined);
console.log(emptyValue);
console.log(character);

let typeOfYear = typeof year;
console.log(typeOfYear);

let typeOfName = typeof name;
let typeOfIsRaining = typeof isRaining;
let typeOfNotDefined = typeof notDefined;
let typeOfEmptyValue = typeof emptyValue;

console.log(typeOfName);
console.log(typeOfIsRaining);
console.log(typeOfNotDefined);
console.log(typeOfEmptyValue);
console.log(typeof character);


let isEqual = null === undefined;
let isEqual1 = null == undefined;
let isEqual2 = null === null;

console.log(isEqual);
console.log(isEqual1);
console.log(isEqual2)

// console.log("This code is in comment");

/*
This way
We can use
Multiple lines
as a comment
*/

// "break" is reserved word in JS and cannot be set as variable name
// let break = 10;
// break;


let firstNum = 50;
let secondNum = 25;
let thirdNum = 25.5;

let addition = firstNum + secondNum;
console.log("Addition: ", addition);

let substraction = firstNum - secondNum;
console.log("Subsctraction: ", substraction);

let multuply = firstNum * secondNum;
console.log("Multiplication: ", multuply);

let division = firstNum / secondNum;
console.log("Division: ", division);

let divisionByZero = 10 / 0;
console.log(divisionByZero);

let mathExpresion = (firstNum + secondNum) / (firstNum - secondNum);
console.log("Mathematical expresion: ", mathExpresion);

let reminder = firstNum % secondNum;
console.log("Reminder: ", reminder);

let reminder1 = firstNum % thirdNum;
console.log("Reminder1: ", reminder1);

console.log("================================");

let counter = 1;
counter = counter + 1;
counter++;
console.log(counter);

counter += 100;
counter = counter + 100;
console.log(counter);

counter = counter - 1;
counter--;
console.log(counter);

counter = counter - 100;
counter -= 100;
console.log(counter);

counter += firstNum;
console.log(counter);