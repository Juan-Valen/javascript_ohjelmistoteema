// LIST REVERSE
// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)

//     Save the numbers to an array, then use for-loop to iterate in reverse order.
//     Do not use array.reverse() function.

const check = confirm('Do you want to continue?');
if (check) {
    var numbers = []
    numbers.push(parseInt(prompt("Provide first number?")));
    numbers.push(parseInt(prompt("Provide second number?")));
    numbers.push(parseInt(prompt("Provide third number?")));
    numbers.push(parseInt(prompt("Provide fourth number?")));
    numbers.push(parseInt(prompt("Provide fifth number?")));
    for (i = numbers.length-1; i>= 0; i--) {
        console.log(numbers[i])
    }
}

