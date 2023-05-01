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