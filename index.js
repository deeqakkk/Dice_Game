
//To generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
// To select a image according to number obtained
var randomDiceImage = "dice" + randomNumber1 + ".png";
// Changing image directory according to random number
var randomImageSource = "images/" + randomDiceImage; 
// selecting image element
var image1 = document.querySelectorAll("img")[0];
// Updating dice image 
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
 }//if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
