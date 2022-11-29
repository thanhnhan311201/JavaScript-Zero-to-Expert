'use strict';

// Selecting elements
const firstPlayer = document.querySelector('.player--0');
const scoreFirstPlayer = document.getElementById('score--0');
const currentScoreFirstPlayer = document.getElementById('current--0');

const secondPlayer = document.querySelector('.player--1');
const scoreSecondPlayer = document.getElementById('score--1');
const currentScoreSecondPlayer = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let goalScore, totalScore, currentScore, activePlayer, playing;

const disablePlayButton = isDisabled => {
  btnHold.disabled = isDisabled;
  btnRoll.disabled = isDisabled;
};

const initGame = () => {
  // Set goal score
  goalScore = 20;

  // Set all player's score to 0
  currentScore = 0;
  totalScore = [0, 0];

  scoreFirstPlayer.textContent = 0;
  scoreSecondPlayer.textContent = 0;

  currentScoreFirstPlayer.textContent = 0;
  currentScoreSecondPlayer.textContent = 0;

  // Hidden dice
  dice.classList.add('hidden');

  // Reset player winner
  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner');

  // Set player 1 as starting player
  activePlayer = 0;
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--active');

  // Set holl button and roll button non-disabled
  playing = true;
  disablePlayButton(!playing);
};

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  firstPlayer.classList.toggle('player--active');
  secondPlayer.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const endGame = winner => {
  winner.classList.add('player--winner');
  winner.classList.remove('player--active');
  dice.classList.add('hidden');

  playing = false;
  disablePlayButton(!playing);
};

// Start game
initGame();

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generating a random dice roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    dice.classList.remove('hidden');
    // dice.setAttribute('src', `dice-${randomDice}.png`);
    dice.src = `dice-${randomDice}.png`;

    // 3. Check for rolled 1
    // If false, add dice roll to current score
    if (randomDice !== 1) {
      // Add dice roll to current score
      currentScore += randomDice;

      // Check which player is active to display new current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // If true, switch to the next player
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Hold dice functionality
btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's score
    totalScore[activePlayer] += currentScore;
    // Display total score
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    // 2. Check if player's score >= goalScore: if true, finish the game
    if (totalScore[activePlayer] >= goalScore) {
      endGame(document.querySelector(`.player--${activePlayer}`));
    } else {
      // if false, switch to the next player
      switchPlayer();
    }
  }
});

// New game functionality
btnNew.addEventListener('click', initGame);
