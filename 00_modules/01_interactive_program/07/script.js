function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

const dice_throw = confirm('Do you want to throw dices?');
// If the user selects OK, the program asks for the number and
let result = '';
if (dice_throw) {
    //     First, program asks the user for the number of dice rolls.
    const n = parseInt(prompt('Provide the number of dice to throw.'));
    if (Math.sign(n) != -1) {
        let sum = 0
        for (const i of Array(n)) {
            nt = getRandomInt(6)
            sum += nt
            console.log("Dice result: " + nt)
        }
        result = '<strong>Dice sum: </strong> ' + sum + '.';
    } else {
        result = 'Causality had an error. The luck of every has been reveced!';
    }
} else {
    result = 'The dice were not thrown'
}
//     Print the sum of the results in the console or in the HTML document.
document.getElementById("result").innerHTML = result;