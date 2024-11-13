'use strict';
const names = ['John', 'Paul', 'Jones'];
// Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)

//     Add the following HTML code to the element with id="target". Add the values from 'names' array to the <li> elements in a for-loop.

// <li>John</li>
// <li>Paul</li>
// <li>Jones</li>

const currentUl = document.getElementById("target");

names.forEach((v) => {

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(v));
    currentUl.appendChild(li);
});




