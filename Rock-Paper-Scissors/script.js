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


function game() {
    let winCounter = 0;
    for (let i = 0; i <= 4; i++) {
        computerChoice = getComputerChoice();
        // playerChoice = prompt("Choose between rock, paper and scissors");
        playerChoice = playerChoice.toLowerCase();
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            // playerChoice = prompt("invalid entry\ntry again");
            playerChoice = playerChoice.toLowerCase();
        }

        while(playerChoice === computerChoice){
            // playerChoice = prompt("That was a tie, try again")
            playerChoice = playerChoice.toLowerCase();
        }
        if(playRound(playerChoice, computerChoice) == "you won this round") {
            winCounter++;
        }
    }
    return winCounter;
}

// let winCounter = game()

// console.log(winCounter)

// if( winCounter > 2 ) {
//     console.log("Congratulations, you won the game")
// }
// else {
//     console.log("you lost the game")
// }

function writeOnPage (string){
    const container = document.querySelector('.container');
    const content = document.createElement('div');
    content.classList.add('round');
    content.textContent = string;
    container.appendChild(content);
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach((button) => button.addEventListener('click', () => {
    playerChoice = button.id;
    computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        writeOnPage("Tie, please try again")
        return
    }
    if (playerChoice == "rock" && computerChoice == "paper"){
        writeOnPage("you lost this round");
    }
    if (playerChoice == "rock" && computerChoice == "scissors"){
        writeOnPage("you won this round");
    }
    if (playerChoice == "paper" && computerChoice == "scissors"){
        writeOnPage("you lost this round");
    }
    if (playerChoice == "paper" && computerChoice == "rock"){
        writeOnPage("you won this round");
    }
    if (playerChoice == "scissors" && computerChoice == "rock"){
        writeOnPage("you lost this round");
    }
    if (playerChoice == "scissors" && computerChoice == "paper"){
        writeOnPage("you won this round"); 
    }
}));
