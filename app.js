//! javascript
// app.js: Implement logic of rock paper scissors game


const newGame = document.querySelector('.btn-new');
newGame.addEventListener('click',function(){
    location.reload();
})



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

let playerWins = 0, computerWins = 0;

let playerChoice;
let computerChoice;
const btns = document.querySelectorAll('.btn');
function listener(e){
    playerChoice = e.target.getAttribute("id");
    game()
}
btns.forEach((btn)=>{
    btn.addEventListener('click', listener)
});
function game(){
    computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result === 1){
        playerWins++;
    }
    else if (result === -1){
        computerWins++;
    }
    setScore();
    printResult(result);
    if (playerWins === 5 || computerWins === 5){
        finalResult();
        btns.forEach((btn)=>btn.removeEventListener('click', listener));
    }
}

function setScore(){
    document.querySelector(".player>p").textContent = playerWins;
    document.querySelector(".computer>p").textContent = computerWins;
}

function printResult(result){
    const p = document.createElement('p');
    p.classList.add('result')
    const results = document.querySelector('.result-container');
    if (result === 1){
        p.textContent = `You Win! ${playerChoice} beats ${computerChoice}`
        p.style.color = '#61ec61';
    }
    else if (result === -1){
        p.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        p.style.color = '#ee524d';
    }
    else {
        p.textContent = `Tie!`;
        p.style.color = 'yellow';
    }
    results.appendChild(p);
}

function finalResult(){
    scorecard = document.querySelector('#section1');
    finalContainer = document.createElement('div');
    finalContainer.classList.add('result-container');
    final = document.createElement('p');
    final.style.fontSize = '30px';
    if (playerWins === 5){
        final.style.color = '#61ec61';
        final.textContent = 'CONGRATULATIONS!! You won the game.';
    }
    else if (computerWins === 5){
        final.style.color = '#ee52d4';
        final.textContent = 'GAME OVER!! You lost the game.'
    }
    finalContainer.appendChild(final);
    scorecard.appendChild(finalContainer);
}