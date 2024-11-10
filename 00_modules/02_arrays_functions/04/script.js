// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest.





const check = confirm('Do you want to continue?');
if (check) {
    var numbers = []
    while (numbers[numbers.length-1] !=0) {
        numbers.push(parseInt(prompt("Provide a number or a 0 to exit:")));
    }
    numbers.sort((a,b)=>a<b)
    numbers.forEach((v)=> {
        console.log(v)
    })
}