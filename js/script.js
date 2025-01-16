
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    // limit math.random up to 3 for its choice
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) {
        return computerChoice = "Rock";
    } else if(computerChoice === 1) {
        return computerChoice = "Paper";
    } else if(computerChoice === 2) {
        return computerChoice = "Scissors";
    }

}


function getPlayerChoice() {
    // get player choice 
    let playerChoice = parseInt(prompt("Input number to play: 1 = rock,  2 = paper,  3 = scissors: "));

    // verify player selection if it is valid
    while( !((playerChoice === 1) || (playerChoice === 2) || (playerChoice === 3)) ) {
        playerChoice = parseInt(prompt("Invalid selection. Input number to play: 1 = rock,  2 = paper,  3 = scissors: "));
    }

    if(playerChoice === 1) {
        return playerChoice = "Rock";
    } else if(playerChoice === 2) {
        return playerChoice = "Paper";
    } else if(playerChoice === 3) {
        return playerChoice = "Scissors";
    } else {
        return playerChoice = "Invalid";
    }

}


function playRound(playerChoice, computerChoice) {

    console.log(`Computer Choice: ${computerChoice}  |  Player Choice: ${playerChoice}`);

    if(playerChoice == "Invalid") {
        console.log("Invalid");
    }
    else if(computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Scissors" && playerChoice == "Paper") {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    } 
    else if(playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);
        playerScore++;
    } else {
        console.log("Draw");
    }

    console.log(`Computer Score: ${computerScore}  |  Player Score: ${playerScore}`);
}


function playGame() {

    for(r = 1; r <= 5; r++) {
        console.log(`Round: ${r}`);
        
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
            
        playRound(playerSelection, computerSelection);
        console.log("------------------------");
    }
}

playGame();

