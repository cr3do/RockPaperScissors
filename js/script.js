function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0) {
        console.log("Rock");
        return computerChoice;
    } else if(computerChoice === 1) {
        console.log("Paper");
        return computerChoice;
    } else if(computerChoice === 2) {
        console.log("Scissors");
        return computerChoice;
    }
}

getComputerChoice();