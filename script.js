let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);
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

function playRound() {
  let playerChoice = getPlayerChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScore += 1;
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Computer wins, Rock beats Scissors 
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
    container.appendChild(paragraph);
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    humanScore += 1;
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Player wins, Paper beats Rock
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
    container.appendChild(paragraph);
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScore += 1;
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Computer wins, Scissors beat paper
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
    container.appendChild(paragraph);
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    humanScore += 1;
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Player wins, Rock beats Scissors
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
    container.appendChild(paragraph);
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore += 1;
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Computer wins, Paper beats Rock
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
    container.appendChild(paragraph);
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    humanScore += 1;
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Player wins, Scissors beats Paper
      Current score : Computer : ${computerScore} - Human : ${humanScore}`;
    container.appendChild(paragraph);
  } else {
    const container = document.querySelector(".results");
    const paragraph = document.createElement("p");
    paragraph.textContent = "It's a draw";
    container.appendChild(paragraph);
  }
  console.log("end playround");
}

function playGame() {
  let round = 0;
  while (humanScore < 5 || computerScore < 5) {
    round++;
    console.log(round);
    playRound();
    console.log(
      `the score is the following : Computer : ${computerScore} - Human : ${humanScore}`,
    );
    if (round === 13) {
      break;
      console.log(
        `It's round ${round} and the score is the following : Computer : ${computerScore} - Human : ${humanScore}`,
      );
    }
  }
  console.log("end prog");
}

playRound();
