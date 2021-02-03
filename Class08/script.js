// console.log("Connected");

// let playerName = "Fred";
// let playerScore = 10000;
// let playerRank = 1;

// let playerName1 = "Fred1";
// let playerScore1 = 100002;
// let playerRank1 = 3;

// let playerName2 = "Fred2";
// let playerScore2 = 100001;
// let playerRank3 = 2;

// let playerDetails = ["Fred", 10000, 2];

// let player = new Object();
// player.name = "Fred";
// player.score = 10000;
// player.rank = 1;

// console.log(player);

// let hotel = {
//     name: "Quay",
//     rooms: 40,
//     booked: 25,
//     gym: true,
//     roomTypes: ["twin", "double", "suite"],
//     checkAvailability: function () {
//         return this.rooms - this.booked;
//     }
// }

// console.log(hotel);

let person = {
    firstName: "Trajan",
    lastName: "Stevkovski",
    age: 33,
    hobbies: ["Hiking", "Running", "Coding"],
    isLazy: true,

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    showHobbies: function () {
        for (let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
        }
    }
};

// console.log(person);

// console.log("The person's first name is: " + person.firstName);

// console.log(person.getFullName());

let firstName = person.firstName;
let lastName = person["lastName"];

// console.log(firstName);
// console.log(lastName);

// let input = prompt("Choise witch field you want to be shown: firstName, lastName, age, hobbies");

// if (input === "firstName") {
//     console.log(person.firstName);
// }
// else if () {
//     //.....
// } else if () {
//     //....
// }

// console.log(person[input]);

let palace = new Object();
palace.name = "Alexandar palace";
palace.rooms = 200;
palace.booked = 129;
palace.gym = false;

palace.checkAvailability = function () {
    return this.rooms - this.booked;
};

palace.name = "Holiday inn";
palace.abc = "abc";
palace["abcd"] = "abcd";

// console.log(palace);
// console.log(`There are ${palace.checkAvailability()} available rooms in the hotel ${palace.name}`);

delete palace.abc;
delete palace.abcd;


function Person(fName, lName, yearOfBirth) {
    this.firstName = fName;
    this.lastName = lName;
    this.yearOfBirth = yearOfBirth;

    this.calculateAge = function (dateOfBirth) {
        let currentYear = new Date().getFullYear();
        let years = currentYear - dateOfBirth;
        return years;
    };
}

let trajan = new Person("Trajan", "Stevkovski", 1987);
let bob = new Person("Bob", "Bobski", 1999);
let pero = new Person("Pero", "Perovski", 2002);

// console.log(trajan);
// console.log(bob);
// console.log(pero);

let age = trajan.calculateAge(trajan.yearOfBirth);
// console.log(age);


function windowSize() {
    console.log(this);
    let width = this.innerWidth;
    let height = this.innerHeight;
    return [width, height];
}

// console.log(windowSize());

let shape = {
	width: 600,
	height: 400,
    getArea: function () {
        console.log(this);
		return this.width * this.height;
	}
};

// windowSize();
// shape.getArea();

let width = 600;

let shape1 = {
    width: 300
}

function showMeWidth() {
    console.log(this.width);
}

showMeWidth(); // 600

shape1.showMeWidth = showMeWidth;

shape1.showMeWidth(); // 300
