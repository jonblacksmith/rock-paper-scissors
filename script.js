function computerSelection() {
  const options = ['rock', 'paper', 'scissors'];
  return (options[Math.floor(Math.random() * options.length)]);
}

function playerSelection() {
  let playerInput = prompt("Type Rock, Paper, or Scissors: ");
  let trimInput = playerInput.trim();
  let lowerInput = trimInput.toLowerCase();

  while (!['rock', 'paper', 'scissors'].includes(lowerInput)) {
    playerInput = prompt("Invalid input. Please choose Rock, Paper, or Scissors: ");
    trimInput = playerInput.trim();
    lowerInput = trimInput.toLowerCase();
  }
  return lowerInput;
}

function playRound() {

  let user = playerSelection();
  let cpu = computerSelection();

  if (user === cpu) {
    return 'tie';
  }
  else if (user === 'rock' && cpu === 'scissors' || user === 'paper' && cpu === 'rock' || user === 'scissors' && cpu === 'paper') {
    return 'win';
  }
  else {
    return 'lose';
  }
}

function game() {
  let cpuScore = 0;
  let userScore = 0;
  let roundResult = 0;

  do {
    roundResult = playRound();
    if (roundResult == 'win') {
      userScore++;
    }
    else if (roundResult == 'lose') {
      cpuScore++;
    }
  }
  while (userScore < 3 && cpuScore < 3);
  
  if (userScore > cpuScore) {
    console.log("You win!");
  }
  else if (cpuScore > userScore) {
    console.log("You lose, try again!");
  }
  else {
    console.log("Tied!");
  }

  console.log(`Your score: ${userScore}`);
  console.log(`Computer score: ${cpuScore}`);
}

game();


