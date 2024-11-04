// Write a program that asks the user for an integer and tells if the number is a prime number.

//     Prime numbers are numbers that are only divisible by 1 and itself.
//     For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
//     On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
//     Print the result on the HTML document.
function IsPrime(number) {
    for (let v = 2; v < number; v++) {
        if (number % v == 0) {
            console.log("IS NOT PRIME YEAR: " + v + " DIVISIBLE BY " + v)
            return false
        }
    }
    return true
}
// INPUT
const check_prime = confirm('Do you want to check if the number is a prime number?');
if (check_prime) {
    //  INPUT
    let number = parseInt(prompt("provide a number."));
    // LOGIC
    let result = '';
    let isprime = IsPrime(number);
    // OUTPUT
    if (isprime) {
        result += (number.toString() + " is a prime number");
    } else {
        result += (number.toString() + " is not a prime number");
    }
    document.getElementById("result").outerHTML = result;
}
