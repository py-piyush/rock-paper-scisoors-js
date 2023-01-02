//! javascript
// app.js: Implement logic of rock paper scissors game

const choices = ['rock', 'paper', 'scissors'];
const size = choices.length;
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);
    if (playerIndex === -1 || computerIndex === -1){
        return 'Invalid Choice!';
    }
    if ((playerIndex + 1) % size === computerIndex){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if ((computerIndex + 1) % size === playerIndex){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return 'Tie!';
    }
    
}

function game(){
    const numberOfRounds = 5;
    for (let i = 1; i <= 5; i++){
        let playerChoice = prompt("Enter your choice: ").toLocaleLowerCase();
        let computerChoice = getComputerChoice();
        console.log(`Round ${i}: ${playRound(playerChoice, computerChoice)}`);
    }
}