let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= 0.3) {
        return "Rock";
    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors: ")
    return input;
}


console.log(getComputerChoice());
console.log(getHumanChoice());