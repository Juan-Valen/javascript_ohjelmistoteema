function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const classes = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
console.log(classes)
const nimi = prompt("What is your name?");
console.log(nimi)
const clas = classes[getRandomInt(4)]
console.log(clas)
// DOM
document.getElementById("result").innerHTML = 'Congratulations ' + nimi + ', you are class <strong>' + clas.toString() + '!</strong>';

