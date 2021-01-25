// WEIGHT CALCULATOR IN CHICKENS
// Want to know how you wiegh in chikens? No problem!

// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

function weightInChickens(weight) {
    let result = weight / 0.5;
    return result;
    // return weight / 0.5;
}

let userInput = prompt("Please enter your weight?");
let inputInKg = parseInt(userInput);

let resultElement = document.getElementById("result");

if (Number.isNaN(inputInKg)) {
    resultElement.innerText = "You have entered invalid input!";
} else {
    let result = weightInChickens(inputInKg);
    resultElement.innerText = `Your weight in chickens is ${result}`;
}

let head = document.getElementsByTagName("head")[0];
head.lastElementChild.innerText = "Chicken weight calculator";


// 1 + 2 + 3 + 4 = 10 