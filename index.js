let firstCard = 11;
let secondCard = 5;
let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card?🤔");
} else if (sum === 21) {
  console.log("Congrats you've got BlackJack!😁");
} else {
  console.log("You're out of the game.😭");
}
