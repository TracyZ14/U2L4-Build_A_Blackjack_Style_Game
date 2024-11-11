// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4

//challenge #1
//create a new variable and set it to the sum of the two cards
let sum = firstCard + secondCard;


//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards
if(sum < 21) {
    message = "Do you want to draw a new card? 🙂" 
} else if(sum == 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
} else {
    message = "You're out of the game! 😭" 
}
console.log(message)

let cards = [firstCard, secondCard];

let hasBlackjack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame() {
    cardsEl.innerHTML = "Cards:";

    sum = 0;

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];

        sum += cards[i];
    }

    sumEl.innerHTML = "Sum: " + sum;

    if(sum < 21) {
        message = "Do you want to draw a new card? 🙂" 
    } else if(sum == 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        
        isAlive = false;
    } else {
        message = "You're out of the game! 😭"

        isAlive = false;
    }

    messageEl.innerHTML = message;
}

function newCard() {
    if(isAlive) {
        let card = getRandomCard();

        sum += card;
    
        cards.push(card);
    
        renderGame();
    }
}

function startGame() {
    isAlive = true;

    firstCard = getRandomCard();
    secondCard = getRandomCard();

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();

    startGameBtn.innerHTML = "RESTART GAME";
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber == 1) {
        return 11;
    } else if(randomNumber > 9) {
        return 10;
    } else {
        return randomNumber;
    }
}

let startGameBtn = document.getElementById("start-game-btn");

let playerEl = document.getElementById("player-el");

let username = prompt("What is your name?");
playerEl.innerHTML = "Your name: " + username;