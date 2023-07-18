let randomNumber;
let computerChoice;
let playerChoice = "hi";
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
    if (playerChoice == "rock" && computerChoice == "paper"){
        console.log("you lost this round")
        return "you lost this round"
    }
    if (playerChoice == "rock" && computerChoice == "scissors"){
        console.log("you won this round")
        return "you won this round"
    }
    if (playerChoice == "paper" && computerChoice == "scissors"){
        console.log("you lost this round")
        return "you lost this round"
    }
    if (playerChoice == "paper" && computerChoice == "rock"){
        console.log("you won this round")
        return "you won this round"
    }
    if (playerChoice == "scissors" && computerChoice == "rock"){
        console.log("you lost this round")
        return "you lost this round"
    }
    if (playerChoice == "scissors" && computerChoice == "paper"){
        console.log("you won this round")
        return "you won this round" 
    }
}

function game() {
    let winCounter = 0;
    for (let i = 0; i <= 4; i++) {
        computerChoice = getComputerChoice()
        playerChoice = prompt("Choose between rock, paper and scissors");
        playerChoice = playerChoice.toLowerCase();
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            playerChoice = prompt("invalid entry\ntry again");
            playerChoice = playerChoice.toLowerCase();
        }

        while(playerChoice === computerChoice){
            playerChoice = prompt("That was a tie, try again")
            playerChoice = playerChoice.toLowerCase();
        }
        if(playRound(playerChoice, computerChoice) == "you won this round") {
            winCounter++;
        }
    }
    return winCounter;
}

let winCounter = game()

console.log(winCounter)

if( winCounter > 2 ) {
    console.log("Congratulations, you won the game")
}
else {
    console.log("you lost the game")
}


