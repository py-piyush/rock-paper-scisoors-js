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
        console.error('Invalid Choice!');
    }
    if ((playerIndex + 1) % size === computerIndex){
        return -1 ;
    }
    else if ((computerIndex + 1) % size === playerIndex){
        return 1;
    }
    else {
        return 0;
    }
    
}

function overallWinner(pwin, cwin)
{
    if (pwin > cwin)
    {
        return 'Player';
    }
    else if (cwin > pwin){
        return 'Computer';
    }
    else {
        return 'Nobody';
    }
}

function game(){
    const numberOfRounds = 5;
    let playerWins = 0, computerWins = 0;
    for (let i = 1; i <= 5; i++){
        let playerChoice = prompt("Enter your choice: ").toLocaleLowerCase();
        let computerChoice = getComputerChoice();
        let gameResult = playRound(playerChoice, computerChoice);
        if (gameResult === 1){
            playerWins ++ ;
            console.log(`Round ${i}: You Win! ${playerChoice} beats ${computerChoice}`);
        }
        else if (gameResult === -1){
            computerWins ++; 
            console.log(`Round ${i}: You Lose! ${computerChoice} beats ${playerChoice}`);
        }
        else {
            console.log(`Round ${i}: Tie!`);
        }
    }
    console.log(`Player won ${playerWins} round(s)`);
    console.log(`Computer won ${computerWins} round(s)`);
    console.log(`${overallWinner(playerWins, computerWins)} won the game!!`)
}