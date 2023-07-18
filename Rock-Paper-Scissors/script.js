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

function game() {
    let winCounter = 0;
    for (let i = 0; i <= 4; i++) {
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        if(playRound(playerChoice, computerChoice) == "you win") {
            winCounter++;
        }
    }
    return winCounter;
}

// computerChoice = getComputerChoice();
// playRound(playerChoice, computerChoice);

// console.log(computerChoice);
// console.log(playRound(playerChoice, computerChoice));

let winCounter = game()

console.log(winCounter)

if( winCounter > 2 ) {
    console.log("Congratulations, you won")
}


