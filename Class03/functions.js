// console.log("Im Connected");


// function declaration
function functionName() {
    // code goes here
    console.log("Function is executed");
}

// function execution
// functionName();
// functionName();
// functionName();
// functionName();

// bad naming
function a() {
    // sobiranje na dva broja
}

a();



// function with arguments
function sayHelloTo(name) {
    console.log(`Hello ${name}`);
}

// sayHelloTo("Trajan");
// sayHelloTo();

let name = "Trajan Stevkovski";
//sayHelloTo(name);

function sum(a, b) {
    let result = a + b;
    console.log(`The result of the sum of ${a} + ${b} is ${result}`);
}

// sum(1, 3);

// sum(); // teh params will be undefined
// sum(3); // second param will be undefined
// sum(1, 2, 3, 4, 5, 6, 7, 8); // a = 1 b = 2, rest is ignored


function multiplication(a, b) {
    let result = a * b;
    console.log(`The result of the multiplication of ${a} * ${b} is ${result}`);
    return result; 
}

// multiplication(2, 2);
// let result = multiplication(2, 3);
// console.log(result);

// let secondResult = multiplication(2, result);
// console.log(secondResult);

// let thirdResult = multiplication(result, secondResult);
// console.log(thirdResult);


// function with default params
function multiplication2(a, b = 2) {
    let result = a * b;
    console.log(`The result of the multiplication of ${a} * ${b} is ${result}`);
    return result; 
}

// multiplication2();
// let result1 = multiplication2(2);
// console.log(result1);
// let result2 = multiplication2(6, 6);
// console.log(result2);

function power(a, b = 2) {
    
}

function powerOfThree(a) {
     // a * a * a
}
