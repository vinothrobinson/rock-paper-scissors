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

/*
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice()); */

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    if (playerSelection === computerSelection){
        console.log(`You tie! ${playerSelection} cannot beat ${computerSelection}`);
        return 0;
    }
    if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            console.log("You win! Rock beats Scissors");
            return 1;
        }
        else if (computerSelection === "Paper"){
            console.log("You lose! Paper beats Rock");
            return -1;
        }
    }
    if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            console.log("You win! Paper beats Rock");
            return 1;
        }
        else if (computerSelection === "Scissors"){
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
    }
    if (playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            console.log("You win! Scissors beats Paper");
            return 1;
        }
        else if (computerSelection === "Rock"){
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
    }
}

function capitalize(string){
    const str = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return str;
}

/*
const playerSelection = "rOck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

function game() {
    let winCounter = 0
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter a move ('Rock', 'Paper', or 'Scissors'): ");
        let computerSelection = getComputerChoice();
        winCounter += playRound(playerSelection, computerSelection);
    }
    if (winCounter > 0){
        return "You won against the computer!"
    }
    if (winCounter < 0){
        return "You lost to the computer!"
    }
    else {
        return "You ties with the computer!"
    }
}

console.log(game());