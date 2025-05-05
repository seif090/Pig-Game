'use strict';
// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
// Reset winner class

// Implement rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing){
  // 1. Generate a random dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (diceRoll !== 1) {
    // Add dice roll to current score
    currentScore += diceRoll;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
}});
// Implement holding current score functionality
btnHold.addEventListener('click', function () {
    if (playing){
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    dice.classList.add('hidden');
  } else {
    // Switch to next player
    switchPlayer();
  }
}});
// Implement switching players functionality
const switchPlayer = function () {
  // Reset current score
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;

  // Switch active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  // Hide dice
  dice.classList.add('hidden');
};
// Implement resetting game functionality
btnNew.addEventListener('click', function () {
  // Reset scores
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  // Reset active player
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  document
    .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
    .classList.remove('player--active');

  // Hide dice
  dice.classList.add('hidden');
});
// Reset winner class
document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove('player--winner');
// Reset active player class
document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove('player--active');
// Finish the game
document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove('player--winner');
document
  .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
  .classList.remove('player--active');
// Hide dice
dice.classList.add('hidden');
