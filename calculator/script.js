function add(...nums){
    let sum = nums.reduce((sum, num) => sum + num, 0)
    return sum;
}