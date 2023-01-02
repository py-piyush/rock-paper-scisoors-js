//! javascript
// app.js: Implement logic of rock paper scissors game

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}