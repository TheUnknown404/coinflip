// Retrieve the score from localStorage or set default values
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

// Declare playerPick variable
let playerPick;

// Event listener for the 'heads' button
document.getElementById("heads").addEventListener("click", () => {
  // Update UI to show player's pick
  document.getElementById("text").innerHTML = "You picked: heads";
  // Set playerPick to 'heads'
  playerPick = "heads";
  // Get computer's pick
  const computerPick = game();
  // Determine and display the result
  result(playerPick, computerPick);
});

// Event listener for the 'tails' button
document.getElementById("tails").addEventListener("click", () => {
  // Update UI to show player's pick
  document.getElementById("text").innerHTML = "You picked: tails";
  // Set playerPick to 'tails'
  playerPick = "tails";
  // Get computer's pick
  const computerPick = game();
  // Determine and display the result
  result(playerPick, computerPick);
});

// Function to simulate the computer's pick
function game() {
  // Randomly choose 'heads' or 'tails' for the computer
  const computerPick = Math.random() > 1 / 2 ? "heads" : "tails";
  // Update UI to show computer's pick
  document.getElementById(
    "text2"
  ).innerHTML = `Computer Picked: ${computerPick}`;
  return computerPick;
}

// Function to determine the result and update the score
function result(playerPick, computerPick) {
  // Compare player's pick with computer's pick
  if (playerPick === computerPick) {
    // Player wins
    score.wins++;
    document.getElementById("heading").innerHTML = "You Win!";
  } else {
    // Player loses
    score.losses++;
    document.getElementById("heading").innerHTML = "You Lose!";
  }
  // Update the displayed score
  updateScore();
}

// Function to update the displayed score and store it in localStorage
function updateScore() {
  // Update the displayed wins and losses
  document.getElementById("wins").innerHTML = score.wins;
  document.getElementById("losses").innerHTML = score.losses;
  // Store the score in localStorage
  localStorage.setItem("score", JSON.stringify(score));
}

// Initial update of the score
updateScore();

// Event listener for the 'reset' button
document.getElementById("reset").addEventListener("click", reset);

// Function to reset the score
function reset() {
  // Reset wins and losses to zero
  score.wins = 0;
  score.losses = 0;
  // Update the displayed score
  updateScore();
}
