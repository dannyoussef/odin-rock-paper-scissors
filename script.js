console.log("Hello World!");

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= 0.3) {
        console.log("Rock");
    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        console.log("Paper");
    } else {
        console.log("Scissors")
    }
}

function getHumanChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors: ")
    return input;
}

console.log(getComputerChoice());
console.log(getHumanChoice());