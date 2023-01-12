function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerSelection
    if (randomNumber === 0) {
        computerSelection = "rock"
    }
    else if (randomNumber === 1) {
        computerSelection = "paper"
    }
    else if (randomNumber === 2) {
        computerSelection = "scissors"
    }
    return computerSelection
}

let computerScore = 0;
let playerScore = 0;
const roundDiv = document.querySelector('#round');
const gameDiv = document.querySelector('#game');
function playRound(playerSelection , computerSelection) {
    if (playerSelection == null) {roundDiv.textContent = "You failed to show rock, paper, or scissors"}
    else if (playerSelection.toLowerCase() === computerSelection) {
        roundDiv.textContent = "You both chose " + playerSelection.toLowerCase() + "!"} 
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        roundDiv.textContent = "Your " + playerSelection.toLowerCase() + " beats the computer's " + computerSelection + "!"; playerScore += 1
    }
    else { 
        roundDiv.textContent ="The computer's " + computerSelection + " beats your " + playerSelection.toLowerCase() + "!"; computerScore += 1
    }
    gameDiv.textContent = "The score is " + playerScore + ":" +computerScore 
    if ((computerScore>5 || playerScore>5)||(computerScore>=5 && playerScore>=5)) {gameDiv.textContent = "The game is over. Please click 'Rematch' to play again."}
    else if (computerScore >= 5) {gameDiv.textContent += " - the computer wins!"}
    else if (playerScore >= 5) {gameDiv.textContent += " - you win!"}
}

const buttons = document.querySelectorAll('.weapon');
buttons.forEach((button) => {
    button.addEventListener('click', function() {playRound(button.id , getComputerChoice())});
});

const rematch = document.querySelector('#rematch');
rematch.addEventListener('click', () => {
    roundDiv.textContent = "Chose your weapon!"
    gameDiv.textContent = "The score is 0:0"
    computerScore = 0
    playerScore = 0
    buttons.forEach((button) => {
        button.addEventListener('click', function() {playRound(button.id , getComputerChoice())});
    });
})