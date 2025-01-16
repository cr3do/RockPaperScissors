function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0) {
        console.log("Rock");
        return computerChoice = "Rock";
    } else if(computerChoice === 1) {
        console.log("Paper");
        return computerChoice = "Paper";
    } else if(computerChoice === 2) {
        console.log("Scissors");
        return computerChoice = "Scissors";
    }
}

// console.log(`Computer choice: ${getComputerChoice()}`);

function getPlayerChoice() {
    let playerChoice = parseInt(prompt("Input number to play: 0=rock, 1=paper, 2=scissors: "));
    if(playerChoice === 0) {
        console.log("Rock");
        return playerChoice = "Rock";
    } else if(playerChoice === 1) {
        console.log("Paper");
        return playerChoice = "Paper";
    } else if(playerChoice === 2) {
        console.log("Scissors");
        return playerChoice = "Scissors";
    } else {
        console.log("Invalid choice.");
        return playerChoice = "Invalid";
    }
}

// console.log(`Player choice: ${getPlayerChoice()}`);




function playRound(playerChoice, computerChoice) {
    let computerScore = 0;
    let playerScore = 0;

    if(playerChoice == "Invalid") {
        console.log("Invalid");
    }
    else if(computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Scissors" && playerChoice == "Paper") {
        console.log("Computer wins");
        computerScore++;
    } 
    else if(playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        console.log("Player wins");
        playerScore++;
    } else {
        console.log("Draw");
    }

    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${playerScore}`);
}


let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection);