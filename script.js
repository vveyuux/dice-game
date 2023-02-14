/*
  Script for animating and count the score.
*/

const diceOne = document.querySelector(".dice-one");
const diceTwo = document.querySelector(".dice-two");

const rollBtn = document.querySelector(".roll");

const rollText = document.querySelector(".roll-text");
const draw = document.querySelector(".draw");
const title = document.querySelector(".title");
const rolling = document.querySelector(".rolling");
const score = document.querySelector(".score");

const playerOne = document.querySelector(".player-one-win");
const playerTwo = document.querySelector(".player-two-win");

let p1 = 0;
let p2 = 0;
let ans = 0;

let scoreP1 = 0;
let scoreP2 = 0;

// You can change number of how the dice rolling here.
let min = 250;
let max = 500;

rollBtn.disabled = true;
rollBtn.addEventListener("click", roll);

function roll() {
  rollBtn.disabled = true;

  rollText.style.display = "none";
  score.style.display = "none";
  rolling.style.display = "block";
  if (playerOne.style.display === "block") playerOne.style.display = "none";
  else if (playerTwo.style.display === "block")
    playerTwo.style.display = "none";
  else if (draw.style.display === "block") draw.style.display = "none";

  let xRandOne = getRandom(max, min);
  let yRandOne = getRandom(max, min);

  diceOne.style.webkitTransform =
    "rotateX(" + xRandOne + "deg) rotateY(" + yRandOne + "deg)";
  diceOne.style.transform =
    "rotateX(" + xRandOne + "deg) rotateY(" + yRandOne + "deg)";

  let xRandTwo = getRandom(max, min);
  let yRandTwo = getRandom(max, min);

  diceTwo.style.webkitTransform =
    "rotateX(" + xRandTwo + "deg) rotateY(" + yRandTwo + "deg)";
  diceTwo.style.transform =
    "rotateX(" + xRandTwo + "deg) rotateY(" + yRandTwo + "deg)";

  p1 = checkAnswer(xRandOne % 360, yRandOne % 360);
  p2 = checkAnswer(xRandTwo % 360, yRandTwo % 360);

  setTimeout(() => {
    rolling.style.display = "none";
    if (p1 > p2) {
      playerOne.style.display = "block";
      scoreP1++;
    } else if (p2 > p1) {
      playerTwo.style.display = "block";
      scoreP2++;
    } else if (p1 === p2) draw.style.display = "block";
  }, "5000");

  setTimeout(() => {
    score.innerHTML = scoreP1 + " ➖ " + scoreP2;
    if (playerOne.style.display === "block") playerOne.style.display = "none";
    else if (playerTwo.style.display === "block")
      playerTwo.style.display = "none";
    else if (draw.style.display === "block") draw.style.display = "none";
    score.style.display = "block";
    rollBtn.disabled = false;
  }, "7000");
}

const getRandom = (max, min) => {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
};

const checkAnswer = (xRand, yRand) => {
  if (xRand === 0 && yRand === 0) ans = 1;
  else if (xRand === 90 && yRand === 0) ans = 3;
  else if (xRand === 180 && yRand === 0) ans = 6;
  else if (xRand === 270 && yRand === 0) ans = 4;
  else if (xRand === 0 && yRand === 90) ans = 2;
  else if (xRand === 90 && yRand === 90) ans = 3;
  else if (xRand === 270 && yRand === 90) ans = 4;
  else if (xRand === 180 && yRand === 90) ans = 5;
  else if (xRand === 0 && yRand === 180) ans = 6;
  else if (xRand === 90 && yRand === 180) ans = 3;
  else if (xRand === 180 && yRand === 180) ans = 1;
  else if (xRand === 270 && yRand === 180) ans = 4;
  else if (xRand === 0 && yRand === 270) ans = 5;
  else if (xRand === 90 && yRand === 270) ans = 3;
  else if (xRand === 180 && yRand === 270) ans = 2;
  else if (xRand === 270 && yRand === 270) ans = 4;
  return ans;
};

setTimeout(() => {
  rollBtn.disabled = false;
}, "4000");
