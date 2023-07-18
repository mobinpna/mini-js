let randomNumber;
let computerChoice;
let playerChoice = "paper";
playerChoice = (playerChoice.toLowerCase());

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1 ;
    let text;
    switch (randomNumber) {
        case 1:
            text = "rock";
            break;
        case 2:
            text = "paper";
            break;
        case 3:
            text ="scissors";
            break;
    }         
    return text;
}



computerChoice = getComputerChoice();
console.log(randomNumber)
console.log(computerChoice)
console.log(playerChoice)

