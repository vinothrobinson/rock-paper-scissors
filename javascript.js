function getComputerChoice() {
    let choice = (Math.random() * 10).toFixed(0);
    if (choice <= 3) {
        return "Scissors";
    }
    else if (choice <= 6) {
        return "Rock";
    }
    else if (choice > 6){
        return "Paper";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            return "You win! Rock beats Scissors"
        }
        else if (computerSelection === "Paper"){
            return "You lose! Paper beats Rock"
        }
        else {
            return "You tie! Rock cannot beat Rock"
        }
    }
    if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            return "You win! Paper beats Rock"
        }
        else if (computerSelection === "Scissors"){
            return "You lose! Scissors beats Paper"
        }
        else {
            return "You tie! Paper cannot beat Paper"
        }
    }
    if (playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            return "You win! Scissors beats Paper"
        }
        else if (computerSelection === "Rock"){
            return "You lose! Rock beats Scissors"
        }
        else {
            return "You tie! Scissors cannot beat Scissors"
        }
    }
}

function capitalize(string){
    const str = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return str;
}
/*
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice()); */