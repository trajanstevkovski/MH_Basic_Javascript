let submitBtn = document.getElementById("submitBtn");
let inputFullName = document.getElementById("fullName");
let formResult = document.getElementById("formInfo");

inputFullName.addEventListener("keyup", function (event) {
    let inputValue = event.target.value;
    formResult.style.color = "black";
    clearHtml(formResult);
    formResult.innerText += inputValue;
});

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;

    clearHtml(formResult);

    if (fullName === "") {
        formResult.style.color = "red";
        formResult.innerHTML += `<p>Invalid input, please enter some value in the field!</p>`;
    } else {
        formResult.style.color = "black";
        formResult.innerHTML += `<p>Fullname: ${fullName}</p>`;
    }
});

function clearHtml(element) {
    element.innerHTML = "";
}

//Excersise 01

// let element = document.getElementById("paragraph");
// let selectBtn = document.getElementById("btn");
// function changeStyle() {
//     element.style.color = "pink";
//     element.style.fontStyle = "italic";
//     element.style.fontSize = "25px";
// }
// selectBtn.onclick = changeStyle;



// Excercise 02

// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' 
// values and use the values as parameters for a new function which will add them to string
// Finaly print the values

document.getElementById("saveBtn").addEventListener("click", function () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let resultDiv = document.getElementById("resultDiv");
    showProfileInfo(firstName, lastName, email, password, resultDiv);
});

function showProfileInfo(firstName, lastName, email, password, element) {
    element.innerText = "";
    let fullInfo = `Fullname: ${firstName} ${lastName}, \nEmail: ${email} \nPassword: ${password}`;
    element.innerText = fullInfo;
}