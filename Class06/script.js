// console.log("Connected");


/// html event handlers
function sayHello() {
    alert("Hello from js!");
}

function countRabbits() {
    for (let i = 0; i <= 3; i++){
        alert("Rabbit number " + i);
    }
}

// traditional event handlers

function helloWorld() {
    alert("Hello world!");
}

let element = document.getElementById("hello-world");
element.onclick = helloWorld;

let testElement = document.getElementById("test");

testElement.ondblclick = function () {
    alert("Inline function declaration");
}

let div = document.getElementById("box");

function changeBackgroundColor() {
    div.style.backgroundColor = "white";
}

function changeBackgroundColorToInitial() {
    div.style.backgroundColor = "blue";
}

function changeColor() {
    div.style.backgroundColor = "black";
}

function changeColorToRed() {
    div.style.backgroundColor = "red";
}

div.onmouseover = changeBackgroundColor;
div.onmouseout = changeBackgroundColorToInitial;
div.onclick = changeColor;
div.ondblclick = changeColorToRed;