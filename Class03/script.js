// console.log("Im connected!");

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not valid day");
        break;
}

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Thuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5){
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("Not valid day");
}

let freeDay = "Monday";

switch (freeDay) {
    case "Monday":
    case "Wednesday":
        console.log("We are on class");
        break;
    case "Thuesday":
    case "Thursday":
    case "Friday":
        console.log("We are free today");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Its the weekend");
        break;
    default:
        console.log("Not valid day");
        break;
}
