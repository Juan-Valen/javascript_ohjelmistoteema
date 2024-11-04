function IsPrime(number) {
    for (let v = 2; v <= 47; v++) {
        if (number % v == 0) {
            console.log("IS NOT PRIME YEAR: " + v + " DIVISIBLE BY " + v)
            return false
        }
    }
    return true
}
// Write a program that prompts the user for the        start and end year.
// The program prints all leap years        from the interval given by the user. 
const check_prime = confirm('Do you want to check the prime numbers between two years?');
// If the user selects OK, the program asks for the number and
if (check_prime) {
    //  INPUT
    let start_year = parseInt(prompt("provide a start year."));
    let end_year = parseInt(prompt("provide a end year."));
    //     Example output HTML code:

    let result = '<ul>';
    let isprime = true;
    while (start_year <= end_year) {
        isprime = IsPrime(start_year);
        // [2,3,4,5,6,7,8,9,10,11].forEach((v) => {
        // });
        if (isprime) {
            result += ('<li>' + start_year + '</li>');
            console.log("INSERTING YEAR TO HTML")
        }
        console.log("YEAR: " + start_year)
        start_year++;
    }
    result += '</ul>';
    document.getElementById("result").outerHTML = result;
}
