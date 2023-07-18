let randomNumber;
let computerChoice;
let playerChoice = "rock";
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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        console.log("tie")
    }
}

computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

console.log(computerChoice)


