// Write a program that asks the user to enter a year 
const year = parseInt(prompt("Provide a year"))
// and notifies the user whether the input year is a leap year.
//      A year is a leap year if it is divisible by four. 
//      However, years divisible by 100 are leap years only if they are also divisible by 400. 
let result = 'The year ' + year
if (year % 100 == 0) {
    if (year % 400 == 0) {
        // Print the result on the HTML document
        result += ' is a leap year'
    } else {
        result += ' is not a leap year'

    }
} else if (year % 4 == 0) {
    result += ' is a leap year'
} else {
    result += ' is not a leap year'
}
document.getElementById("result").innerHTML = result