// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters.
// Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll in an unordered list (<ul>).
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}






const check = confirm('Do you want to continue?');
var dice = getRandomInt(6)
var result = '<ul>'
if (check) {

    while (dice != 6) {
        result += '<li>' + dice.toString() + '</li>'
        dice = getRandomInt(6)
    }
}
result += '</ul>'
document.getElementById("result").outerHTML = result;
