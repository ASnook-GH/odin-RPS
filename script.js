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
  return choice.toLowerCase;
}
