// Open t10 folder in your IDE/editor. 
// Read the first name and last name values from the form and print them in the <p id="target"> (2p)

//     remember to stop the default action of the form
//     you can use attribute selectors in querySelector() to select the <input> elements
//     example output: Your name is Luke Skywalker

const form = document.getElementById("source");
const output = document.getElementById("target");

form.addEventListener("submit", (evt) => {
    console.log(evt.target);
    evt.preventDefault();
    let target = evt.target;
    let forname = target[0].value;
    let surname = target[1].value;
    output.innerText = forname + " " + surname;
});

