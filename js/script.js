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
        return playerChoice = "Invalid choice.";
    }
}

// console.log(`Player choice: ${getPlayerChoice()}`);




function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if(computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Scissors" && playerChoice == "Paper") {
        console.log("Computer wins");
    } 
    else if(playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        console.log("Player wins");
    } else {
        console.log("Draw");
    }
}

playRound();