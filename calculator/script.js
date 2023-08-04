let num1, num2, op;
const display = document.querySelector('.display');
display.textContent = 'HELLO';

function add(...nums){
    let sum = nums.reduce((sum, num) => sum + num, 0);
    return sum;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(num1, op, num2){
    switch (op) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            break;
    }
}

function hi (button){
    display.textContent = button.target.innerText;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', (button) => hi(button)));