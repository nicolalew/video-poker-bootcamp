// straight flush
const straightFlush = [
  { name: "2",
    suit: "hearts",
    rank: 2,
    suitSymbol: "♥︎",
    displayName: "2",
    colour: "red",
    },
  { name: "4",
    suit: "hearts",
    rank: 4,
    suitSymbol: "♥︎",
    displayName: "4",
    colour: "red",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    },
  { name: "3",
    suit: "hearts",
    rank: 3,
    suitSymbol: "♥︎",
    displayName: "3",
    colour: "red",
    },
  { name: "5",
    suit: "hearts",
    rank: 5,
    suitSymbol: "♥︎",
    displayName: "5",
    colour: "red",
    }
];




// four of a kind
const fourOfAKind = [
  { name: "jack",
    suit: "hearts",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "diamonds",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "clubs",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "black",
    },
  { name: "jack",
    suit: "spades",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "black",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];


// full house
const fullHouse = [
  { name: "jack",
    suit: "hearts",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "diamonds",
    rank: 11,
    suitSymbol: "di",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "clubs",
    rank: 11,
    suitSymbol: "cl",
    displayName: "J",
    colour: "black",
    },
  { name: "6",
    suit: "diamonds",
    rank: 6,
    suitSymbol: "di",
    displayName: "6",
    colour: "red",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];

// flush
const flushHand = [
  { name: "2",
    suit: "hearts",
    rank: 2,
    suitSymbol: "♥︎",
    displayName: "2",
    colour: "red",
    },
  { name: "8",
    suit: "hearts",
    rank: 8,
    suitSymbol: "♥︎",
    displayName: "8",
    colour: "red",
    },
  { name: "4",
    suit: "hearts",
    rank: 4,
    suitSymbol: "♥︎",
    displayName: "4",
    colour: "red",
    },
  { name: "queen",
    suit: "hearts",
    rank: 12,
    suitSymbol: "♥︎",
    displayName: "Q",
    colour: "red",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];


// straight
const straightHand = [
  { name: "9",
    suit: "clubs",
    rank: 9,
    suitSymbol: "cl",
    displayName: "9",
    colour: "black",
    },
  { name: "queen",
    suit: "spades",
    rank: 12,
    suitSymbol: "sp",
    displayName: "Q",
    colour: "black",
    },
  { name: "jack",
    suit: "hearts",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "king",
    suit: "diamonds",
    rank: 13,
    suitSymbol: "di",
    displayName: "K",
    colour: "red",
    },
  { name: "10",
    suit: "hearts",
    rank: 10,
    suitSymbol: "♥︎",
    displayName: "10",
    colour: "red",
    }
];

// three of a kind
const threeOfAKind = [
  { name: "jack",
    suit: "hearts",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "diamonds",
    rank: 11,
    suitSymbol: "di",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "clubs",
    rank: 11,
    suitSymbol: "cl",
    displayName: "J",
    colour: "black",
    },
  { name: "queen",
    suit: "spades",
    rank: 12,
    suitSymbol: "sp",
    displayName: "Q",
    colour: "black",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];

// two pair
const twoPair = [
  { name: "jack",
    suit: "hearts",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "diamonds",
    rank: 11,
    suitSymbol: "di",
    displayName: "J",
    colour: "red",
    },
  { name: "queen",
    suit: "clubs",
    rank: 12,
    suitSymbol: "cl",
    displayName: "Q",
    colour: "black",
    },
  { name: "queen",
    suit: "spades",
    rank: 12,
    suitSymbol: "sp",
    displayName: "Q",
    colour: "black",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];

// one pair
const onePair = [
  { name: "jack",
    suit: "hearts",
    rank: 11,
    suitSymbol: "♥︎",
    displayName: "J",
    colour: "red",
    },
  { name: "jack",
    suit: "diamonds",
    rank: 11,
    suitSymbol: "di",
    displayName: "J",
    colour: "red",
    },
  { name: "4",
    suit: "clubs",
    rank: 4,
    suitSymbol: "cl",
    displayName: "4",
    colour: "black",
    },
  { name: "queen",
    suit: "spades",
    rank: 12,
    suitSymbol: "sp",
    displayName: "Q",
    colour: "black",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];

// high card
const highCard = [
  { name: "7",
    suit: "hearts",
    rank: 7,
    suitSymbol: "♥︎",
    displayName: "7",
    colour: "red",
    },
  { name: "jack",
    suit: "diamonds",
    rank: 11,
    suitSymbol: "di",
    displayName: "J",
    colour: "red",
    },
  { name: "4",
    suit: "clubs",
    rank: 4,
    suitSymbol: "cl",
    displayName: "4",
    colour: "black",
    },
  { name: "queen",
    suit: "spades",
    rank: 12,
    suitSymbol: "sp",
    displayName: "Q",
    colour: "black",
    },
  { name: "6",
    suit: "hearts",
    rank: 6,
    suitSymbol: "♥︎",
    displayName: "6",
    colour: "red",
    }
];
