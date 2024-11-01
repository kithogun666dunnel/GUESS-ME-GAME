'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;
// REFACTORING CODE with functions
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (number) {
    document.querySelector(`.number`).textContent = number;
}

const displayScore = function (score) {
    document.querySelector(`.score`).textContent = score;
}

document.querySelector(`.check`).addEventListener('click', function () {
    const guess = Number(document.querySelector(`.guess`).value);
    (guess, typeof guess);
    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = ' NO NUMBER SELECTED ';
        displayMessage(`NO NUMBER SELECTED`)
        // when player wins 
    } else if (guess === secretNumber) {
        displayMessage('✔️correct numberrrrrr!')
        displayNumber(secretNumber);
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
        if (score > highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
        // when guess is wrongg
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage((guess > secretNumber) ? '📈TOO HIGH' : '📉 TOOO LOW')
            score--;
            displayScore(score);
        } else {
            displayMessage(`YOU LOST THE GAME`);
            displayScore(0);
        }
    }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayScore(score);
    document.querySelector(`body`).style.backgroundColor = `#222`;
    displayNumber(`?`)
    document.querySelector(`.number`).style.width = `15rem`;
    displayMessage(`START GUESSING`);
    document.querySelector(`.guess`).value = ``;
})


























