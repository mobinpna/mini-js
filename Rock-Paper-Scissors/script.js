let randomNumber;
let computerChoice

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1 ;
    let text;
    switch (randomNumber) {
        case 1:
            text = "Rock";
            break;
        case 2:
            text = "paper";
            break;
        case 3:
            text ="Scissors";
            break;
    }         
    return text;
}

computerChoice = getComputerChoice();
console.log(randomNumber)
console.log(computerChoice)
