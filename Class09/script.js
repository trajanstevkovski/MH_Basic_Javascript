
 // all elements
let allElements = $("*");
// console.log(allElements);

// select by id
let container = $("#container");
// console.log(container);
// console.log(container[0]);
// console.log(container[0].innerHTML);

// wtih vanila js 
// let containerVJS = document.getElementById("container");


// select by class
let innerWrappers = $(".innerWrapper");
// console.log(innerWrappers);


// select by tag name
let paragraphs = $("p");
// console.log(paragraphs);

// selecting first paragraph
let firstParagraph = $("p:first");
// console.log(firstParagraph);

let lastParagraph = $("p:last");
// console.log(lastParagraph);

// selecting by attribute
let selectedByAttribute = $("p[name='selectByAttribute']");
// console.log(selectedByAttribute);

// selecting element by multiple conditions
let mixedElements = $(".innerWrapper, .wrapper, #SecondTitle");
// console.log(mixedElements);

// select all the elements that are first child to its parent element
let firstChildElement = $("h3:first-child");
// console.log(firstChildElement);

let nthChild = $("p:nth-child(2)");
// console.log(nthChild);

let test = $("p[data-test='testing']");
// console.log(test);

// first and last element selected by something
let lastElement = $(".innerWrapper").last();
let firstElement = $(".innerWrapper").first();
// console.log(lastElement);
// console.log(firstElement);

let someElement = $(firstElement).find("#firstTitle").next(); //.next().prev();
// console.log(someElement);

// getting value
let inputValue = $("input").first().val();
// console.log(inputValue);

let paragraphContentJS = document.getElementsByClassName("innerWrapper")[0]
    .lastElementChild.previousElementSibling.innerText;
//console.log(paragraphContentJS);
let firstParagraphText = $(".innerWrapper").find("p").first().text();
// console.log(firstParagraphText);

$(".innerWrapper").find("p").first().text("Hello from JQuery");
$(".innerWrapper").find("p").first().html(`<span>Hello again</span>`);

$("#mainTitle").hide();

setTimeout(() => {
    $("#mainTitle").show();
}, 5000);

let color = $(".innerWrapper").find("p").first().css("color");
$(".innerWrapper").find("p").first().css("color", "red");
let colorAfter = $(".innerWrapper").find("p").first().css("color");

console.log(color);
console.log(colorAfter);

$(".innerWrapper").find("p").first().css("font-weight", "bolder");

let h3Byid = $("#SecondTitle");
h3Byid.after(`<h1>This was added by using after() method</h1>`);
h3Byid.before(`<h1>This was added by using before() method</h1>`);