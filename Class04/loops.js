// console.log("Loops connected");

// let counter = 0;
// while (counter <= 20) {
//     console.log(counter);
//     counter++;
// }
// console.log(counter);
// console.log("I have finished");

let numbers = [1, 3, 2, 1, 555, 4, 6, 123, -12, 312, 543];
// let index = 0;

// while (index < numbers.length) {
//     console.log(`Element on position ${index}: ${numbers[index]}`);
//     index++;
// }

// index = 0;
// while (index <= numbers.length - 1) {
//     if (numbers[index] > 0) {
//         console.log(`Element on position ${index}: ${numbers[index]}`);
//     }
//     index++;
// }


// let counter = 0;
// let min = Infinity;
// let max = -Infinity;

// while (counter < numbers.length) {
//     let el = numbers[counter];

//     if (el > max) {
//         max = el;
//     }

//     if (el < min) {
//         min = el;
//     }

//     counter++;
// }

// console.log(`The maximum value in the array of number is: ${max} and the minimum value in the array is ${min}`);


// Decription: The Math object allows you to perform mathematical tasks.
// Math.pow(x,y); - Returns the value of x to the power of y
// Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150

// let counter = 101;
// let sum = 0;

// while (counter <= 150) {
//     let power = Math.pow(counter, 2);
//     // sum = sum + power;
//     sum += power;
//     counter++;
// }

// console.log(sum);

// Action: Write a JavaScript program that will read in a number and write out its digits

// let input = prompt("Enter number: ");
// let parsedInput = parseInt(input);

// while (parsedInput !== 0) {
//     let digit = parsedInput % 10;
//     console.log(digit);
//     parsedInput = Math.floor(parsedInput / 10);
// }

// 1234 % 10 -> 4
// 1234 / 10 -> 123
// 1 / 10 -> 0


// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 1000);

// let num1 = 0;
// while (num1 <= 10) {
//     console.log(num1);
//     num1++;
// }

// for (let num = 0; num <= 10; num++){
//     console.log(num);
// }

let numbers1 = [1, 3, 2, 1, 555, 4, 6, 123, -12, 312, 543];

// for (let i = 0; i < numbers1.length; i++) {
//     console.log(numbers1[i]);
// }

// let input = parseInt(prompt("Enter number"));

// for (let i = input; i !== 0; i = Math.floor(i / 10)){
//     let digit = i % 10;
//     console.log(digit);
// }


// get the sum of even and the sum of odd numbers from array

let numArr = [1, 2, 3, 4, 234, 123, 5, 1231, 43, 123, 44, 123, 44, 3, 22, 98];

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < numArr.length; i++) {
    let el = numArr[i];

    if (el % 2 === 0) {
        sumEven += el;
    } else {
        sumOdd += el;
    }
}

console.log(`The sum of even numbers is ${sumEven}`);
console.log(`The sum of odd numbers is ${sumOdd}`);