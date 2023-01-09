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

function playRound(playerSelection , computerSelection) {
    let outcome
    if (playerSelection == null || playerSelection.toLowerCase() != ("rock" || "paper" || "scissors")) {console.log("You failed to show rock, paper, or scissors"); outcome = 0}
    else if (playerSelection.toLowerCase() === computerSelection) {
        console.log("You both chose " + playerSelection.toLowerCase() + "!"); outcome = 1
    } 
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"))  {
        console.log("Your " + playerSelection.toLowerCase() + " beats the computer's " + computerSelection + "!"); outcome = 2
    }
    else { 
        console.log("The computer's " + computerSelection + " beats your " + playerSelection.toLowerCase() + "!"); outcome = 0
    }
}

function game() {
    let score = 0, result
    for (let i = 0; i < 5; i++ ){
    score += playRound(prompt("Round " + (i + 1) + " - choose your weapon!"), getComputerChoice())
    }
    if (score == 5 ){result = "draw"; console.log("It's a draw!")}
    else if (score > 5){result = "win"; console.log("You win!")}
    else {result = "loss"; console.log("You lose!")}
    let replay = prompt("Do you want to play again? (y/n)")
    if (replay === "y"){game()}
}

game()