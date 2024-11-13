// Open t4 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

//     Add the following HTML code to the element with id="target". Add the values from 'students' array to the <option> elements in a for-loop.
const currentTarget = document.getElementById("target");

students.forEach((v) => {

    var element = document.createElement("option");
    element.appendChild(document.createTextNode(v.name));
    element.setAttribute('value', v.id)
    currentTarget.appendChild(element);
});



// <option value="2345768">John</option>
// <option value="2134657">Paul</option>
// <option value="5423679">Jones</option>

//     open Element Inspector from DevTools to see the full result. (right click, inspect...)






