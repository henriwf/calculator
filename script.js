
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

let num1;
let num2;
let op;
let isResult = false;

function operate (num1, num2, op) {

    if (op == "+") return add(num1, num2);
    if (op == "-") return subtract(num1, num2);
    if (op == "*") return multiply(num1, num2);
    if (op == "/") return divide(num1, num2);
    
}



const buttons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (isResult) {
            display.textContent = button.textContent;
            isResult = false;

        } else if (display.textContent == "0" || display.textContent == "+"|| display.textContent == "-" || 
            display.textContent == "*" || display.textContent == "/") {
            display.textContent = button.textContent;

        } else {
            display.textContent += button.textContent;
        }

    });
});

operators.forEach(operator => {
    operator.addEventListener ("click", () => {
        num1 = parseFloat(display.textContent);
        display.textContent = operator.textContent;
        op = operator.textContent;
    })
});


equal.addEventListener ("click", () => {
    num2 = parseFloat(display.textContent);
    let result = operate(num1, num2, op);
    display.textContent = result;
    isResult = true;
});

clear.addEventListener ("click", () => {
    display.textContent = "0";

});