// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice,
// which is asked from the user at the beginning.
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}











const check = confirm('Do you want to continue?');
var result = '<ul>'
if (check) {
    var max = parseInt(prompt("Max number of faces on the dice:"));
    var dice = getRandomInt(max)

    while (dice != max) {
        result += '<li>' + dice.toString() + '</li>'
        dice = getRandomInt(max)
    }
}
result += '</ul>'
document.getElementById("result").outerHTML = result;


