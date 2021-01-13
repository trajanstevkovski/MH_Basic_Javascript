// alert("Im connected!");

let score = 50;
let pass = 51;

let hasPassed = score >= pass;
console.log(hasPassed);

let x = 10;
let y = 15;
let z = 5;
let t = 19;

let isExpressionTrue = (x > y) && (z <= t);
console.log(isExpressionTrue);

let isExpressionTrue1 = (x > y) || (z <= t);
console.log(isExpressionTrue1);

let negation = !((x > y) || (z <= t));
console.log(negation);

let aritmechicExpresion = (5 + 3) >= (2 + 6);
console.log(aritmechicExpresion);

let isMoreComplexExpression = ((x > y) && (z <= t)) && (x < y) || (z >= t);
console.log(isMoreComplexExpression);
console.log("---------------------------------");

let a = 5;
let b = "5";

let isAEqualToB = a == b;
console.log(isAEqualToB);

let isAStrictEqualToB = a === b;
console.log(isAStrictEqualToB);

let name = "Trajan";
let name1 = "Trajan";

console.log(name === name1);

let falsy = 0;
let truty = "Trajan";

let isFalsy = falsy && trury;
console.log(isFalsy);

let isTruty = falsy || truty;
console.log(isTruty);

let n3 = !'Cat';
let n4 = !"";
console.log(`Negation of "Cat" is ${n3}`);
console.log(`Negation of "" is ${n4}`);
