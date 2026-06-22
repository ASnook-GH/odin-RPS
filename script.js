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

console.log(getComputerChoice(3));
console.log(getComputerChoice(3));
console.log(getComputerChoice(3));
