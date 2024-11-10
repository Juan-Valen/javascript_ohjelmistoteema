// Write a program that asks the user for the number of participants. 
// After this, the program asks for the names of all participants. 

// Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)


const check = confirm('Do you want to continue?');
if (check) {
    var participants_qty = parseInt(prompt("Provide number of participants?"));
    // var participants = [];
    var result = '<ol>'
    for (i = 1; i <= participants_qty; i++) {
        // console.log(i)
        // participants.push(prompt("Name of the participant number " + i + ""))
        result += '<li>' + prompt("Name of the participant number " + i + "?") +'</li>'
    }
    result += '</ol>'
    document.getElementById("result").outerHTML = result;
}

