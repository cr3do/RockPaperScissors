
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

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
btnRock.addEventListener("click", playGame);
btnPaper.addEventListener("click", playGame);
btnScissors.addEventListener("click", playGame);

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
    let playerSelection;

    if (this.id === "btnRock") {
        playerSelection = "Rock";
    } else if (this.id == "btnPaper") {
        playerSelection = "Paper";
    } else if (this.id == "btnScissors") {
        playerSelection = "Scissors";
    }

    
    let computerSelection = getComputerChoice();
            
    playRound(playerSelection, computerSelection);
}

// playGame();

