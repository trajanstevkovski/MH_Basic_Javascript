let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let result = document.getElementById("result");

let counter = 0;

result.innerText = counter;

increaseBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(event);
    counter++;
    result.innerText = counter;
});

function decreaseCounter() {
    counter--;
    result.innerText = counter;
}

decreaseBtn.addEventListener("click", decreaseCounter);

let element1 = document.getElementById("redDiv");

function changeColorOnDiv() {
    element1.style.backgroundColor = "red";
    // element1.removeEventListener("mousemove", changeBackgroundColorToInitial);
}

// element1.addEventListener("mousemove", changeColorOnDiv);
// element1.addEventListener("mouseleave", changeBackgroundColorToInitial);

function sayHelloTo(name) {
    alert("Hello " + name);
}

element1.addEventListener("click", function () {
    sayHelloTo("Trajan");
});

let mainDiv = document.getElementById("main");
// mainDiv.addEventListener("click", function () {
//     console.log("Event bubling " + counter);
// });