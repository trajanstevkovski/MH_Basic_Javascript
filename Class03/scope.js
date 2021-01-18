// console.log("Im Connected");

// let name = "Trajan";

// function sayMyName() {
//     let name = "Petar";
//     // name = "Petar"
//     console.log("In function " + name);
// }
// console.log("Outside function before function " + name);
// sayMyName();
// console.log("Outside function after function " + name);

// this is ok
// var lastName = "Stevkovski";

// var lastName = "Perovski";

// Uncaught SyntaxError: Identifier 'lastName' has already been declared
// let lastName = "Stevkovski";

// let lastName = "Perovski";

// using var this is ok
// lastName = "Stevkovski";

// var lastName;

// Uncaught ReferenceError: Cannot access 'lastName1' before initialization
// lastName1 = "Stevkovski";

// let lastName1;

let name = "Trajan";

function scope01() {
    let lastName = "Stevkovski";
    // name = "Petar";
    console.log(lastName);
    function scope02() {
        name = "Pero";
        console.log(name);
    }
    scope02();
    console.log(name);
}

scope01();

// console.log(lastName);

if (2 == 3) {
    // this is separe scope from the global
}