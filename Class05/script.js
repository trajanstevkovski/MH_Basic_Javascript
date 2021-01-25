// console.log("Im connceted");

// console.log(document);

// get element by id
let myTitle = document.getElementById("myTitle");
// console.log(myTitle);

// console.log(myTitle.textContent);
// console.log(myTitle.attributes);


/// get elements by class
let paragraphs = document.getElementsByClassName("myParagraph");
// console.log(paragraphs);
// console.log(paragraphs[0]);

// for (let i = 0; i < paragraphs.length; i++){
//     let htmlElement = paragraphs[i];
//     console.log(htmlElement.textContent);
// }

let secondParagraph = document.getElementsByClassName("second");
// console.log(secondParagraph);
// console.log(secondParagraph[0]);

// get elements by tag name

let para = document.getElementsByTagName("p");
//console.log(para);

let texts = document.getElementsByTagName("text");
//console.log(texts);


// query selectors

let parapraphs1 = document.querySelectorAll("p");
//console.log(parapraphs1);

let paraClass = document.querySelectorAll(".second");
// console.log(paraClass);

let h1 = document.querySelectorAll("#myTitle");
////console.log(h1);

let para1 = document.querySelector("p");
//console.log(para1);

let paraClass1 = document.querySelector(".second");
//console.log(paraClass1);

let h11 = document.querySelector("#myTitle");
//console.log(h11);

// Traversing through DOM tree

let myPara = document.getElementsByClassName("myParagraph")[0];

let nextSiblingMyPara = myPara.nextElementSibling;
//console.log(nextSiblingMyPara);

let prevSiblingMyPara = myPara.previousElementSibling;
//console.log(prevSiblingMyPara);

let parentMyPara = myPara.parentElement;
//console.log(parentMyPara);

let myDiv = document.getElementById("main");

let myDivChildren = myDiv.children;
//console.log(myDivChildren);

let firstChild = myDiv.firstElementChild;
//console.log(firstChild);

let lastChild = myDiv.lastElementChild;
//console.log(lastChild);

let parentOfAllChildren = myDivChildren[0].parentElement.parentElement.previousElementSibling.parentElement;
// console.log(parentOfAllChildren);


// changing conteni in html elements

let myDiv1 = document.getElementsByClassName("myDiv")[1];
let divParagraph = myDiv1.firstElementChild;

// console.log(divParagraph.textContent);
// console.log(divParagraph.innerText);

divParagraph.innerText = "I have been changed from Javascript!";

// adding elements 

let mainDiv = document.getElementById("main");

console.log("before change", mainDiv.children);

let newElement = `
    <h1>This is new Html content inside the div!</h1>
`;

mainDiv.innerHTML += newElement;

console.log("after change", mainDiv.children);
