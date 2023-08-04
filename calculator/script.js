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

let content ='';
function showOnDisplay (button){
    switch (button.target.classList[1]) {
        case 'num':
            content = content + button.target.innerText;
            break;
        case 'dot':
            if(content.length === 0)
                content = '0';
            if(!content.includes('.'))
                content = content + button.target.innerText;
            break;
        case 'clear':
            content = '';
            break;
        case 'del':
            content = content.slice(0, -1)
            break;
        default:
            break;
    }
    if(button.target.id == 'b%'){
        content = (+content / 100);
        content = content + '';
    }
    display.textContent = content;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', (button) => {
    showOnDisplay(button);
}));