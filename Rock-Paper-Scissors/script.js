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
        return "tie";
    }
    else {
        if (playerChoice == "rock" && computerChoice == "paper")
            return "you lose"
        if (playerChoice == "rock" && computerChoice == "scissors")
            return "you win"
        
        if (playerChoice == "paper" && computerChoice == "scissors")
            return "you lose"
        if (playerChoice == "paper" && computerChoice == "rock")
            return "you win"

        if (playerChoice == "scissors" && computerChoice == "rock")
            return "you lose"
        if (playerChoice == "scissors" && computerChoice == "paper")
            return "you win"
    }
    
}



computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));


