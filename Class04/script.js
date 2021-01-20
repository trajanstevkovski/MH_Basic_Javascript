// console.log("Im Connected");


let emptyArray = [];
// console.log(emptyArray);
//             0          1           2            3          4          5          6
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//console.log(days);

let oneDay = days[1];
// console.log(oneDay);

days[3] = "Something else";
// console.log(days);

let lengthOfArray = days.length;
// console.log(lengthOfArray);

let lastElement = days[days.length - 1];
// console.log(lastElement);

let mixedArray = ["Trajan", 22, 33, true, undefined, false, "Orange", null];
// console.log(mixedArray);

// console.log(mixedArray[3]);


let days1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//days1[days1.length] = "Monday";
// console.log(days1);

//days1.push("Something else added");
// console.log(days1);
//days1.push("Item1", "Item2");
//console.log(days1);

//days1.unshift("Im first");
//console.log(days1);

//days1.unshift("item 01", "item 02");
// console.log(days1);

let lastVal = days1.pop();
// console.log(lastVal);
// console.log(days1);

let firstVal = days1.shift();
// console.log(firstVal);
// console.log(days1);

console.log(typeof days1);