'use strict';

/*
document.querySelector('.message').textContent = '🍾 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //pop sound addition
  const popSound = new Audio(
    'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3'
  );
  popSound.play();

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('🚫 No number!');

    // When the player guesses right
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    //Tada sound addition
    const tadaSound = new Audio(
      'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3'
    );
    tadaSound.play();

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤦‍♀️ Oh no you lost!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#5d0303';
    }
  }
});

// The again button
document.querySelector('.again').addEventListener('click', function () {
  //step 1
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //step 2
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //step 3
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
