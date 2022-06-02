"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  function displayMessage(messageNote) {
    document.querySelector(".message").textContent = messageNote;
  }

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").innerHTML = score;
    }
  } else if (guess > secretNumber) {
    displayMessage("Too High");
  } else if (guess < secretNumber) {
    displayMessage("Too Low");
  }

  if (guess !== secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      displayMessage("You lost the game");
      score = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  let guess = (document.querySelector(".guess").value = "");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
