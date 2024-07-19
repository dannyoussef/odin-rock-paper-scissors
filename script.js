function getComputerChoice() {
  let randomNumber = Math.random();
  console.log(randomNumber);
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
    console.log("You win! Rock beats Paper!");
    return 1;
  } else if (humanChoice == "paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats Rock!");
    return 1;
  } else if (humanChoice == "scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beats Paper!");
    return 1;
  } else if (computerChoice == "Rock" && humanChoice == "scissors") {
    console.log("You lose! Rock beats Scissors!");
    return 0;
  } else if (computerChoice == "Paper" && humanChoice == "rock") {
    console.log("You lose! Paper beats Rock!");
    return 0;
  } else if (computerChoice == "Scissors" && humanChoice == "paper") {
    console.log("You lose! Scissors beats Paper!");
    return 0;
  } else {
    console.log("Draw!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (playRound(humanSelection, computerSelection) == 1) {
      humanScore++;
    }
    if (playRound(humanSelection, computerSelection) == 0) {
      computerScore++;
    }
  }

  console.log("\nYour Score:\t ", humanScore);
  console.log("Computer Score:\t ", computerScore);
}

playGame();
