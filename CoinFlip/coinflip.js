// Load score from localStorage or initialize with default values
let score = JSON.parse(localStorage.getItem("score")) || { wins: 0, losses: 0 };
updateScore();

// Initialize variables
let playerPick;
let text = document.querySelector(".text");

// Event listeners for coin buttons and reset button
document.querySelector(".heads").addEventListener('click', () => handleButtonClick("heads"));
document.querySelector(".tails").addEventListener('click', () => handleButtonClick("tails"));
document.querySelector(".reset").addEventListener('click', resetScore);
let text2 = document.querySelector("")

// Handle button click event
function handleButtonClick(picked) {
  // Update displayed text
  text.innerHTML = `You picked ${picked}`;
  playerPick = picked;

  // Get computer pick and play the game
  let computerPick = computerPickValue();
  game(playerPick, computerPick);
}

// Generate a random computer pick ('heads' or 'tails')
function computerPickValue() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

// Evaluate the game outcome and update the score
function game(playerPickParam, computerPickParam) {
  playerPickParam === computerPickParam ? score.wins++ : score.losses++;
  updateScore();
}

// Update the displayed score and save to localStorage
function updateScore() {
  document.querySelector(".wins").innerHTML = score.wins;
  document.querySelector(".losses").innerHTML = score.losses;
  localStorage.setItem("score", JSON.stringify(score));
}

// Reset the score to zero
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  updateScore();
}