// Write a program that asks for the names of six dogs. 
// The program prints dog names to unordered list <ul> in reverse alphabetical order.



const check = confirm('Do you want to continue?');
var result = '<ul>';
if (check) {
    for (i = 1; i <= 6; i++) {
        // console.log(i)
        result += '<li>' + prompt("Name of the dog number " + 6 + "?") + '</li>'
    }
    result += '</ul>'
    document.getElementById("result").outerHTML = result;
}