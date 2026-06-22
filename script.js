function getComputerChoice(val) {
  let value = Math.floor(Math.random() * val);
  if (value === 1) {
    return "Rock";
  } else if (value === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Rock, Paper, Scissors ? ");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
  if (computerChoice === "Rock" && playerChoice === "scissors") {
    return "Computer wins, Rock beats Scissors";
  } else if (computerChoice === "Rock" && playerChoice === "paper") {
    return "Player wins, Paper beats Rock";
  } else if (computerChoice === "Scissors" && playerChoice === "paper") {
    return "Computer wins, Scissors beat paper";
  } else if (computerChoice === "Scissors" && playerChoice === "rock") {
    return "Player wins, Rock beats Scissors";
  } else if (computerChoice === "Paper" && playerChoice === "rock") {
    return "Computer wins, Paper beats Rock";
  } else if (computerChoice === "Paper" && playerChoice === "scissors") {
    return "Player wins, Scissors beats Paper";
  } else {
    return "It's a draw";
  }

  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice(3);
}
