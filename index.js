// Cards less than, more than or equal to 21
let firstCard = 11;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackJack = false;

let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(messageEl);

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?🤔";
  } else if (sum === 21) {
    message = "Congrats you've got BlackJack!😁";
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "You're out of the game.😭";
  }
  messageEl.textContent = message
}
