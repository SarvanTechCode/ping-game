'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hide');
btnRoll.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  diceEl.classList.remove('hide');
  diceEl.src = `dice-${randomNumber}.png`;
});
