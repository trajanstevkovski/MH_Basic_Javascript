// alert("Im Connected!");

let isRaining = true;

// if structure
// if (expression) {
    
// }

if (isRaining) {
    console.log("It is not a good time for a walk!");
} else {
    console.log("It is a good time for a walk!");
}

// let fridayCash = 36;

// if (fridayCash >= 50) {
//     alert("You should go out on a dinner and a movie.");
// } else if (fridayCash >= 35) {
//     alert("You should go out for a fine meal.");
// } else if (fridayCash >= 12) {
//     alert("You should go see a movie.");
// } else {
//     alert("Looks like you'll be watching tv.");
// }

// Excersise

/* Decription: Using prompt() display a dialog box that prompts the visitor for input. 
Will return null on 'Cancel' or the value provided on 'Ok'
Action: Ask the user how much money he has, and depending on the value, 
suggest to him what he should do*/

let cash = prompt("How much money you have?");

let parsedCash = parseInt(cash);

console.log(cash);
console.log(parsedCash);

if (Number.isNaN(parsedCash)) {
    alert("You have not entered a good value. Try again later.");
} else {
    if (parsedCash <= 30) {
        alert(`With cash of ${parsedCash} dollars, you can afford a beer in the park!`);
    } else if (parsedCash <= 60) {
        alert(`With cash of ${parsedCash} dollars, you can afford a dinner in a pub!`);
    } else if (parsedCash <= 90) {
        alert(`With cash of ${parsedCash} dollars, you can go to a restaurant!`);
    } else {
        alert(`With cash of ${parsedCash} dollars, you are very rich!`);
    }
}