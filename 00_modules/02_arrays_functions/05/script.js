// Write a program that prompts the user for numbers. 
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and 
// stops its operation and then prints all the given numbers to the console in ascending order.


const check = confirm('Do you want to continue?');
if (check) {

    var numbers = []
    var number = 0

    while (true) {
        // console.log(i)
        // participants.push(prompt("Name of the participant number " + i + ""))
        number = parseInt(prompt("Provide first number?"));
        if (numbers.includes(number)) {
            break;
        }
        numbers.push(number);
    }
    console.log("The number " + number + " has already been given")
    numbers.sort()
    numbers.forEach((v) => {
        console.log(v)
    })
}


