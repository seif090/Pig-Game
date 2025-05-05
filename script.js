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

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// Implement rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (diceRoll !== 1) {
    // Add dice roll to current score
    currentScore += diceRoll;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
}
);