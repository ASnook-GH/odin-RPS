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

// console.log(getPlayerChoice());
// console.log(getComputerChoice());

// function playRound(playerChoice, computerChoice) {
function playRound() {
  let playerChoice = getPlayerChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  console.log("playerchoice = " + playerChoice);
  console.log("computerChoice = " + computerChoice);
  if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScore += 1;
    console.log(`Computer wins, Rock beats Scissors 
      Current score : Computer : ${computerScore} - Human : ${humanScore}`);
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    humanScore += 1;
    console.log(`Player wins, Paper beats Rock
      Current score : Computer : ${computerScore} - Human : ${humanScore}`);
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScore += 1;
    console.log(`Computer wins, Scissors beat paper
      Current score : Computer : ${computerScore} - Human : ${humanScore}`);
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    humanScore += 1;
    console.log(`Player wins, Rock beats Scissors
      Current score : Computer : ${computerScore} - Human : ${humanScore}`);
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore += 1;
    console.log(`Computer wins, Paper beats Rock
      Current score : Computer : ${computerScore} - Human : ${humanScore}`);
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    humanScore += 1;
    console.log(`Player wins, Scissors beats Paper
      Current score : Computer : ${computerScore} - Human : ${humanScore}`);
  } else {
    console.log("It's a draw");
  }
  console.log("end playround");
}

// console.log(playRound(playerChoice, computerChoice));

// function playGame() {
//   playRound(playerChoice, computerChoice);

//   if (humanScore >= 3) {
//     console.log("Congratulations ! You won");
//   } else if (computerScore >= 3) {
//     console.log("Sorry ! you lost");
//   } else {
//     alert("Another round ?");
//     playRound(playerChoice, computerChoice);
//   }
// }

function playGame2() {
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

playGame2();
