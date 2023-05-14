function getComputerChoice() {
    let choice = (Math.random() * 10).toFixed(0); // Uses a random number to choose the computer's move
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
    if (playerSelection === computerSelection){ // The case where both the player and computer have the same move
        console.log(`You tie! ${playerSelection} cannot beat ${computerSelection}`);
        return 0; // Value returned when a tie occurs
    }
    if (playerSelection === "Rock"){ // The possible cases when player choose 'Rock'
        if (computerSelection === "Scissors"){ 
            console.log("You win! Rock beats Scissors");
            return 1; // Value returned when the player wins
        }
        else if (computerSelection === "Paper"){ 
            console.log("You lose! Paper beats Rock");
            return -1; // Value returned when the player loses
        }
    }
    if (playerSelection === "Paper"){ // The possible cases when player choose 'Paper'
        if (computerSelection === "Rock"){
            console.log("You win! Paper beats Rock");
            return 1;
        }
        else if (computerSelection === "Scissors"){
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
    }
    if (playerSelection === "Scissors"){ // The possible cases when player choose 'Scissors'
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
// This function is used to make sure that user inputs are properly formatted
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
    let winCounter = 0 // Used to keep track of who's winning
    // for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Enter a move ('Rock', 'Paper', or 'Scissors'): ");
    let computerSelection = getComputerChoice();
    winCounter += playRound(playerSelection, computerSelection);
    // }
    if (winCounter === 5){
        return "You won against the computer!"
    }
    else if (winCounter === -5){
        return "You lost to the computer!"
    }
} // Adjusted the win conditions and removed the for loop

// console.log(game());

/* 
        Implementing the UI for the Rock Paper Scissors Game
*/

let totalScore = 0;
const container = document.querySelector('#main-div');
const result = document.createElement('div');
result.classList.add('result');
const currentScore = document.createElement('p');

currentScore.textContent = `Your current score is currently: ${totalScore}`;

result.appendChild(currentScore);
container.appendChild(result);


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
   button.style.width = "150px";
   button.style.height = "150px";
   button.addEventListener('click', (e) =>
   {
    totalScore += playRound(button.className, getComputerChoice());
    currentScore.textContent = `Your current score is currently: ${totalScore}`;
    
    if (totalScore === 5){
        const p2 = document.createElement('p');
        p2.textContent = "You have won against the CPU!"
        result.appendChild(p2);
        totalScore = 0;
    } 
    else if (totalScore === -5){
        const p3 = document.createElement('p');
        p3.textContent = "You have lost against the CPU!"
        result.appendChild(p3)
        totalScore = 0;
    }
   })
});

// playRound(`${button.class}`, getComputerChoice())