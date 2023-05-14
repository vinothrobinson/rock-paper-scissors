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
/*
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
*/

/* 
        Implementing the UI for the Rock Paper Scissors Game
*/
// Function to refresh the browser
function refresh() {
    window.location.reload(true);
}

// Variables for Human Player score and CPU Score
let humanScore = 0;
let cpuScore = 0;
let score = 0

// Creating text elements that are displayed on screen
const container = document.querySelector('#main-div');
const result = document.createElement('div');
result.classList.add('result');
result.style.display = "flex";
result.style.justifyContent = "space-evenly";
const finalResult = document.createElement('div');
finalResult.classList.add('finalResult');
const hScore = document.createElement('p');
const cScore = document.createElement('p');

// Styling the hScore attribute
hScore.textContent = `Your current score is: ${humanScore}`;
hScore.style.width = "150px";
hScore.style.height = "150px";
hScore.style.backgroundColor = "rgb(155, 102, 102)";
hScore.style.display = "flex";
hScore.style.alignItems = "center";
hScore.style.textAlign = "center";
hScore.style.padding = "10px";

// Styling the cScore attribute
cScore.textContent = `The CPU's current score is: ${cpuScore}`;
cScore.style.width = "150px";
cScore.style.height = "150px";
cScore.style.backgroundColor = "rgb(155, 102, 102)";
cScore.style.display = "flex";
cScore.style.alignItems = "center";
cScore.style.textAlign = "center";
cScore.style.padding = "10px";

result.appendChild(hScore);
result.appendChild(cScore);
container.appendChild(result);
container.appendChild(finalResult);

// Creating a button to start a new game
const newGame =  document.createElement('button');
newGame.classList.add('newGame');
newGame.addEventListener('click', refresh);
newGame.textContent = "Click here to play again!"

// const buttonDiv = document.querySelector('#button-div');
// buttonDiv.style.display = "flex";
// buttonDiv.style.alignItems = "center";
// Iterating through each possible button choice and
// simulating the playRound() function.
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.style.width = "150px";
    button.style.height = "150px";
    button.addEventListener('click', function game()
   {
    score = playRound(button.className, getComputerChoice());
    // Adding points to each player depending on winner
    if (score === 1){
        humanScore += 1;
    }
    else if (score === -1){
        cpuScore += 1;
    }
    else {
        humanScore += 0;
        cpuScore += 0;
    }
    hScore.textContent = `Your current score is: ${humanScore}`;
    cScore.textContent = `The CPU's current score is: ${cpuScore} `;

    // Checking the win condition for each player
    if (humanScore === 5){
        const p2 = document.createElement('p');
        p2.textContent = "You have won against the CPU!"
        finalResult.appendChild(p2);
        finalResult.appendChild(newGame);
        button.removeEventListener('click', game);
    } 
    else if (cpuScore === 5){
        const p3 = document.createElement('p');
        p3.textContent = "You have lost against the CPU!"
        finalResult.appendChild(p3)
        finalResult.appendChild(newGame);
        button.removeEventListener('click', game);
        
    }
   })
});