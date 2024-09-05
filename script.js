'use strict';
//want to select the score of both player 0 and 1 and set value to 0.
var player0E1 = document.querySelector('.player--0');
var player1E1 = document.querySelector('.player--1');
var scoreoE0 = document.querySelector('#score--0');
var scoreoE1 = document.querySelector('#score--1');
var diceE1 = document.querySelector('.dice');
var btnnew = document.querySelector('.btn--new');
var btnroll = document.querySelector('.btn--roll');
var btnhold = document.querySelector('.btn--hold');
let currScore0E = document.querySelector('#current--0');
let currScore1E = document.querySelector('#current--1');
let currScore = 0;
let activePlayer = 0;
var scores = [0, 0];
let playing = true;
//Initialistaion
scoreoE0.textContent = 0;
scoreoE1.textContent = 0;
diceE1.classList.add('hidden');

//rolling dice functinality
btnroll.addEventListener('click', function () {
  if (playing) {
    //Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display the dice
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    //Check for rolled dice if it is 1 then switch to newxt user and set current score=0
    if (dice != 1) {
      currScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore; //Select the current score dynamically.
      //currScore0E.textContent = currScore;
    } else {
      //Switching active player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currScore = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      player0E1.classList.toggle('player--active');
      player1E1.classList.toggle('player--active');
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    //add the current score to the score value of active player
    scores[activePlayer] = scores[activePlayer] + currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if score>100 then finish game
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--active`);
      diceE1.classList.add('hidden');
    }
    //or switch to next player
    else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currScore = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      player0E1.classList.toggle('player--active');
      player1E1.classList.toggle('player--active');
    }
  }
});
btnnew.addEventListener('click', function () {
  scores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  playing = true;
  scoreoE0.textContent = 0;
  scoreoE1.textContent = 0;
  currScore0E.textContent = 0;
  currScore1E.textContent = 0;
  diceE1.classList.add('hidden');
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player-active');
});
