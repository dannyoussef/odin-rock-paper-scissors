function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.3) {
    return "Rock";
  } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let input = prompt("Choose Rock, Paper, or Scissors: ");
  return input;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == "rock" && computerChoice == "Scissors") {
    gameLog.textContent = "You win! Rock beats Scissors!";
    return 1;
  } else if (humanChoice == "paper" && computerChoice == "Rock") {
    gameLog.textContent = "You win! Paper beats Rock!";
    return 1;
  } else if (humanChoice == "scissors" && computerChoice == "Paper") {
    gameLog.textContent = "You win! Scissors beats Paper!";
    return 1;
  } else if (computerChoice == "Rock" && humanChoice == "scissors") {
    gameLog.textContent = "You lose! Rock beats Scissors!";
    return 0;
  } else if (computerChoice == "Paper" && humanChoice == "rock") {
    gameLog.textContent = "You lose! Paper beats Rock!";
    return 0;
  } else if (computerChoice == "Scissors" && humanChoice == "paper") {
    gameLog.textContent = "You lose! Scissors beats Paper!";
    return 0;
  } else {
    gameLog.textContent = "Draw!";
  }
}

function calculateScore() {
  if (playerScore == 5) {
    alert("You win!");
    playerScore = 0;
    computerScore = 0;
    userScoreboard.textContent = "Your Score: " + playerScore;
    computerScoreboard.textContent = "Computer Score: " + computerScore;
    gameLog.textContent = "";
  } else if (computerScore == 5) {
    alert("Computer wins.");
    playerScore = 0;
    computerScore = 0;
    userScoreboard.textContent = "Your Score: " + playerScore;
    computerScoreboard.textContent = "Computer Score: " + computerScore;
    gameLog.textContent = "";
  }
}
function rockSelected() {
  let computerPick = getComputerChoice();

  if (playRound("Rock", computerPick) == 1) {
    playerScore++;
    userScoreboard.textContent = "Your Score: " + playerScore;
  } else if (playRound("Rock", computerPick) == 0) {
    computerScore++;
    computerScoreboard.textContent = "Computer Score: " + computerScore;
  }
  calculateScore();
}

function paperSelected() {
  let computerPick = getComputerChoice();

  if (playRound("Paper", computerPick) == 1) {
    playerScore++;
    userScoreboard.textContent = "Your Score: " + playerScore;
  } else if (playRound("Paper", computerPick) == 0) {
    computerScore++;
    computerScoreboard.textContent = "Computer Score: " + computerScore;
  }
  calculateScore();
}

function scissorsSelected() {
  let computerPick = getComputerChoice();

  if (playRound("Scissors", computerPick) == 1) {
    playerScore++;
    userScoreboard.textContent = "Your Score: " + playerScore;
  } else if (playRound("Scissors", computerPick) == 0) {
    computerScore++;
    computerScoreboard.textContent = "Computer Score: " + computerScore;
  }
  calculateScore();
}

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", rockSelected);

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", paperSelected);

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", scissorsSelected);

const userScoreboard = document.querySelector("#player-score");
userScoreboard.textContent = "Your Score: " + playerScore;

const computerScoreboard = document.querySelector("#computer-score");
computerScoreboard.textContent = "Computer Score: " + computerScore;

const gameLog = document.querySelector("#game-log");
