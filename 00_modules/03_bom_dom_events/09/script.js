// Open t9 folder in your IDE/editor.
// This is continuation to previous task.
// There is only one text field left, where the user writes the calculation
//      (addition, subtraction, multiplication or division)

//     You can use the includes and split methods.
//     eval() function is prohibited
//     No need to support decimal numbers, calculating integers is enough.
//     Example inputs: 3+5, 2-78, 3/6, etc...

const calculation = document.getElementById("calculation");
const trigger = document.getElementById("start");
const result = document.getElementById("result");


trigger.onclick = (evt) => {
    let list = calculation.value.match(/[/+*-]+|[0-9]+/g);
    let calc = 0;
    let operation = "";
    list.forEach((v, i) => {
        if (i == 0) {
            calc = parseInt(v);
            return;
        }
        else if (v.match(/[0-9]+/) == null) {
            operation = v;
        } else {
            switch (operation) {
                case "+":
                    calc += parseInt(v);
                    break;
                case "-":
                    calc -= parseInt(v);
                    break;
                case "*":
                    calc *= parseInt(v);
                    break;
                case "/":
                    calc /= parseInt(v);
                    break;
            }
        }
    });
    result.innerText = "";
    const result_text = document.createTextNode(calc.toString());
    result.append(result_text);
}


