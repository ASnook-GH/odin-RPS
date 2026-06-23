function getComputerChoice(val) {
  let value = Math.floor(Math.random() * val);
  if (value === 1) {
    return "rock";
  } else if (value === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Rock, Paper, Scissors ? ");
  return choice;
}

// console.log(getPlayerChoice());
// console.log(getComputerChoice(3));

let humanScore = 0;
let computerScore = 0;

const playerChoice = getPlayerChoice().toLowerCase();
const computerChoice = getComputerChoice(3);

function playRound(playerChoice, computerChoice) {
  if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScore += 1;
    return `Computer wins, Rock beats Scissors 
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    humanScore += 1;
    return `Player wins, Paper beats Rock
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScore += 1;
    return `Computer wins, Scissors beat paper
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    humanScore += 1;
    return `Player wins, Rock beats Scissors
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore += 1;
    return `Computer wins, Paper beats Rock
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    humanScore += 1;
    return `Player wins, Scissors beats Paper
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
  } else {
    return "It's a draw";
  }
}

console.log(playRound(playerChoice, computerChoice));
