function add(...nums){
    let sum = nums.reduce((sum, num) => sum + num, 0);
    return sum;
}

function subtract(a, b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}
