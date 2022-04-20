
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
 * A function that pops 5 cards off the deck.
 */
const dealHand = () => {
  if (CURRENT_GAME_MODE === GAME_MODE_DEAL_CARDS) {
  // test hand here
  //  playerHand = highCard;
    for (let i = 0; i < 5; i += 1) {
      playerHand.push(deck.pop());
      // Create card element from card metadata
      let cardElement = createCard(playerHand[i]);
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
        playerFinalHand.unshift(playerHand.pop());
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
    gameInfo.innerText += ` You scored ${pointsforHand}. Your final score is ${playerHandScore}.`
  };
};


/**
 * A function that takes an array of card objects and returns the number of points that the user scored for the cards in their hand.
 * @param {array} max 
 * @returns {number} numbers in array added together
 */
const calcHandScore = (array) => {

  // tally cardNames
  for (let i = 0; i < playerFinalHand.length; i += 1) {
    var cardName = playerFinalHand[i].name;
    
    // If we have seen the card name before, increment its count
    if (cardName in cardNameTally) {
      console.log(`Card with same name has been seen before`)
      cardNameTally[cardName] += 1;
    }
    // Else, initialise count of this card name to 1
    else {
      console.log(`First card with this name in hand`)

      cardNameTally[cardName] = 1;
    }  
  }
  for (cardName in cardNameTally) {
    if (cardNameTally[cardName]===4){
      console.log(`4 of a kind`);
      isFourOfAKind = true;
    }
    if (cardNameTally[cardName]===3){
      console.log(`3 of a kind`);
      isThreeOfAKind = true;
    }
    if (cardNameTally[cardName]===2){
      console.log(`pair`);
      if (isPairOne === false){
        isPairOne = true
      }
      else {
        isPairTwo = true;
      }
      
    }
    console.log(`There are ${cardNameTally[cardName]} ${cardName} in the hand`);
  }

  // tally cardSuits
  for (let i = 0; i < playerFinalHand.length; i += 1) {
    var cardSuit = playerFinalHand[i].suit;
    
    // If we have seen the card suit before, increment its count
    if (cardSuit in cardSuitTally) {
      console.log(`Card with same suit has been seen before`)
      cardSuitTally[cardSuit] += 1;
    }
    // Else, initialise count of this card suit to 1
    else {
      console.log(`First card with this suit in hand`)

      cardSuitTally[cardSuit] = 1;
    }  
  }
  for (cardSuit in cardSuitTally) {
    if (cardSuitTally[cardSuit]===5){
      console.log(`flush`);
      isFlush = true;
    }
    console.log(`There are ${cardSuitTally[cardSuit]} ${cardSuit}s in the hand`);
    }
  
  
  // check for straights
  // get an array of the ranks in ascending order
  playerFinalNums = sortByRank(playerFinalHand);
  isStraight = checkForStraight(playerFinalNums);

  if (isStraight === true && isFlush === true) {
    gameInfo.innerText = `You got a straight flush!`
    return 80;
  }

  if (isFourOfAKind === true) {
    gameInfo.innerText = `You got four of a kind!`
    return 70;
  }
  
  if (isThreeOfAKind === true && isPairOne === true) {
    gameInfo.innerText = `You got a full house!`
    return 60;
  }

  if (isFlush === true) {
    gameInfo.innerText = `You got a flush!`
    return 50;
  }

  if (isStraight === true) {
    gameInfo.innerText = `You got a straight!`
    return 40;
  }

  if (isThreeOfAKind === true) {
    gameInfo.innerText = `You got three of a kind!`
    return 30;
  }

  if (isPairOne === true && isPairTwo === true) {
    gameInfo.innerText = `You got a two pair!`
    return 20;
  }

  if (isPairOne === true) {
    gameInfo.innerText = `You got one pair!`
    return 10;
  }

  else {
    gameInfo.innerText = `You didn't get anything :(`
    return 1;
  }
};

  
  
/**
 * A function that takes in an array of objects and creates an array of numbers only from the "rank" key. The array that is returned is sorted in ascending order.
 * @param {array} playerFinalHand
 * @returns {array}
 */
// Create a helper function to put the ranks into an array and sort
const sortByRank = (arrayOfObj) => {
  for (i=0; i<arrayOfObj.length; i++) {
    playerFinalNums[i] = arrayOfObj[i].rank;
  }
  playerFinalNums.sort(function(a, b){return a-b});
  console.log(`${playerFinalNums}`)
  return playerFinalNums;
};

/**
 * A function that takes in a sorted array (either ascending or descending) and checks if the numbers in the array are consecutive.
 * @param {array} arrayOfNums
 * @returns {boolean}
 */
const checkForStraight = (arrayOfNums) => {
  for (i=0; i<arrayOfNums.length-1; i++){
    if (differenceIsOne(arrayOfNums[i], arrayOfNums[i+1]) === false) {
      return false
    }
  }
  console.log(`straight`);
  return true;
}; 

/*
if ( 
    (differenceIsOne(arrayOfNums[0], arrayOfNums[1])) &&
    (differenceIsOne(arrayOfNums[1], arrayOfNums[2])) &&
    (differenceIsOne(arrayOfNums[2], arrayOfNums[3])) &&
    (differenceIsOne(arrayOfNums[3], arrayOfNums[4])) === true
  ) { return true
    }
*/

/**
 * A function that takes in 2 numbers and returns true if the difference between the 2 numbers is 1.
 * @param {array} playerFinalHand
 * @returns {array}
 */
const differenceIsOne = function (c, d) {
  if (Math.abs(c-d) === 1){
    return true;
  }
  return false;
};



  /**
 * A function that resets the game.

 */
const playAnotherRound = () => {
  if (CURRENT_GAME_MODE === GAME_MODE_END) {
    console.log(`start next round`);
    // reset player hand
    playerHand = [];
    playerFinalHand = [];
    playerFinalNums = [];
    numCardsNeeded = 0;

    cardNameTally = {};
    cardSuitTally = {};
    isStraight = false;
    isFlush = false;
    isFourOfAKind = false;
    isThreeOfAKind = false;
    isPairOne = false;
    isPairTwo = false;

    // reshuffle deck
    deck = shuffleCards(makeDeck());
    // Empty cardContainer
    cardContainer.innerHTML = '';

    CURRENT_GAME_MODE = GAME_MODE_DEAL_CARDS;
    gameInfo.innerText = ` Your current score is ${playerHandScore}. Click to deal again`
  };
};


/* ==================================== */
/* ========= GLOBAL SETUP ========= */
/* ==================================== */

let currentColour = '';
let currentSuitSymbol = '';
let currentDisplayName = '';
let playerHand = [];
let playerFinalHand = [];
let playerFinalNums = [];
let numCardsNeeded = 0;
let playerHandScore = 100;
let pointsforHand = 0;
let deck = shuffleCards(makeDeck());
let canClick = true;
let GAME_MODE_DEAL_CARDS = "GAME_MODE_DEAL_CARDS";
let GAME_MODE_SELECT_CARDS = "GAME_MODE_SELECT_CARDS";
let GAME_MODE_END = "GAME_MODE_END";
let CURRENT_GAME_MODE = GAME_MODE_DEAL_CARDS;
let cardsShown;
let gameInfo;
let cardNameTally = {};
let cardSuitTally = {};
let isStraight;
let isFlush;
let isFourOfAKind;
let isThreeOfAKind;
let isPairOne = false;
let isPairTwo = false;



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

// create play again button and append to body
playAgainButton = document.createElement('button');
playAgainButton.innerText = "Play again";
document.body.appendChild(playAgainButton);

// deal 5 cards to player when player clicks "Deal" button
dealButton.addEventListener('click', () => {
  dealHand()
});

chosenButton.addEventListener('click', () => {
  dealSecondHand()
});

playAgainButton.addEventListener('click', () => {
  playAnotherRound()
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