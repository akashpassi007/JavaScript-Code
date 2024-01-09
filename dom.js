// alert("hello Akash");
// console.log("Akash");

///////////////////////// DOM Manipulation //////////////////////////////

//let heading = document.getElementById("heading");
//console.log(heading);
//console.dir(heading); // because this is an object.


// let headings = document.getElementsByClassName("headings-class");
// console.log(headings);
// console.dir(headings);

// let firstEl = document.querySelector("p");  // first element then use ony querySelector.
// console.log(firstEl);

// let firstEl = document.querySelector("#mybtn");  // first element then use ony querySelector.
// console.log(firstEl);

// let allEl = document.querySelectorAll("p");     // all element and return nodelist.
// console.log(allEl);


////////////////////////////// Attributes ///////////////////////////////

// let div = document.querySelector("div");
// console.log(div);

// ///////////////////////////// getAttributes ///////////////////////////////

// let id = div.getAttribute("id")
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// /////////////////////////// setAttributes ///////////////////////////////

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));


//////////////////////// Style /////////////////////////////////////

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "green";

// div.style.fontSize = "26px";

// div.innerHTML = "Hello!";

///////////////////////////////// Insert Elements //////////////////////////

/// 1. Create element and 2. Add 

// 1. Create.
let newClass = document.createElement("button");
newClass.innerHTML = "Click Me!"
console.log(newClass);

// 2. Add
// we want button inside the div. 

let div = document.querySelector('div');
div.append(newClass);  // syntax : node.append() //adds at the end of node (inside).

div.prepend(newClass);  // adds at the start of node(inside).

div.before(newClass);

div.after(newClass);

// Suppose we want button after the paragraph.

let p = document.querySelector("p");
p.after(newClass);

// Create a new heading element.

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</l>";

document.querySelector('body').prepend(newHeading);


//////////////////////////////////////// Delete Element /////////////////////////////////

let para = document.querySelector('p');
para.remove();


newHeading.remove();






























































