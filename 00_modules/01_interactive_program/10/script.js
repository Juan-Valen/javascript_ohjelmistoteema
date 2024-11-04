function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const check = confirm('Do you want to check if the number is a prime number?');

if (check) {
      
    //  INPUT
    let dice_amount = parseInt(prompt("How many dice?"));
    let dice_sum = parseInt(prompt("Expected number to get from the sum of the dice?"));
    //  LOGIC
    let sum_good = 0
    let sum_total = 0
    for (let v = 1; v <= 1000; v++) {
        let sum = 0
        for (let v = 1; v <= dice_amount; v++) {
            sum += getRandomInt(6)
        }
        if (sum == dice_sum) {
            sum_good++
        }
        sum_total++
    }
    
    //  OUTPUT
    let result = 'Probability to get sum '+dice_sum+' with '+dice_amount+' dice is about '+(sum_good/sum_total*100).toFixed(2)+'%';


    // Printing is done in an unordered list to the HTML document.
    document.getElementById("result").outerHTML = result;
}
