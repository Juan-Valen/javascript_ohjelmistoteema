// Write a program that prints the text "Should I calculate the square root?" in a confirmation window.
const calculate = confirm('Should I calculate the square root?');
// If the user selects OK, the program asks for the number and
let result = '';
if (calculate) {
    const n = parseInt(prompt('Provide a number'));
    if (Math.sign(n) != -1) {

        const sqr = Math.sqrt(n);
        result = 'The sqare root of '+n+' is '+sqr+'.';
    } else {
        //      If the number entered by the user is negative, 
        //          the program prints "The square root of a negative number is not defined" to the HTML document.
        result = 'The square root of a negative number is not defined';
    }
} else {
    // If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)
    result = 'The square root is not calculated.'
}
// calculates and prints its square root to the HTML document. 
document.getElementById("result").innerHTML = result;
