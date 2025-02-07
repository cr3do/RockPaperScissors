
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

const resultList = document.getElementById("resultList");
const computerScoreBoard = document.getElementById("computerScore");
const computerSelectionBoard = document.getElementById("computerSelection");
const playerScoreBoard = document.getElementById("playerScore");
const playerSelectionBoard = document.getElementById("playerSelection");
const imgComputerSelection = document.getElementById("imgComputerSelection");
const imgPlayerSelection = document.getElementById("imgPlayerSelection");


function playRound(playerChoice, computerChoice) {

    console.log(`Computer Choice: ${computerChoice}  |  Player Choice: ${playerChoice}`);

    // display computer selection
    if(computerChoice == "Rock") {
        imgComputerSelection.src = "images/rocks.png";
        computerSelectionBoard.appendChild(imgComputerSelection);
    } else if(computerChoice == "Paper") {
        imgComputerSelection.src = "images/paper.png";
        computerSelectionBoard.appendChild(imgComputerSelection);
    } else if(computerChoice == "Scissors") {
        imgComputerSelection.src = "images/scissors.png";
        computerSelectionBoard.appendChild(imgComputerSelection);
    }

    // display player selection
    if(playerChoice == "Rock") {
        imgPlayerSelection.src = "images/rocks.png";
        playerSelectionBoard.appendChild(imgPlayerSelection);
    } else if(playerChoice == "Paper") {
        imgPlayerSelection.src = "images/paper.png";
        playerSelectionBoard.appendChild(imgPlayerSelection);
    } else if(playerChoice == "Scissors") {
        imgPlayerSelection.src = "images/scissors.png";
        playerSelectionBoard.appendChild(imgPlayerSelection);
    }

    if(playerChoice == "Invalid") {
        console.log("Invalid");
    }
    else if(computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Scissors" && playerChoice == "Paper") {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);

        // add then display score
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        // display computer and player selection
        // computerSelectionBoard.textContent = computerChoice;
        // playerSelectionBoard.textContent = playerChoice;
        
        // create new list tag then add result message in top/reverse order using prepend
        const resultMessage = document.createElement("li");
        resultMessage.setAttribute("class", "red");
        resultList.prepend(resultMessage);
        resultMessage.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
    } 
    else if(playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);

        // add then display score
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        // display computer and player selection
        // computerSelectionBoard.textContent = computerChoice;
        // playerSelectionBoard.textContent = playerChoice;

        // create new list tag then add result message in top/reverse order using prepend
        const resultMessage = document.createElement("li");
        resultMessage.setAttribute("class", "green");
        resultList.prepend(resultMessage);
        resultMessage.textContent = `Player wins! ${playerChoice} beats ${computerChoice}`;
    } else {
        console.log("Draw");

        // display computer and player selection
        // computerSelectionBoard.textContent = computerChoice;
        // playerSelectionBoard.textContent = playerChoice;

        // create new list tag then add result message in top/reverse order using prepend
        const resultMessage = document.createElement("li");
        resultList.prepend(resultMessage);
        resultMessage.textContent = "Draw";
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

