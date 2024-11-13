// Open t8 folder in your IDE/editor. Make a simple calculator.

//     There are two input fields where user enters numbers.
// Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
//     Use the value attribute of <option> elements to decide which operation the calculator needs to do.
// Example.
//     Show the result in <p id="result"> when the button is clicked.

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operation = document.getElementById("operation")
const trigger = document.getElementById("start")
const result = document.getElementById("result")

trigger.addEventListener("click", function (evt) {
    const operator = operation.value;
    var n1 = parseInt(num1.value);
    var n2 = parseInt(num2.value);
    var calc = 0;
    switch (operator) {
        case "add":
            calc = n1 + n2;
            break;
        case "sub":
            calc = n1 - n2;

            break;
        case "multi":
            calc = n1 * n2;

            break;
        case "div":
            calc = n1 / n2;

            break;
    }
    var result_text = document.createTextNode(calc);
    result.innerText = "";
    result.append(result_text);
})


