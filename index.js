const DICE_PATH = "images/dice";

var randomNumber1 = generationRandomNumber();
var randomNumber2 = generationRandomNumber();

var diceRandomImage1 = DICE_PATH + randomNumber1 + ".png";
var diceRandomImage2 = DICE_PATH + randomNumber2 + ".png";

var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];
var header = document.querySelector(".container h1");

console.log(header);

var resp = "";

image1.src = diceRandomImage1;
image2.src = diceRandomImage2;

if (randomNumber1 > randomNumber2) {
  header.innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  header.innerHTML = "Player 2 wins! 🚩";
} else if (randomNumber1 == randomNumber2) {
  header.innerHTML = "🚩 Draw 🚩";
}

function generationRandomNumber() {
  return Math.floor(((Math.random() * 10) % 6) + 1);
}
