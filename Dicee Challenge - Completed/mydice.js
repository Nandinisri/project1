$("button").click(function(){

var number1 = Math.floor(Math.random()*6)+1;
var random1 = "images/dice" + number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", random1);

var number2 = Math.floor(Math.random()*6)+1;
var random2 = "images/dice" + number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", random2);

//If player 1 wins
if (number1 > number2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! 👻";
}
else if (number2 > number1) {
  document.querySelector("h1").innerHTML = "😉 Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw! 😉👻";
}
});
