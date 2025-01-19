
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

let firstNum;
let secNum;
let operator;

function operate (num1, num2, op) {

    if (op == "+") add(num1, num2);
    if (op == "-") subtract(num1, num2);
    if (op == "*") multiply(num1, num2);
    if (op == "/") divide(num1, num2);
    
}