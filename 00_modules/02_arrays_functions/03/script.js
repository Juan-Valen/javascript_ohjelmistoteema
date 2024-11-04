const n1 = prompt("What is your name?");
const n2 = prompt("What is your name?");
const n3 = prompt("What is your name?");
const sum = parseInt(n1) + parseInt(n2)+ parseInt(n3)
const prod = parseInt(n1)*parseInt(n2)*parseInt(n3)
const avg = sum/3
document.getElementById("sum").innerHTML = '<strong>Sum:</strong> <math>'+n1 + '<mo>+</mo>' + n2 + '<mo>+</mo>' + n3 + '<mo>=</mo>' + sum.toString()+ '</math>';
document.getElementById("product").innerHTML = '<strong>Product:</strong> <math> '+n1 + '<mo>x</mo>' + n2 + '<mo>x</mo>' + n3 + '<mo>=</mo>' + prod.toString()+ '</math>';
document.getElementById("average").innerHTML = '<strong>Average:</strong> <math>'+sum + '<mo>/</mo>3<mo>=</mo>' + avg.toString()+ '</math>';

