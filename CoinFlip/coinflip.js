let playerPick; // Define playerPick outside the click event listeners

let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
  };

document.getElementById('heads').addEventListener('click', () => {
    document.getElementById("text").innerHTML = 'You picked: heads'
    playerPick = 'heads';
    const computerPick = game(); // Get the computerPick from the game function
    result(playerPick, computerPick);
});

document.getElementById('tails').addEventListener('click', () => {
    document.getElementById("text").innerHTML = 'You picked: tails'
    playerPick = 'tails';
    const computerPick = game(); // Get the computerPick from the game function
    result(playerPick, computerPick);
});

function game() {
    const computerPick = Math.random() > 1 / 2 ? 'heads' : 'tails';
    document.getElementById('text2').innerHTML = `Computer Picked: ${computerPick}`;
    return computerPick; // Return the computerPick value
}

function result(playerPick, computerPick) {
    if (playerPick === computerPick) {
        score.wins++;
    } else {
        score.losses++;
    }
    updateScore()
}

function updateScore() {
document.getElementById('wins').innerHTML = score.wins;
document.getElementById('losses').innerHTML = score.losses;
localStorage.setItem('score', JSON.stringify(score));
}

updateScore();


document.getElementById('reset').addEventListener('click', reset)

function reset() {
score.wins = 0;
score.losses = 0;
updateScore();
}