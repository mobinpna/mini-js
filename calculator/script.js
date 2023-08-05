let num1, num2, op;
const display = document.querySelector('.main');
const sub = document.querySelector('.sub');
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

function operate(number1, operator, number2){
    switch (operator) {
        case "+":
            return add(number1,number2);
        case "-":
            return subtract(number1,number2);
        case "*":
            return multiply(number1,number2);
        case "/":
            return divide(number1,number2);
        default:
            break;
    }
}

let content ='0';
let subContent = '';
function calculator (button){
    switch (button.target.classList[1]) {
        case 'num':
            if (lastButton == 'op'|| lastButton == 'equal'){
                num2 = undefined;
                num1 = (+content);
                content = '0';
            }
            if(button.target.innerText == '0' && content == '0')break;
            if(content == '0') content = '';
            content = content + button.target.innerText;
            break;
        case 'dot':
            if(content.length === 0)
                content = '0';
            if(!content.includes('.'))
                content = content + button.target.innerText;
            break;
        case 'clear':
            content ='0';
            num1 = undefined;
            num2 = undefined;
            op = undefined;
            subContent = '';
            break;
        case 'percent':
            content = (+content / 100);
            content = content + '';
            break;
        case 'negative':
            content = '' + (-(+content));
            break;
        case 'op':
            if(lastButton=='op')op = button.target.classList[2];
            else{ if(num1 && lastButton != 'equal'){
                    num2= +content;
                    content = operate(num1,op,num2);
                    num1 = content;
                    num2 = undefined;
                } else {
                    op = button.target.classList[2];
                    num1 = (+content);
                }
            }
            if (num1){
                switch (op) {
                    case '/':
                        subContent = '\u00f7';
                        break;
                    case '*':
                        subContent = '\u00D7';
                        break;
                }
                if (op !='*' && op !='/'){
                    subContent = op;
                }
            }
            break;
        case 'equal':
            if (!num1 || lastButton =='op' || lastButton== 'equal')break;
            num2 = (+content);
            content = operate(num1, op, num2);
            num1 = content;
            num2 = undefined;
            subContent = '='
        default:
            break;
    }
    display.textContent = content;
    sub.textContent = subContent;
}

let lastButton;
let currentButton;
function lastButtonRecord(button){
    lastButton = currentButton;
    currentButton = button.target.classList[1];
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', (button) => {
    lastButtonRecord(button);
    calculator(button);
}));