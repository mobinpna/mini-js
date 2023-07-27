let randomNumber;
let computerChoice;
let playerChoice;
let winCounter = 0;
let roundCounter = 0;
let playerScore = 0;
let compScore = 0;

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

function writeOnPage (string){
    const container = document.querySelector('.container');
    const content = document.createElement('div');
    content.classList.add('round');
    content.textContent = string;
    container.appendChild(content);
}

function cleanPage(className) {
    const contents = document.querySelectorAll(className)
    contents.forEach(content => content.remove())
}

function announceResult() {
    let announcement;
    if(playerScore > compScore)announcement = "congratulations, you have won";
        else announcement = "you lost the game";
    const container = document.querySelector('.container');
    const content = document.createElement('div');
    content.classList.add('announce');
    content.textContent = announcement;
    container.appendChild(content);
}

function playRound () {
    if (roundCounter >= 5){
        roundCounter = 0;
        playerScore = 0;
        compScore = 0;
        cleanPage('.round');
        cleanPage('.announce');
    }
    if (playerChoice === computerChoice){
        writeOnPage("Tie, please try again");
        roundCounter--;
    }
    if (playerChoice == "rock" && computerChoice == "paper"){
        writeOnPage("you lost this round");
        compScore++;
    }
    if (playerChoice == "rock" && computerChoice == "scissors"){
        writeOnPage("you won this round");
        playerScore++;
    }
    if (playerChoice == "paper" && computerChoice == "scissors"){
        writeOnPage("you lost this round");
        compScore++;
    }
    if (playerChoice == "paper" && computerChoice == "rock"){
        writeOnPage("you won this round");
        playerScore++;
    }
    if (playerChoice == "scissors" && computerChoice == "rock"){
        writeOnPage("you lost this round");
        compScore++;
    }
    if (playerChoice == "scissors" && computerChoice == "paper"){
        writeOnPage("you won this round");
        playerScore++;
    }
    roundCounter++;
    if(roundCounter>=5) announceResult();
}

function showScore() {
    const container = document.querySelector('.scoreContainer');
    const showPlayer = document.querySelector('.playerScore');
    const showComp = document.querySelector('.compScore');
    showPlayer.textContent = `player score: ${playerScore}`;
    showComp.textContent = `computer score: ${compScore}`;
    container.appendChild(showPlayer, showComp);
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach((button) => button.addEventListener('click', () => {
    playerChoice = button.id;
    computerChoice = getComputerChoice();
    playRound();
}));

buttons.forEach(button => button.addEventListener('click', showScore));