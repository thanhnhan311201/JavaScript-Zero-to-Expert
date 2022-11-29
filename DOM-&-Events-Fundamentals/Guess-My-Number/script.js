'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const manipulateObjectValue = function (object, property, objectValue) {
  document.querySelector(object)[property] = objectValue;
};

const manipulateCSSStyle = function (object, cssProperty, cssValue) {
  document.querySelector(object).style[cssProperty] = cssValue;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    manipulateObjectValue('.message', 'textContent', '⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    manipulateObjectValue('.message', 'textContent', '🎉 Correct Number!');
    manipulateObjectValue('.number', 'textContent', secretNumber);
    document.querySelector;

    manipulateCSSStyle('body', 'backgroundColor', '#60b347');
    manipulateCSSStyle('.number', 'width', '30rem');

    if (score > highScore) {
      highScore = score;
      manipulateObjectValue('.highscore', 'textContent', highScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      manipulateObjectValue(
        '.message',
        'textContent',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      manipulateObjectValue('.score', 'textContent', score);
    } else {
      manipulateObjectValue('.message', 'textContent', '💥 You lost the game!');
      manipulateObjectValue('.score', 'textContent', 0);
    }
  }
});

// Reset game by clicking again button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  manipulateObjectValue('.message', 'textContent', 'Start guessing...');
  manipulateObjectValue('.number', 'textContent', '?');
  manipulateObjectValue('.guess', 'value', '');
  manipulateObjectValue('.score', 'textContent', score);

  manipulateCSSStyle('body', 'backgroundColor', '#222');
  manipulateCSSStyle('.number', 'width', '15rem');
});
