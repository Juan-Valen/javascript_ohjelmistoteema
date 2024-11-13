// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)

//     Add the following HTML code to the element with id="target"

// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>

//     Add class my-item to the second list item


const newLi1 = document.createElement("li");
const newLi2 = document.createElement("li");
const newLi3 = document.createElement("li");
const newContent1 = document.createTextNode("First item");
const newContent2 = document.createTextNode("Second item");
const newContent3 = document.createTextNode("Third item");

newLi1.appendChild(newContent1);
newLi2.appendChild(newContent2);
newLi3.appendChild(newContent3);

// add the newly created element and its content into the DOM
const currentUl = document.getElementById("target");
currentUl.appendChild(newLi1);
currentUl.appendChild(newLi2);
currentUl.appendChild(newLi3);