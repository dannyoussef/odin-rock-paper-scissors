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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let humanScore = 0;
    let computerScore = 0;

    if (humanChoice == "rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Paper!");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    } else if (computerChoice == "Rock" && humanChoice == "scissors") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    } else if (computerChoice == "Paper" && humanChoice == "rock") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    } else if (computerChoice == "Scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    } else {
        console.log("Draw!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);