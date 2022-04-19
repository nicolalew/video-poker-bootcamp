
/*
The user has a global number of points.
The user clicks a button to deal cards.
The user selects which cards they want to keep.
The game replaces the unselected cards, calculates the hand score, and updates total points.
*/



/* ==================================== */
/* ========= HELPER FUNCITONS ========= */
/* ==================================== */



/**
 * A function that takes a maximum number and returns a random index from 0 (inclusive) to max (exclusive).
 * @param {number} max 
 * @returns {number}
 */
const getRandomIndex = (max) => Math.floor(Math.random() * max);

/**
 * A function that shuffles an array of card objects by selecting the current card and a random card and swapping their positions.
 * @param {array of objects} cards 
 * @returns {array of objects}
 */
const shuffleCards = (cards) => {
  // Loop over the card deck array once
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex += 1) {
    // Select a random index in the deck
    const randomIndex = getRandomIndex(cards.length);
    // Select the card that corresponds to randomIndex
    const randomCard = cards[randomIndex];
    // Select the card that corresponds to currentIndex
    const currentCard = cards[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cards;
};





/**
 * A function that makes a deck of cards.
 * @param {array of objects} 
 * @returns {array of objects}
 */
const makeDeck = () => {
  // Initialise an empty deck array
  const newDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];
    if (currentSuit === 'hearts'){
      currentSuitSymbol = '♥︎';
      currentColour = 'red';
    } else if (currentSuit === 'diamonds'){
      currentSuitSymbol = '♦︎';
      currentColour = 'red';
    } else if (currentSuit === 'clubs'){
      currentSuitSymbol = '♣︎';
      currentColour = 'black';
    } else if (currentSuit === 'spades'){
      currentSuitSymbol = '♠︎';
      currentColour = 'black';
    }

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      let cardName = `${rankCounter}`;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name and currentDisplayName to the first letter
      if (cardName === '1') {
        cardName = 'ace';
        currentDisplayName = 'A';
      } else if (cardName === '11') {
        cardName = 'jack';
        currentDisplayName = 'J';
      } else if (cardName === '12') {
        cardName = 'queen';
        currentDisplayName = 'Q';
      } else if (cardName === '13') {
        cardName = 'king';
        currentDisplayName = 'K';
      } else currentDisplayName = cardName;

      // Create a new card with the current name, suit, and rank
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        suitSymbol: currentSuitSymbol,
        displayName: currentDisplayName,
        colour: currentColour
      };

      // Add the new card to the deck
      newDeck.push(card);
    }
  }

  // Return the completed card deck
  return newDeck;
};


/**
 * A function that takes a card object and makes visual cards.
 * @param {object} cardInfo
 * @returns {div}
 */
// Create a helper function to make visual cards
const createCard = (cardInfo) => {
  const suit = document.createElement('div');
  suit.classList.add('suit', cardInfo.colour);
  suit.innerText = cardInfo.suitSymbol;

  const name = document.createElement('div');
  name.classList.add('name', cardInfo.colour);
  name.innerText = cardInfo.displayName;

  const card = document.createElement('div');
  card.classList.add('card');

  card.appendChild(name);
  card.appendChild(suit);

  return card;
};


/**
 * A function that applies or removes "selected" class to the element clicked
 */
/*
const selectCard = () => {
  // if card has not been selected, apply "selected" class to give it red border
  return 
}
*/


/**
 * A function that pops 5 cards off the deck.
 */
const dealHand = () => {
  if (CURRENT_GAME_MODE === GAME_MODE_DEAL_CARDS) {
    for (let i = 0; i < 5; i += 1) {
    playerHand.push(deck.pop());
    // Create card element from card metadata
    const cardElement = createCard(playerHand[i]);
    // Append the card element to the card container
    cardContainer.appendChild(cardElement);
    };
    CURRENT_GAME_MODE = GAME_MODE_SELECT_CARDS;
    console.log(playerHand)
    gameInfo.innerText = "Your cards have been dealt! Select the cards you want to keep and click 'I've chosen' when you're done."
    initSelectCards();
    return playerHand;
  };
};

/**
 * A function that takes in a single card from the node list of cards and returns a function for each card allowing it to be toggled on or off.
 * * @returns {function}
 */
var createToggleFunction = (cardNode) => {
  console.log('toggle selected function running')
  return function () {
    cardNode.classList.toggle('selected')
  }
};

/**
 * A function that adds an event listener to each card being displayed and passes this card into the createToggleFunction function.
 */
const initSelectCards = () => {
  cardsShown = document.querySelectorAll('.card');
  for (i=0; i<cardsShown.length; i++) {
    cardsShown[i].addEventListener('click', createToggleFunction(cardsShown[i])
    );
  }
};

  /*
  cardsShown[0].addEventListener('click', () => cardsShown[0].classList.toggle('selected'));
  cardsShown[1].addEventListener('click', () => cardsShown[1].classList.toggle('selected'));
  cardsShown[2].addEventListener('click', () => cardsShown[2].classList.toggle('selected'));
  cardsShown[3].addEventListener('click', () => cardsShown[3].classList.toggle('selected'));
  cardsShown[4].addEventListener('click', () => cardsShown[4].classList.toggle('selected'));
  */


  /**
 * A function that keeps the player's selected cards and deals new cards.
 * @returns {array of objects}
 */
const dealSecondHand = () => {
  if (CURRENT_GAME_MODE === GAME_MODE_SELECT_CARDS) {
    console.log(`dealSecondHand function`);
    cardsShown = document.querySelectorAll('.card');
    for (i=4; i>-1; i-=1) {
      if (cardsShown[i].classList.contains('selected')) {
        console.log(`card has been selected: ${cardsShown[i]}`)
        playerFinalHand.push(playerHand.pop());
        console.log(`playerFinalHand is ${playerFinalHand}`)
        console.log(`playerHand is ${playerHand}`) 
      }
      else {
        console.log(`card not selected: ${cardsShown[i]}`)
        playerHand.pop();
        console.log(`playerFinalHand is ${playerFinalHand}`)
        console.log(`playerHand is ${playerHand}`) 
      }
    }
   
    // count number of cards needed to be dealt
    numCardsNeeded = 5 - playerFinalHand.length;

    // deal final cards
    for (let i=0; i<numCardsNeeded; i+=1) {
      playerFinalHand.push(deck.pop());
    }

    // Empty cardContainer
    cardContainer.innerHTML = '';

    for (let i = 0; i < 5; i += 1) {
      // Create card element from card metadata
      const cardElementTwo = createCard(playerFinalHand[i]);
      // Append the card element to the card container
      cardContainer.appendChild(cardElementTwo);
    };

    CURRENT_GAME_MODE = GAME_MODE_END;
    
    // Calculate hand score

    pointsforHand = calcHandScore(playerFinalHand);
    playerHandScore += pointsforHand;
    gameInfo.innerText = `You scored ${pointsforHand}. Your final score is ${playerHandScore}.`
  };
};


/**
 * A function that takes an array of card objects and returns the number of points that the user scored for the cards in their hand.
 * @param {array} max 
 * @returns {number} numbers in array added together
 */
const calcHandScore = (array) => {

  // tally
  for (let i = 0; i < playerFinalHand.length; i += 1) {
    var cardName = playerFinalHand[i].name;
    // If we have seen the card name before, increment its count
    if (cardName in cardNameTally) {
      console.log(`Card has been seen before`)
      cardNameTally[cardName] += 1;
    }
    // Else, initialise count of this card name to 1
    else {
      console.log(`First of this card in hand`)

      cardNameTally[cardName] = 1;
    }
    
  }
  for (cardName in cardNameTally) {
    console.log(`There are ${cardNameTally[cardName]} ${cardName}s in the hand`);
  }   
  return 1;
};


/* ==================================== */
/* ========= GLOBAL SETUP ========= */
/* ==================================== */

let currentColour = '';
let currentSuitSymbol = '';
let currentDisplayName = '';
let playerHand = [];
let playerFinalHand = [];
let numCardsNeeded = 0;
let playerHandScore = 100;
let pointsforHand = 0;
const deck = shuffleCards(makeDeck());
let canClick = true;
let GAME_MODE_DEAL_CARDS = "GAME_MODE_DEAL_CARDS";
let GAME_MODE_SELECT_CARDS = "GAME_MODE_SELECT_CARDS";
let GAME_MODE_END = "GAME_MODE_END";
let CURRENT_GAME_MODE = GAME_MODE_DEAL_CARDS;
let cardsShown;
let gameInfo;
let cardNameTally = {};



/* ==================================== */
/* ========= INITIALISE GAME ========= */
/* ==================================== */

// fill game info div with starting instructions
gameInfo = document.createElement('p');
gameInfo.innerText = "Click on the button to start.";
document.body.appendChild(gameInfo);


// Initialise cardContainer as a div with CSS class card-container, and add it to the document body.
cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
document.body.appendChild(cardContainer);

// create deal button and append to body
dealButton = document.createElement('button');
dealButton.id = 'deal-button';
dealButton.innerText = "Deal cards"
document.body.appendChild(dealButton);

// create chosen button and append to body
chosenButton = document.createElement('button');
chosenButton.innerText = "I've chosen";
document.body.appendChild(chosenButton);

// deal 5 cards to player when player clicks "Deal" button
dealButton.addEventListener('click', () => {
  dealHand()
});

chosenButton.addEventListener('click', () => {
  dealSecondHand()
});













// QUESTIONS
// What's a nodelist cardsShown - how come i couldn't add a class list to this
// how to use addEventListener - what's () => {}










/* TEMPLATE FOR FUTURE PROJECTS */

/* ==================================== */
/* ========= GLOBAL SETUP ========= */
/* ==================================== */





/* ==================================== */
/* ========= HELPER FUNCITONS ========= */
/* ==================================== */




/* ==================================== */
/* ========= PLAYER CALLBACK ACTIONS ========= */
/* ==================================== */




/* ==================================== */
/* ========= INITIALISE GAME ========= */
/* ==================================== */