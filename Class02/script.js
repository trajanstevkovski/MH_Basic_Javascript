// alert("Connected successfuly!");

let sedc = "SEDC";
let year = "2019";

let concat = sedc + " " + year;
console.log(concat);

let sedc2019 = "SEDC" + " " + 2020;
console.log(sedc2019);

let strNum = "2";
let num = 4;

let result = strNum + num;
console.log(result);

let strNum1 = 4;
let num1 = "2";

let result1 = strNum1 + num1;
console.log(result1);
console.log(4 - "2");
console.log(4 * "2");
console.log(4 / "2");


let hello = "Hello from " + sedc + " academy " + year;
console.log(hello);
let name = "Trajan";
let age = 33;
let place = "Skopje";
let url = "www.example.com?name=" + name + "&age=" + age + "&place=" + place; 
console.log(url);

let url1 = `www.example.com?name=${name}&age=${age}&place=${place}`;
console.log(url1)

// let singleQuotes = 'It's really nice to be a programmer';
let singleQuotesEsacpe = 'It\'s really nice to be a programmer';
let doubleQuotes = "It's really nice to be a programmer";
let backTicks = `It's really nice to be a programmer`;


// ============= NAN
let num3 = 5;
let srt = "Trajan";

let result3 = num3 - srt;
console.log(result3);
console.log(typeof result3);

console.log(result3 == NaN);
console.log(result3 === NaN);

let isSrtNan = isNaN(srt);
let isNum3Nan = isNaN(num3);
console.log(isSrtNan);
console.log(isNum3Nan);

console.log("String" + srt + "is nan = " + Number.isNaN(srt));
console.log(`Number ${num3} is nan = ${Number.isNaN(num3)}`);
console.log(`Result ${result3} is Nan = ${Number.isNaN(result3)}`);


let a = 1 / 0;    // Infinity 
let b = Infinity; // Infinity
let c = -1 / 0;    // -Infinity
let d = -Infinity; // -Infinity

console.log(a);
console.log(b);
console.log(c);
console.log(d);